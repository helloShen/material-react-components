/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import '../css/app.css';
import React from 'react';
import Button from '../button/button';
import TextField from '../textfield/textfield';
import Card, * as card from '../card/card';
import Footer from '../footer/footer';
import Avatar from '../assets/img/avatar.jpeg';

const MUI = { primary: '#1976d2', surface: '#ffffff' };
const MATERIAL = { primary: '#6200cc', surface: '#ffffff' };
const CRANE = { primary: '#5C1349', surface: '#ffffff' };
const FORTNIGHTLY = { primary: '#661FFF', surface: '#ffffff' };
const RALLY = { primary: '#3C3C46', surface: '#ffffff' };
const POSIVIBE = { primary: '#000000', surface: '#ffffff' };
const SHRINE = { primary: '#442c2e', surface: '#fedbd0' };
const THEME = [MUI, MATERIAL, CRANE, FORTNIGHTLY, RALLY, POSIVIBE, SHRINE];

function ButtonSection({ primary, surface, handleClick }) {
  const style = { width: '9.5rem' };
  return (
    <div className="button-section">
      <div className="buttons">
        <Button
          primary={primary}
          surface={surface}
          variant="contained"
          size="medium"
          clickCallback={handleClick}
          style={style}
        >
          click me
        </Button>
        <Button
          primary={primary}
          surface={surface}
          variant="outlined"
          size="medium"
          clickCallback={handleClick}
          style={style}
        >
          toggle
        </Button>
        <Button
          primary={primary}
          surface={surface}
          variant="text"
          size="medium"
          clickCallback={handleClick}
          style={style}
        >
          theme
        </Button>
      </div>
      <div className="tag">
        &lt;Button&gt;
      </div>
    </div>
  );
}

function TextFieldSection({ primary, text, handleChange }) {
  return (
    <div className="textfield-section">
      <TextField
        label="Email"
        helper="example@mail.com"
        primary={primary}
        text={text}
        pattern="^[\w\.-]+@[\w-]+\.[\w-]{2,}$"
        handleChange={handleChange}
      />
      <div className="tag">
        &lt;TextField&gt;
      </div>
    </div>
  );
}

function CardSection({ primary, surface, email }) {
  return (
    <div className="card-section">
      <Card
        primary={primary}
        surface={surface}
      >
        <card.CardMain>
          <card.CardAvatar>
            <img src={Avatar} alt="avatar" />
          </card.CardAvatar>
          <div>
            <card.CardTitle>SHEN</card.CardTitle>
            <card.CardSubtitle>{email}</card.CardSubtitle>
          </div>
        </card.CardMain>
        <card.CardDivider />
        <card.CardContent>
          Edit the email above through the TextField component.
        </card.CardContent>
      </Card>
      <div className="tag">
        &lt;Card&gt;
      </div>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      idx: 1,
      theme: THEME[1],
      email: 'hireme.shen@gmail.com',
    };
  }

  handleClick() {
    const { idx } = this.state;
    let r = idx;
    while (r === idx) {
      r = Math.floor((Math.random() * THEME.length));
    }
    this.setState({
      idx: r,
      theme: THEME[r],
    });
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    const { theme, email } = this.state;
    const { primary, surface } = theme;
    return (
      <div className="app">
        <div className="header">
          <div className="title">
            Handcrafted React Components
          </div>
          <div className="sub-title">
            Implementing google Material Design principles.
          </div>
        </div>
        <div className="main">
          <CardSection
            primary={primary}
            surface={surface}
            email={email}
          />
          <TextFieldSection
            primary={primary}
            text={email}
            pattern="/^[\w\.-]+@[\w-]+\.[\w-]{2,}$/g"
            handleChange={this.handleChange}
          />
          <ButtonSection
            primary={primary}
            surface={surface}
            handleClick={this.handleClick}
          />
        </div>
        <Footer
          sourceCode="https://github.com/helloShen/material-react-components"
          githubLogo="black"
        />
      </div>
    );
  }
}
