import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Welcome from '../components/Welcome.js';
import APOD from '../components/APOD.js';
import LocationModal from './LocationModal.js';
import TonightsSky from './TonightsSky.js';
import Search from './Search.js';
import User from './User.js';

const CurrentView = ({page}) => {
  const pages = {
    welcome: <Welcome />,
    LocationModal: <LocationModal />,
    TonightsSky: <TonightsSky />,
    APOD: <APOD />,
    Search: <Search />,
    User: <User />
  };

  return pages[page];
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);