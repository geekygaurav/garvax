import React, {Component} from 'react';
import {Platform,Animated,interpolate,Easing, FlatList, Text, TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/GuruStyle'
import * as api from '../Service/Api'

class Guru extends Component {
    constructor(props){
        super(props);
        this.state={
            spinValue: new Animated.Value(0),
            username:this.props.data.garvax.username,
            advice:''
        }
        Animated.loop( Animated.timing(this.state.spinValue, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: true, }) ).start()
    }
    onadvice(){
        api.advise.get('advice')
        .then((response) => {console.log(response)
            if(response.status == 200){
                this.setState({
                    advice:response.data.slip.advice
                })
            }
            else{
                alert('Server error')
            }
        })
    }
    render(){
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        return(
            <View style={styles.container}>
                <Animated.View style={styles.animatedview}>
                    <Animated.Image
                    style={{transform: [{rotate: spin}] }}
                    source={require('../Assets/Garvaxlogo.png')} />
                </Animated.View>
                <View style={styles.textDiv}>
                    <Text style={{fontSize:18,color:'#F8E0D4'}}>You can ask an advise to our Garvax Guru</Text>
                </View>
                <View style={styles.textDiv}>
                <TouchableOpacity onPress={this.onadvice.bind(this)} style={styles.askbtn}>
                    <Text style={{fontSize:18}}>Ask</Text>
                </TouchableOpacity>                
                </View>
                {this.state.advice != '' ?
                <View style={styles.textDiv}>
                <Text style={{fontSize:18,color:'#F8E0D4'}}>{this.state.username}!</Text>
                <Text style={{alignContent:'center',fontSize:14,color:'#F8E0D4'}}>{this.state.advice}</Text>
                </View>:
                null
                }
               <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.textDiv}>
                <Text style={{fontSize:18,color:'#F8E0D4'}}>Go back</Text>
                </TouchableOpacity>

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Guru)