import React from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import StarMap from './StarMap';
import APOD from '../components/APOD';
import TonightsSky from './TonightsSky';
import Welcome from '../components/Welcome';
import LocationModal from './LocationModal';
import Constellation from '../components/Constellation';

const CurrentView = ({ page }) => {
  const pages = {
    APOD: <APOD />,
    Search: <Search />,
    Welcome: <Welcome />,
    StarMap: <Constellation />,
    TonightsSky: <TonightsSky />,
    Constellation: <Constellation />,
    LocationModalMap: <LocationModal />,
    LocationModalTonight: <LocationModal />,
  };

  return pages[page];
};

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);