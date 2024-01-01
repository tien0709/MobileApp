// Ví dụ về cách sử dụng trong React Native
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles'
import PropTypes from "prop-types";

const NavigationBar = ({ onPressButton }) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={() => onPressButton('Home')}>
       <View style={styles.buttonContent}>
            <Icon style={styles.logo} name="home" size={20} color="#455A64" />
            <Text style={styles.text}>Home</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressButton('Discovery')}>
       <View style={styles.buttonContent}>
            <Icon style={styles.logo} name="map-marker" size={20} color="#455A64" />
            <Text style={styles.text}>Khám phá</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQR} onPress={() => onPressButton('QR')}>
       <View style={styles.buttonContent}>
            <Icon style={styles.logoQR} name="qrcode" size={40} color="#6499E9" />
            <Text style={styles.text}>Quét mã QR</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressButton('Forums')}>
        <View style={styles.buttonContent}>
            <Icon style={styles.logo} name="comment-alt" size={20} color="#455A64" />
            <Text style={styles.text}>Forum</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onPressButton('Contibute')}>
        <View style={styles.buttonContent}>
            <Icon style={styles.logo} name="pencil-alt" size={20} color="#455A64" />
            <Text style={styles.text}>Đóng góp</Text>
        </View>
      </TouchableOpacity>

      {/* Thêm các nút khác nếu cần */}
    </View>
  );
};

NavigationBar.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string,
  };
  

export default NavigationBar;
