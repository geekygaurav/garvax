import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/HomeStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

class Home extends Component {
  onPress(item){
    if(item == 'beer'){
      this.props.navigation.navigate('Brew')
    }
    else if(item == 'guru'){
      this.props.navigation.navigate('Guru')
    }
    else if(item == 'peeps'){
      this.props.navigation.navigate('GitHubUser')
    }
  }
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Garvax Boilerplate</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.div}>
            <TouchableOpacity onPress={this.onPress.bind(this,'beer')} style={styles.BTNL}>
              <Text style={{fontSize:28,color:'#F8E0D4'}}>🍺</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#F8E0D4'}}>Beers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress.bind(this,'guru')}  style={styles.BTN}>
            <Text style={{fontSize:28,color:'#F8E0D4'}}>🧘🏻</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#F8E0D4'}}>Guru</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.div}>
            <TouchableOpacity onPress={this.onPress.bind(this,'peeps')} style={styles.BTNL}>
            <Text style={{fontSize:28,color:'#F8E0D4'}}>🧔🏻</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#F8E0D4'}}>Peeps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BTN}>

            </TouchableOpacity> 
            </View>            
            <View style={styles.div}>
            <TouchableOpacity style={styles.BTNL}>

            </TouchableOpacity>
            <TouchableOpacity style={styles.BTN}>

            </TouchableOpacity> 
            </View>
          </View>
          <View style={{
            width:'100%',
            height:60,
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            bottom:0
          }}>
            <Text style={{fontSize:16,color:'#F8E0D4'}}>Made with ❤️ by Gourav</Text>

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
    }
  }
  
  export default connect(null, null)(Home)