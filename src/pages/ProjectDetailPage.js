import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectDetailPage } from 'features/projectDetailPageSlice';

import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import ProjectDetailTitle from 'parts/ProjectDetailTitle';
import ProjectDetailImages from 'parts/ProjectDetailImages';
import ProjectDetailDesc from 'parts/ProjectDetailDesc';
import Loading from 'parts/Loading';

const ProjectDetailPage = (props) => {
  const slug = useParams();
  const dispatch = useDispatch();
  
  const {status, project} = useSelector((state) => state.projectDetailPage);

  const breadcrumbList = [
    {pageTitle: 'Home', pageHref: '/'},
    {pageTitle: 'Projects', pageHref: '/projects'},
    {pageTitle: 'Detail', pageHref: '#'}
  ];

  useEffect(() => {
    document.title = 'WAPSite | Project Detail';
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  });

  useEffect(() => {
    dispatch(fetchProjectDetailPage(slug.slug));
  }, [dispatch, slug.slug]);

  if (status === 'loading') {
    return (<Loading />)
  }

  if (status === 'succeeded') {
    return (
      <>
        <Header isCentered/>
        <div className="content" style={{minHeight: '100vh'}}>
          <div className="container pt-md-5" style={{marginTop: 60}}>
            <Breadcrumb data={breadcrumbList} />
          </div>
          <ProjectDetailTitle data={project} />
          <ProjectDetailImages data={project.images} />
          <ProjectDetailDesc desc={project.desc} stacks={project.stacks} />
        </div>
        <Footer />
      </>
    )
  }
  
  if (status === 'failed') {
    return (<h1>Error</h1>)
  }
}

export default ProjectDetailPage;