import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  enabledDirection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    width: Dimensions.get('window').width / 1.2,
    alignItems: 'center',
    color: '#fff',
  },
  logoView: {
    marginBottom: 50,
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    borderRadius: 80,
  },
  brandName: {
    marginTop: 10,
    width: 188,
    height: 165,
  },
  buttonColumn: {
    flexDirection: 'column',
    marginTop: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 30,
  },
  isAccountText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  centerText: {
    alignItems: 'center',
  },
  errorText: {
    color: '#FC3E3E',
    width: '90%',
    fontSize: 15,
    justifyContent: 'flex-end',
    maxHeight: 20,
  },
});
