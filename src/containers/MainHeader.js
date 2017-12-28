import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { changePage } from '../actions';
import LocationModal from './LocationModal.js';

class MainHeader extends Component {
  enterSite = () => {
    this.props.changePage('LocationModal');
  }

  render() {
    const modal = this.props.page === 'LocationModal' ? <LocationModal /> : null;
    const constellations = this.props.page === 'Constellations' ? <Text>stars</Text> : null;

    const enter = !this.props.page ?
      <View>
        <Text style={styles.mainTitle}>Stella Via</Text>
        <TouchableHighlight style={styles.mainButton} onPress={this.enterSite} activeOpacity={0.7} underlayColor={'white'}>
          <Text style={styles.buttonText}>View Your Sky</Text>
        </TouchableHighlight>
      </View>
    : null;

    return (
      <View>
        {enter}
        {constellations}
        {modal}
      </View>
    );
  }
};

const styles = {
  mainTitle: {
    fontSize: 80,
    alignSelf: 'center',
    padding: 30
  },
  mainButton: {
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    padding: 20,
    margin: 30,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
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

