/* eslint-disable prefer-object-spread */
/* eslint-disable react/prop-types */
import './button.css';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      pressed: false,
      focused: false,
      hover: false,
    };
  }

  handleMouseDown() {
    this.setState({
      pressed: true,
    });
  }

  handleMouseUp() {
    this.setState({
      pressed: false,
    });
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
    const { pressed } = this.state;
    if (pressed) {
      this.setState({
        pressed: false,
      });
    }
  }

  render() {
    const {
      children,
      variant,
      size,
      primary,
      surface,
    } = this.props;
    const {
      pressed,
      focused,
      hover,
    } = this.state;
    const style = Object.assign(
      {},
      (primary && { '--primary': primary }),
      (surface && { '--surface': surface }),
    );
    let classNames = 'smui-btn';
    if (variant) {
      switch (variant) {
        case 'contained':
          classNames += ' smui-contained';
          break;
        case 'outlined':
          classNames += ' smui-outlined';
          break;
        case 'text':
          classNames += ' smui-text';
          break;
        default:
          classNames += ' smui-contained';
          break;
      }
    }
    if (size) {
      switch (size) {
        case 'small':
          classNames += ' smui-sm';
          break;
        case 'medium':
          classNames += ' smui-md';
          break;
        case 'large':
          classNames += ' smui-lg';
          break;
        default:
          break;
      }
    }
    if (pressed) classNames += ' smui-pressed';
    if (focused) classNames += ' smui-focused';
    if (hover) classNames += ' smui-hover';
    return (
      <div
        style={style}
        className={classNames}
        role="button"
        tabIndex={0}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div
          className="smui-btn__overlay"
        />
        {children.toUpperCase()}
      </div>
    );
  }
}

export default Button;
