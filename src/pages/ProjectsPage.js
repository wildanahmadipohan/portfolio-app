import React, { Component } from 'react';

// store - redux
import { connect } from 'react-redux';
import { fetchProjectPage } from 'features/projectPageSlice';

import Header from 'parts/Header'
import MyProjects from 'parts/MyProjects';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import Loading from 'parts/Loading';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);

    this.breadcrumbList = [
      {pageTitle: 'Home', pageHref: '/'},
      {pageTitle: 'Projects', pageHref: '/projects'}
    ]
  }

  componentDidMount() {
    document.title = 'WAPSite | Projects';

    setTimeout(() => {
      window.scrollTo(0, 0);
    });

    if (this.props.status === 'idle') {
      this.props.fetchProjectPage();
    }
  }

  render() {
    const { projects, status } = this.props;

    if (status === 'loading') {
      return (<Loading />)
    }
    
    if (status === 'succeeded') {
      return (
        <>
          <Header isCentered/>
          <div className="content" style={{minHeight: '100vh'}}>
            <div className="container pt-md-5" style={{marginTop: 60}}>
              <Breadcrumb data={this.breadcrumbList} />
            </div>
            <MyProjects data={projects} />
          </div>
          <Footer />
        </>
      )
    }
    
    if (status === 'failed') {
      return (<h1>Error</h1>)
    }
  }
}

const mapStateToProps = (state) => ({
  projects: state.projectPage.projects,
  status: state.projectPage.status
})

export default connect(mapStateToProps, {fetchProjectPage})(ProjectsPage)