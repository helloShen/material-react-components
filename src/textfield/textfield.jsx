/* eslint-disable prefer-object-spread */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './textfield.css';
import React from 'react';

class TextField extends React.Component {
  static generateId() {
    const millisecond = Date.now();
    const r = Math.floor(Math.random() * 1000);
    return millisecond * 1000 + r;
  }

  constructor(props) {
    super(props);
    this.id = TextField.generateId();
    this.pattern = new RegExp(props.pattern, 'g');
    this.error = `error: ${props.helper}`;
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    const activated = !!((props.text && props.text.length > 0));
    this.state = {
      activated,
      focused: false,
      hover: false,
      disabled: false,
      error: false,
    };
  }

  handleFocus() {
    this.setState({
      activated: true,
      focused: true,
    });
  }

  handleBlur(e) {
    if (e.target.value.length > 0) {
      this.setState({
        focused: false,
        error: !this.isValid(e.target.value),
      });
    } else {
      this.setState({
        activated: false,
        focused: false,
      });
    }
  }

  static handleKeyDown(e) {
    if (e.key === 'Enter') e.target.blur();
  }

  handleMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
    });
  }

  handleError() {
    this.setState({
      error: true,
    });
  }

  isValid(content) {
    return content.match(this.pattern);
  }

  render() {
    const {
      label,
      helper,
      primary,
      text,
      handleChange,
    } = this.props;
    const {
      activated,
      focused,
      hover,
      disabled,
      error,
    } = this.state;
    const id = `textfield-${this.id}`;
    let helperMessage = helper;
    let classNames = 'smui-textfield';
    if (activated) classNames += ' smui-activated';
    if (focused) classNames += ' smui-focused';
    if (hover) classNames += ' smui-hover';
    if (disabled) classNames += ' smui-diabled';
    if (error) {
      classNames += ' smui-error';
      helperMessage = this.error;
    }
    const style = Object.assign({}, (primary && { '--primary': primary }));
    return (
      <label
        className={classNames}
        style={style}
        onMouseDown={this.handleFocus}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        htmlFor={id}
      >
        <span className="smui-textfield__label">{label}</span>
        <input
          value={text}
          className="smui-textfield__input"
          onChange={handleChange}
          onKeyDown={TextField.handleKeyDown}
          type="text"
          id={id}
        />
        <div className="smui-textfield__helper">{helperMessage}</div>
      </label>
    );
  }
}

export default TextField;
