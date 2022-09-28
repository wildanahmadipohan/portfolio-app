import React, { Component } from 'react';
import Header from 'parts/Header'
import MyProjects from 'parts/MyProjects';

import dataJson from 'data/data.json';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';

export default class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: dataJson,
    };

    this.breadcrumbList = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Projects', pageHref: '/projects'}
    ]
  }

  componentDidMount() {
    document.title = 'WAPSite | Projects';
    // setTimeout(() => {
      window.scrollTo(0, 0);
    // });
  }

  render() {
    return (
      <>
        <Header isCentered/>
        <div className="content" style={{minHeight: '100vh'}}>
          <div className="container pt-md-5" style={{marginTop: 60}}>
            <Breadcrumb data={this.breadcrumbList} />
          </div>
          <MyProjects data={this.state.data.landingPage.projects} />
        </div>
        <Footer />
      </>
    )
  }
}