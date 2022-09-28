import React, { Component } from 'react';

import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import ProjectDetailTitle from 'parts/ProjectDetailTitle';

import dataJson from 'data/data.json';
import ProjectDetailImages from 'parts/ProjectDetailImages';
import ProjectDetailDesc from 'parts/ProjectDetailDesc';

export default class ProjectDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: dataJson.WAPSite
    };

    this.breadcrumbList = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Projects', pageHref: '/projects'},
      {pageTitle: 'Detail', pageHref: '#'}
    ];
  }

  componentDidMount() {
    document.title = 'WAPSite | Project Detail';
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <>
        <Header isCentered/>
        <div className="content" style={{minHeight: '100vh'}}>
          <div className="container pt-md-5" style={{marginTop: 60}}>
            <Breadcrumb data={this.breadcrumbList} />
          </div>
          <ProjectDetailTitle data={this.state.project} />
          <ProjectDetailImages data={this.state.project.images} />
          <ProjectDetailDesc desc={this.state.project.desc} stacks={this.state.project.stacks} />
        </div>
        <Footer />
      </>
    )
  }
}
