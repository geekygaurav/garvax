import React, {Component} from 'react';
import {Platform,Button, StyleSheet,TouchableOpacity,Text, View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/LaunchScreenStyles'
import ResponsiveImage from 'react-native-responsive-image'
import Images from '../Images/Images'
import InputField from '../Component/InputField'


class LaunchScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:undefined,
      password:undefined
    }
  }
  onLog(){
    if(this.state.username){
      console.log(this.state.username)
      var encryption = btoa(this.state.username)
      this.props.storeUserid(encryption)
      this.props.storeUsername(this.state.username)
      setTimeout(()=>{
        this.props.navigation.navigate('Home')
      },500)
    }
    else{
      alert('Please enter username')
    }

  }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.div1}>
            <ResponsiveImage source={Images.garvax} initWidth="500" initHeight="500"/> 
          </View>
          <View style={styles.div2}>
            <View style={styles.heading}>
              <Text style={styles.headingtext}>Welcome to Garvax</Text>
            </View>
            <View style={styles.input}>
              <View style={styles.input1}>
              <InputField
              placeholder='Username'
              secureTextEntry={false}
              value={this.state.username}
              onChangeText={(text)=>this.setState({username:text})}
              />
              </View>
              <View style={styles.input2}>
              <InputField
              placeholder='Password'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text)=>this.setState({password:text})}
              />
              </View>
              <View style={styles.input2}>
                <TouchableOpacity onPress={()=>this.onLog()} style={styles.button}>
                  <Text style={{fontSize:20,color:'#231F1F'}}>Login</Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      data: state
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      storeUsername: (username) => dispatch({type: 'STORE_USERNAME', username}),
      storeUserid: (userid) => dispatch({type: 'STORE_USERID', userid}),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
  
  