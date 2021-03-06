import React from 'react'
import TreeButton from '../index'
import styles from '../styles.css'
import IconFolderSolid from 'instructure-icons/lib/Solid/IconFolderSolid'
import IconDocumentSolid from 'instructure-icons/lib/Solid/IconDocumentSolid'

describe('<TreeButton />', function () {
  const testbed = new Testbed(<TreeButton id="1" />)

  it('should render', function () {
    const button = testbed.render()
    expect(button).to.be.present
  })

  describe('descriptor', function () {
    it('does not render a descriptor element if no descriptor passed', function () {
      const button = testbed.render()
      expect(button.find('.' + styles.textDescriptor)).to.have.length(0)
    })

    it('renders a descriptor element if passed', function () {
      const button = testbed.render({
        descriptor: 'Some Descriptor'
      })
      expect(button.find('.' + styles.textDescriptor).text()).to.equal('Some Descriptor')
    })
  })

  describe('icons', function () {
    it('renders a passed collection Icon', function () {
      const button = testbed.render({type: 'collection', collectionIcon: IconFolderSolid})
      const svg = button.find(IconFolderSolid)
      expect(svg.length).to.equal(1)
    })

    it('renders a passed item Icon', function () {
      const button = testbed.render({itemIcon: IconDocumentSolid})
      const svg = button.find(IconDocumentSolid)
      expect(svg.length).to.equal(1)
    })

    it('renders a TreeButton without icon if no icon prop passd', function () {
      const button = testbed.render()
      const svg1 = button.find(IconFolderSolid)
      const svg2 = button.find(IconDocumentSolid)
      expect(svg1.length + svg2.length).to.equal(0)
    })
  })
})
