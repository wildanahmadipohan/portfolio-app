import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import AboutMe from 'parts/AboutMe';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.refAboutMe = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refAboutMe={this.refAboutMe} />
        <AboutMe refAboutMe={this.refAboutMe} />
      </>
    );
  }
}
