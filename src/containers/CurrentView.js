import React from 'react';
import { connect } from 'react-redux';
import User from './User.js';
import Search from './Search.js';
import StarMap from './StarMap.js';
import UserModal from './UserModal.js';
import APOD from '../components/APOD.js';
import TonightsSky from './TonightsSky.js';
import Welcome from '../components/Welcome.js';
import LocationModal from './LocationModal.js';

const CurrentView = ({ page }) => {
  const pages = {
    User: <UserModal />,
    APOD: <APOD />,
    Search: <Search />,
    Welcome: <Welcome />,
    StarMap: <StarMap />,
    TonightsSky: <TonightsSky />,
    LocationModalMap: <LocationModal />,
    LocationModalTonight: <LocationModal />,
  };

  return pages[page];
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);