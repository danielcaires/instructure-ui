import React, { PropTypes, Component } from 'react'
import themeable from '../../../util/themeable'
import classnames from 'classnames'
import { omitProps } from '../../../util/passthroughProps'

import Link from '../../Link'

import styles from './styles.css'
import theme from './theme.js'

@themeable(theme, styles)
export default class BreadcrumbLink extends Component {
  static propTypes = {
    /**
    * Content to render as the crumb, generally should be text.
    */
    children: PropTypes.node.isRequired,
    /**
    * Link the crumb should direct to, if provided the crumb will be a link
    */
    href: PropTypes.string,
    /**
    * Sets the font-size of the breadcrumb text
    */
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  renderBreadCrumb () {
    const {
      children,
      href
    } = this.props

    const text = <span className={styles.ellipsis}>{children}</span>

    let title

    if (typeof children === 'string') {
      title = children
    }

    if (href) {
      return <Link href={href} title={title}>{text}</Link>
    } else {
      return <span className={styles.text}>{text}</span>
    }
  }

  render () {
    const props = omitProps(this.props, BreadcrumbLink.propTypes)

    const classes = {
      [styles.root]: true
    }

    return (
      <span className={classnames(classes)} {...props}>
        {this.renderBreadCrumb()}
      </span>
    )
  }
}
