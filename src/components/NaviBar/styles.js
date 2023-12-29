import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: '3',
        borderTopColor: '#70AEFF',
      },

      buttonContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },

      button: {
        paddingTop: 10,
      },
      logo: {
        paddingBottom: 10,
      },

      buttonQR: {
        paddingBottom: 20,
      },

      logoQR: {
        paddingBottom: 10,
      },

      text:{
        fontSize: 16,
      }
 });