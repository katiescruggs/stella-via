import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { colors } from '../assets/colors';
import LocationBanner from './LocationBanner';
import { Location } from 'expo';
import { 
  StyleSheet, 
  WebView, 
  View, 
  Text, 
  Image
} from 'react-native';

// let watching;
export class StarMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      azDegree: 0
    };
  }

  async componentDidMount() {
    // const azDegree = await this.findAZ();
    // console.log(azDegree);
    // this.setState({azDegree});
    // watching = await Expo.Location.watchHeadingAsync(heading => {
    //   console.log('watch', heading)
    //     this.setAZ(heading.magHeading)
    //     return heading;
    //  });
  };

  // async componentWillUnmount() {
  //   await watching.remove();
  // }

  // setAZ = async (azDegree) => {
  //   const currentAZ = this.state.azDegree;
  //   if (azDegree > (currentAZ + 10) || azDegree < (currentAZ - 10)) {
  //     console.log('setState') //     await this.setState({ azDegree })
  //   }
  // }

  //could be a helper
  // findAZ = async () => {
  //   try {
  //     const location = await Expo.Location.getHeadingAsync();
  //     return location.magHeading;
  //   } catch (error) {
  //     return 0;
  //   }
  // }

  render() {
    const { lat, lon } = this.props;
    const { azDegree } = this.state;
    const path = `https://virtualsky.lco.global/embed/?longitude=${lon}&latitude=${lat}&projection=stereo&keyboard=false&constellations=true&constellationlabels=true&showstarlabels=true&showdate=false&showposition=false&gridlines_az=true&live=true&az=${azDegree}`

    const errorMessage = 
      <Text style={styles.msgText}>
        404: Star Map cannot load.
      </Text>;

    const displayStarMap = azDegree >= 0
      ? <WebView
          renderError={() => errorMessage}
          style={styles.webView}
          scalesPageToFit={true}
          source={{uri: path}} />
      : <Text style={styles.msgText}>Loading Night Sky...</Text>;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>
            STAR MAP
          </Text>
        </View>
        <LocationBanner />
        {displayStarMap}
        <NavBar />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.$black,
    flex: 1, 
  },
  header: {
    backgroundColor: colors.$purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    zIndex: 9000
  },
  titleText: {
    color: colors.$white,
    paddingTop: 30,
    fontSize: 25
  },
  msgText: {
    color: colors.$white,
    fontSize: 30,
    marginTop: 50,
    textAlign: 'center'
  },
  webView: {
    marginBottom: 80
  }
});

export const mapStateToProps = state => ({
  lat: state.location.lat,
  lon: state.location.lon
});

export default connect(mapStateToProps, null)(StarMap);

StarMap.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string
};