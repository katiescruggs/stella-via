import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../actions';
import { colors } from '../assets/colors';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableHighlight 
} from 'react-native';

export const NavButton = ({name, path, changePage, pageRoute, small, active}) => {   
  const handlePress = () => {
    changePage(pageRoute);
  };

  const navBarIcons = small ? styles.smIcon : null;
  const wrapper = small ? styles.smWrapper : styles.iconWrapper;
  const navButton = small ? styles.smButton : styles.welcomeButton;
  
  const isActive = active ? styles.active : navButton;
  
  const text = !small 
    ? <Text style={styles.navText}>{name}</Text> 
    : <Text style={styles.smNavText}>{name}</Text>;

  return (
    <TouchableHighlight 
      style={isActive} 
      onPress={handlePress} 
      activeOpacity={0.3} 
      underlayColor={colors.$purple}>

      <View style={wrapper}> 
        <Image 
          style={navBarIcons} 
          source={path}
        />
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
  welcomeButton: {
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
  smNavText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.$white,
    fontWeight: 'bold',
    marginTop: 1,
    marginBottom: 1
  },
  smWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70, 
    width: 70,
  },
  smButton: {
    borderRadius: 20,
    backgroundColor: colors.$transparentDarkPurple,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  smIcon: {
    height: 35, 
    width: 35,
  },
  active: {
    borderRadius: 20,
    backgroundColor: colors.$black,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    shadowColor: colors.$btnShadow,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});

export const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  }
});

export default connect(null, mapDispatchToProps)(NavButton);

NavButton.propTypes = {
  changePage: PropTypes.func,
};