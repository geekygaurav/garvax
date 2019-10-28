import React, { Component } from 'react'
import { View ,StyleSheet,Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import PropTypes from 'prop-types';
import { width, height } from 'react-native-dimension';
import { Colors  } from '../Metrics/index'


//00c3ea

export default class InputField extends Component{

  render() {
    // console.log('Type',this.props.type)

    return (
      <View style={styles.inputWrapper}>


      <View style={{
        flexDirection:'row'
      }}>
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor={Colors.theme}
          // underlineColorAndroid="transparent"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
      </View>
    );
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  input: {
    backgroundColor:Colors.backOpacity,
    width: width(90),
    height: 40,
    marginHorizontal: 20,
    paddingLeft:20,
    borderRadius: 5,
    color: 'black',
    fontSize: 18,
    borderWidth:1,
    borderColor:Colors.theme,
  },
  inputWrapper: {
    paddingBottom: 5,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: width(22),
    height: height(7),
    left: 35,
    top: 9,
  }
});
