import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { colors } from '../assets/colors';

class NavButton extends Component { 
  constructor() {
    super();

    this.state = {
      active: false
    };
  }
    
  handlePress = () => {
    console.log(this.props.pageRoute)
    this.props.changePage(this.props.pageRoute);
  };

  render() {
    const navBarIcons = this.props.small ? 'smIcon' : null;
    const wrapper = this.props.small ? 'smWrapper' : 'iconWrapper';
    const navButton = this.props.small ? 'smButton' : 'navIcon';
    const text = !this.props.small 
      ? <Text style={styles.navText}>{this.props.name}</Text> 
      : null;

    return (
      <TouchableHighlight 
        style={styles[navButton]} 
        onPress={this.handlePress} 
        activeOpacity={0.3} 
        underlayColor={colors.$purple}>
      
        <View style={styles[wrapper]}> 
          <Image 
            style={styles[navBarIcons]} 
            source={this.props.path}
          />
          {text}
        </View>
      </TouchableHighlight>
    );
  }
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130, 
    width: 130,
  },
  navIcon: {
    borderRadius: 20,
    backgroundColor: colors.$transparentDarkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  navText: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.$white,
    fontWeight: 'bold',
    marginBottom: 4
  },
  smWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, 
    width: 60,
  },
  smButton: {
    borderRadius: 20,
    backgroundColor: colors.$transparentDarkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  smIcon: {
    height: 40, 
    width: 40,
  }
});

// const mapStateToProps = state => ({
//   page: state.page
// });

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(NavButton);

