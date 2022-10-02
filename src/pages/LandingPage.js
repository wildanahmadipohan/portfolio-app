import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import AboutMe from 'parts/AboutMe';
import Ability from 'parts/Ability';
import MyProjects from 'parts/MyProjects';
import Certificate from 'parts/Certificate';

import dataJson from 'data/data.json';
import Footer from 'parts/Footer';
import MyModal from 'parts/MyModal';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataJson,
      show: false,
      itemModal: {}
    };

    this.refSection = {
      refHome: React.createRef(),
      refAboutMe: React.createRef(),
      refAbility: React.createRef(),
      refPortfolio: React.createRef(),
      refCertificate: React.createRef(),
    };

    this.onShowModalHandler = this.onShowModalHandler.bind(this);
    this.onHideModalHandler = this.onHideModalHandler.bind(this);
  }

  componentDidMount() {
    document.title = 'WAPSite | Home';
    window.scrollTo(0, 0);
  }

  onShowModalHandler(item) {
    this.setState({show: true, itemModal: item});
  }

  onHideModalHandler() {
    this.setState({show: false, itemModal: {}});
  }

  render() {
    return (
      <>
        <Header {...this.refSection}></Header>
        <Hero
          data={this.state.data.landingPage.header}
          refAboutMe={this.refSection.refAboutMe}
          refHome={this.refSection.refHome}
        />
        <AboutMe
          data={this.state.data.landingPage.aboutMe}
          refAboutMe={this.refSection.refAboutMe}
        />
        <Ability
          data={this.state.data.landingPage.ability}
          refAbility={this.refSection.refAbility}
        />
        <MyProjects
          isLandingPage
          data={this.state.data.landingPage.projects}
          refPortfolio={this.refSection.refPortfolio}
        />
        <Certificate
          isLandingPage
          data={this.state.data.landingPage.certificates}
          refCertificate={this.refSection.refCertificate}
          showModal={this.onShowModalHandler}
        />
        <MyModal show={this.state.show} handleClose={this.onHideModalHandler}>
          <img src={this.state.itemModal.imageUrl} alt={`certificate`} style={{ width: '100%'}} />
        </MyModal>
        <Footer />
      </>
    );
  }
}
