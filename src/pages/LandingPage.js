import React, { Component } from 'react';

// store - redux
import { connect } from 'react-redux';
import { fetchLandingPage } from 'features/landingPageSlice';

// import component
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import AboutMe from 'parts/AboutMe';
import Ability from 'parts/Ability';
import MyProjects from 'parts/MyProjects';
import Certificate from 'parts/Certificate';
import Footer from 'parts/Footer';
import MyModal from 'parts/MyModal';
import Loading from 'parts/Loading';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    if (this.props.status === 'idle') {
      this.props.fetchLandingPage();
    }
  }

  onShowModalHandler(item) {
    this.setState({show: true, itemModal: item});
  }

  onHideModalHandler() {
    this.setState({show: false, itemModal: {}});
  }

  render() {
    const { page, status } = this.props;

    let content;

    if (status === 'loading') {
      content = <Loading />
    } else if (status === 'succeeded') {
      content = 
      (
        <>
          <Header {...this.refSection}></Header>
          <Hero
            data={page.header}
            refAboutMe={this.refSection.refAboutMe}
            refHome={this.refSection.refHome}
          />
          <AboutMe
            data={page.aboutMe}
            refAboutMe={this.refSection.refAboutMe}
          />
          <Ability
            data={page.ability}
            refAbility={this.refSection.refAbility}
          />
          <MyProjects
            isLandingPage
            data={page.projects}
            refPortfolio={this.refSection.refPortfolio}
          />
          <Certificate
            isLandingPage
            data={page.certificates}
            refCertificate={this.refSection.refCertificate}
            showModal={this.onShowModalHandler}
          />
          <MyModal show={this.state.show} handleClose={this.onHideModalHandler}>
            <img src={this.state.itemModal.imageUrl} alt={`certificate`} style={{ width: '100%'}} />
          </MyModal>
          <Footer />
        </>
      )
    } else if (status === 'failed') {
      content = <h1>Error</h1>
    }

    return content;
  }
}

const mapStateToProps = (state) => ({
  page: state.landingPage.landingPage,
  status: state.landingPage.status
})

export default connect(mapStateToProps, { fetchLandingPage })(LandingPage);
