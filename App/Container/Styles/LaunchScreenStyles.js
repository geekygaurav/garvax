import { StyleSheet, Dimensions } from 'react-native'
import { width, height } from 'react-native-dimension'


let Window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231F1F'
  },
  div1: {
    width: '100%',
    height: height(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  div2: {
    width: '100%',
    height: height(50),
    // backgroundColor:'yellow'
  },
  heading: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    height: '100%',
  },
  headingtext: {
    fontSize: 22,
    color: '#F8E0D4',
    fontWeight: 'bold',
    fontFamily: "monospace"
  },
  input1: {
    width: '100%',
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  input2: {
    width: '100%',
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#F8E0D4',
    justifyContent: 'center',
    alignItems: 'center'
  }

})