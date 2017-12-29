import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome.js';
import MainHeader from './MainHeader.js';
import APOD from '../components/APOD.js';
import LocationModal from './LocationModal.js';
import Constellations from './Constellations.js';

const CurrentView = ({page}) => {
  const pages = {
    welcome: <Welcome />,
    LocationModal: <LocationModal />,
    Constellations: <Constellations />,
    APOD: <APOD />
  };

  return pages[page];
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);