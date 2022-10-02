import React, { Component } from 'react';

import dataJson from 'data/data.json';
import Header from 'parts/Header';
import Certificate from 'parts/Certificate';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import MyModal from 'parts/MyModal';

export class CertificatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataJson,
      show: false,
      itemModal: {}
    }

    this.breadcrumbList = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Certificates', pageHref: '/certificates'}
    ]

    this.onShowModalHandler = this.onShowModalHandler.bind(this);
    this.onHideModalHandler = this.onHideModalHandler.bind(this); 
  }

  componentDidMount() {
    document.title = 'WAPSite | Certificates';
    setTimeout(() => {
      window.scrollTo(0, 0)
    });
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
        <Header isCentered />
        <div className="content" style={{minHeight: '100vh'}}>
          <div className="container pt-4 mt-md-5 pt-md-5">
            <Breadcrumb data={this.breadcrumbList} />
          </div>
          <Certificate data={this.state.data.landingPage.certificates} showModal={this.onShowModalHandler} />
        </div>
        <MyModal show={this.state.show} handleClose={this.onHideModalHandler}>
          <img src={this.state.itemModal.imageUrl} alt='certificate' style={{width: '100%'}} />
        </MyModal>
        <Footer />
      </>
    )
  }
}

export default CertificatesPage