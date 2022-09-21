import React, { Component } from 'react';

import dataJson from 'data/data.json';
import Header from 'parts/Header';
import Certificate from 'parts/Certificate';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';

export class CertificatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataJson
    }

    this.breadcrumbList = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Certificates', pageHref: '/certificates'}
    ]
  }

  componentDidMount() {
    document.title = 'WAPSite | Certificates';
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <Header isCentered />
        <div className="content" style={{minHeight: '100vh'}}>
          <div className="container pt-4 mt-md-5 pt-md-5">
            <Breadcrumb data={this.breadcrumbList} />
          </div>
          <Certificate data={this.state.data.landingPage.certificates} />
        </div>
        <Footer />
      </>
    )
  }
}

export default CertificatesPage