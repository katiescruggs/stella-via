import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import { changePage, setAPOD } from '../actions';
import NavButton from './NavButton';
import getAPOD from '../helpers/getAPOD';

export class Welcome extends Component {
  async componentWillMount() {
    await this.fetchAPOD();
  }

  fetchAPOD = async () => {
    const apodData = await getAPOD();

    this.props.setAPOD(apodData);
  }

  render() {
    const navRouteData = {
      'Tonight': {
        source: require('../assets/icons/night-sky.png'),
        pageRoute: this.props.location ? 'TonightsSky' : 'LocationModalTonight'
      }, 
      'Star Map': {
        source: require('../assets/icons/star-map.png'),
        pageRoute: this.props.location ? 'StarMap' : 'LocationModalMap'
      }, 
      'Daily Image': {
        source: require('../assets/icons/photo.png'),
        pageRoute: 'APOD'
      }, 
      'Explore': {
        source: require('../assets/icons/search.png'),
        pageRoute: 'Search'
      }
    };

    const navButtons = Object.keys(navRouteData).map((name, index) => {
      return (
        <NavButton 
          key={`nav-btn-${index}`}
          name={name}
          path={navRouteData[name].source}
          pageRoute={navRouteData[name].pageRoute}
        />
      );
    });

    return (
      <ImageBackground 
        source={require('../assets/star-background.jpg')} 
        style={styles.container}>
        
        <Image 
          style={styles.mainTitle} 
          source={require('../assets/stella-via-logo-gradient.png')}
        />
        <View style={styles.nav}>
          {navButtons}
        </View>
      </ImageBackground>
    );    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  mainTitle: {
    marginTop: 70,
    width: '100%',    
    height: 200
  },
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  }
});

export const mapStateToProps = state => ({
  location: state.location
});

export const mapDispatchToProps = dispatch => ({
  changePage: page => {
    dispatch(changePage(page));
  },
  setAPOD: apodData => {
    dispatch(setAPOD(apodData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

