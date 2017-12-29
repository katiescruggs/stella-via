import React from 'react';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome.js';
import MainHeader from './MainHeader.js';

const CurrentView = ({page}) => {
  const pages = {
    welcome: <Welcome />,
    LocationModal: <MainHeader />,
    Constellations: <MainHeader />
  };

  return pages[page];
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);