import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { colors } from '../assets/colors';

const NavButton = ({name, path, changePage, page, small}) => {
  handlePress = () => {
    changePage(page);
  };

  const navBarIcons = small ? 'smIcon' : null;
  const wrapper = small ? 'smWrapper' : 'iconWrapper';
  const navButton = small ? 'smButton' : 'navIcon';

  const text = !small ? <Text style={styles.navText}>{name}</Text> : null;

  return (
    <TouchableHighlight 
      style={styles[navButton]} 
      onPress={handlePress} 
      activeOpacity={0.3} 
      underlayColor={'#735290'}>
    
      <View style={styles[wrapper]}> 
        <Image style={styles[navBarIcons]} source={path}/>
        {text}
      </View>
    </TouchableHighlight>
  );
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

const mapDispatchToProps = dispatch => ({
  changePage: (page) => {
    dispatch(changePage(page));
  }
});

export default connect(null, mapDispatchToProps)(NavButton);

