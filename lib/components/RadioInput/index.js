import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import themeable from '../../util/themeable'
import shortid from 'shortid'
import { omitProps } from '../../util/passthroughProps'

import styles from './styles.css'
import theme from './theme.js'
/**
---
category: forms
---
  ```jsx_example
    <RadioInput
      label={lorem.sentence()}
      value="foo"
      name="bar"
      checked
    />
  ```
**/
@themeable(theme, styles)
class RadioInput extends Component {
  static propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['simple', 'toggle']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    context: PropTypes.oneOf(['success', 'warning', 'danger', 'off']),
    isBlock: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    onClick: function (event) {},
    onChange: function (event) {},
    variant: 'simple',
    size: 'medium',
    disabled: false,
    isBlock: true,
    context: 'success'
  }

  constructor (props) {
    super(props)

    this._defaultId = 'RadioInput__' + shortid.generate()
  }

  handleClick = (e) => {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }

    this.props.onClick(e)
  }

  handleChange = (e) => {
    if (this.props.disabled) {
      e.preventDefault()
      return
    }

    this.props.onChange(e)
  }

  focus () {
    this._input.focus()
  }

  get id () {
    return this.props.id || this._defaultId
  }

  get focused () {
    return (document.activeElement === ReactDOM.findDOMNode(this._input))
  }

  get checked () {
    return this._input.checked
  }

  render () {
    const {
      disabled,
      label,
      variant,
      size,
      isBlock,
      context,
      value,
      name
    } = this.props

    const props = omitProps(this.props, RadioInput.propTypes)

    const classes = {
      [styles.root]: true,
      [styles.disabled]: disabled,
      [styles[variant]]: true,
      [styles[context]]: variant === 'toggle',
      [styles[size]]: true,
      [styles['is-block']]: isBlock
    }

    return (
      <label
        className={classnames(classes)}
        htmlFor={this.id}
      >
        <input
          {...props}
          id={this.id}
          ref={(c) => { this._input = c }}
          value={value}
          name={name}
          checked={this.props.checked}
          type="radio"
          className={styles.input}
          aria-disabled={disabled ? 'true' : null}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <span className={styles.control}>
          <span className={styles.facade} aria-hidden="true" />
          <span className={styles.label}>
            {label}
          </span>
        </span>
      </label>
    )
  }
}

export default RadioInput
