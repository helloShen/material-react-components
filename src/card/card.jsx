/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-object-spread */
import './card.css';
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      hover: false,
    };
  }

  handleMouseEnter() {
    this.setState({
      hover: true,
    });
  }

  handleMouseLeave(e) {
    this.setState({
      hover: false,
    });
  }

  handleFocus() {
    this.setState({
      focused: true,
    });
  }

  handleBlur() {
    this.setState({
      focused: false,
    });
  }

  render() {
    const {
      primary,
      surface,
      children,
    } = this.props;
    const {
      activated,
      focused,
      hover,
      disabled,
      error,
    } = this.state;
    let classNames = 'smui-card smui-custom';
    if (hover) classNames += ' smui-hover';
    const style = Object.assign(
      {},
      (primary && { '--primary': primary }),
      (surface && { '--surface': surface }),
    );
    return (
      <div
        className={classNames}
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <div className="smui-card__overlay" />
        { children }
      </div>
    );
  }
}

export function CardMain({ children }) {
  return (
    <div className="smui-card__main">
      {children}
    </div>
  );
}

export function CardAvatar({ children }) {
  return (
    <div className="smui-card__avatar">
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return (
    <p className="smui-card__title">
      {children}
    </p>
  );
}

export function CardSubtitle({ children }) {
  return (
    <p className="smui-card__subtitle">
      {children}
    </p>
  );
}

export function CardDivider() {
  return (
    <div className="smui-card__divider">
      <hr className="smui-card__real-divider" />
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="smui-card__content">
      {children}
    </div>
  );
}
