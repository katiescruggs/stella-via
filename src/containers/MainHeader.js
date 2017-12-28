import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { changePage } from '../actions';
import LocationModal from './LocationModal.js';
import Constellations from './Constellations.js';

class MainHeader extends Component {
  enterSite = () => {
    this.props.changePage('LocationModal');
  }

  render() {
    const modal = this.props.page === 'LocationModal' ? <LocationModal /> : null;
    const constellations = this.props.page === 'Constellations' ? <Constellations /> : null;
    const enter = !this.props.page ?
      <View>
        <Text style={styles.mainTitle}>Stella Via</Text>
        <TouchableHighlight style={styles.mainButton} onPress={this.enterSite} activeOpacity={0.7} underlayColor={'white'}>
          <Text style={styles.buttonText}>View Your Sky</Text>
        </TouchableHighlight>
      </View>
    : null;

    return (
      <ScrollView style={styles.nightHomepage}>
        {enter}
        {constellations}
        {modal}
      </ScrollView>
    );
  }
};

const styles = {
  nightHomepage: {
    paddingTop: 50,
    width: '100%'
  },
  mainTitle: {
    fontSize: 70,
    color: '#fff'
  },
  mainButton: {
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
    padding: 20,
    margin: 30,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30
  }
};

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

