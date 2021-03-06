import React from 'react'
import Avatar from '../index'

import styles from '../styles.css'

describe('<Avatar />', function () {
  const testbed = new Testbed(<Avatar userName="Jessica Jones" />)

  describe('for a11y', function () {
    it('should meet standards', function (done) {
      const subject = testbed.render()

      subject.should.be.accessible(done)
    })

    it('should have aria-hidden=true', function () {
      const subject = testbed.render()

      expect(subject.find('[aria-hidden]')).to.be.present
    })
  })

  describe('with the default props', function () {
    it('should should display as a circle', function () {
      const subject = testbed.render()

      expect(subject.hasClass(styles.circle)).to.be.true
    })

    it('should render initials', function () {
      const subject = testbed.render()

      expect(subject.text())
        .to.equal('JJ')
    })
  })

  describe('when an image url is provided', function () {
    it('should display the image url provided', function () {
      const image = Testbed.testImage
      const subject = testbed.render({
        userImgUrl: image
      })

      expect(subject.getComputedStyle().getPropertyValue('background-image'))
        .to.contain(image)
    })
  })

  describe('when variant is set to "rectangle"', function () {
    it('should display as a rectangle', function () {
      const subject = testbed.render({
        variant: 'rectangle'
      })

      expect(subject.hasClass(styles.rectangle)).to.be.true
    })
  })

  describe('when the user name has no spaces', function () {
    it('should render a single initial', function () {
      const subject = testbed.render({
        userName: 'Jessica'
      })

      expect(subject.text()).to.equal('J')
    })
  })
})
