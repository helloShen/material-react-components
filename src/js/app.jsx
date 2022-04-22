import '../css/app.css';
import React from 'react';
import Button from '../button/button';
import TextField from '../textfield/textfield';
import Card, {
  CardTitle,
  CardSubtitle,
  CardDivider,
  CardContent,
} from '../card/card';
import Footer from '../footer/footer';

const MUI_PRIMARY = '#1976d2';
const MATERIAL_PRIMARY = '#6200cc';

function ButtonSection() {
  return (
    <div className="button-section">
      <Button
        primary={MATERIAL_PRIMARY}
        surface="#ffffff"
        variant="contained"
        size="medium"
      >
        click me
      </Button>
    </div>

  );
}

function TextFieldSection() {
  return (
    <div className="textfield-section">
      <TextField
        label="Hello"
        helper="helper"
        primary={MUI_PRIMARY}
      />
    </div>
  );
}

function CardSection() {
  return (
    <div className="card-section">
      <Card
        primary={MUI_PRIMARY}
      >
        <CardTitle>Hello</CardTitle>
        <CardSubtitle>Hello, world!</CardSubtitle>
        <CardDivider />
        <CardContent>This is my first vocabulary!</CardContent>
      </Card>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <div className="main">
        <ButtonSection />
        <TextFieldSection />
        <CardSection />
      </div>
      <Footer />
    </div>
  );
}
