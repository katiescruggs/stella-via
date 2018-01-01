import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import NavButton from './NavButton';
import { connect } from 'react-redux';
import { changePage, setAPOD } from '../actions';
import { colors } from '../assets/colors';
import getAPOD from '../helpers/getAPOD';



class Welcome extends Component {
  async componentDidMount() {
    await this.fetchAPOD();
  }

  fetchAPOD = async () => {
    const apodData = await getAPOD();
    this.props.setAPOD(apodData);
  }

  render() {
    const navRouteData = {
      'Search': {
        source: require('../assets/icons/search.png'),
        pageRoute: 'Search'
      },
      'Tonight\'s Sky': {
        source: require('../assets/icons/night-sky.png'),
        pageRoute: this.props.location ? 'TonightsSky' : 'LocationModalTonight'
      }, 
      'Daily Image': {
        source: require('../assets/icons/observatory.png'),
        pageRoute: 'APOD'
      }, 
      'Login': {
        source: require('../assets/icons/user.png'),
        pageRoute: 'User'
      }, 
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
      <ImageBackground source={require('../assets/star-background.jpg')} style={styles.container}>
        <Image style={styles.mainTitle} source={require('../assets/stella-via-logo-gradient.png')}/>
        <View style={styles.nav}>
          {navButtons}
        </View>
      </ImageBackground>
    );    
  }
};

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
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: colors.$white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 30,
    marginBottom: 20,
  }
});

const mapStateToProps = state => ({
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  changePage: page => {
    dispatch(changePage(page));
  },
  setAPOD: apodData => {
    dispatch(setAPOD(apodData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

