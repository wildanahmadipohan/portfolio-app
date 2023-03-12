import React, { Component } from 'react';

// store - redux
import { connect } from 'react-redux';
import { fetchCertificatePage } from 'features/certificatePageSlice';

import Header from 'parts/Header';
import Certificate from 'parts/Certificate';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import MyModal from 'parts/MyModal';
import Loading from 'parts/Loading';

class CertificatesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    if (this.props.status === 'idle') {
      this.props.fetchCertificatePage();
    }
  }

  onShowModalHandler(item) {
    this.setState({show: true, itemModal: item});
  }

  onHideModalHandler() {
    this.setState({show: false, itemModal: {}});
  }

  render() {
    const { certificates, status } = this.props;

    if (status === 'loading') {
      return (<Loading />)
    }

    if (status === 'succeeded') {
      return (
        <>
          <Header isCentered />
          <div className="content" style={{minHeight: '100vh'}}>
            <div className="container pt-4 mt-md-5 pt-md-5">
              <Breadcrumb data={this.breadcrumbList} />
            </div>
            <Certificate data={certificates} showModal={this.onShowModalHandler} />
          </div>
          <MyModal show={this.state.show} handleClose={this.onHideModalHandler}>
            <img src={this.state.itemModal.imageUrl} alt='certificate' style={{width: '100%'}} />
          </MyModal>
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
  certificates: state.certificatePage.certificates,
  status: state.certificatePage.status
})

export default connect(mapStateToProps, {fetchCertificatePage})(CertificatesPage)