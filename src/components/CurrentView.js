import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from './Search';
import StarMap from './StarMap';
import APOD from './APOD';
import TonightsSky from './TonightsSky';
import Welcome from './Welcome';
import LocationModal from './LocationModal';
import Constellation from './Constellation';
import { LightMap } from './LightMap';

export const CurrentView = ({ page }) => {
  const pages = {
    APOD: <APOD />,
    Search: <Search />,
    Welcome: <Welcome />,
    StarMap: <LightMap />,
    TonightsSky: <TonightsSky />,
    ConstellationSearch: <Constellation />,
    ConstellationTonight: <Constellation />,
    LocationModalMap: <LocationModal />,
    LocationModalTonight: <LocationModal />,
    LightMap: <LightMap />
  };

  return pages[page];
};

export const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps, null)(CurrentView);

CurrentView.propTypes = {
  page: PropTypes.string,
};