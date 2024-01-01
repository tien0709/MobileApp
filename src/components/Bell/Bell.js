import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BellIcon(props) {
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.btnContainer}>
      <Icon style={styles.logo} name="bell" size={20} color="#000"/>
    </TouchableHighlight>
  );
}

BellIcon.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
