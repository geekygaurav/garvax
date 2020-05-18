import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../Metrics/index'
//Redux
import { connect } from "react-redux";

class Dashboard extends Component {
    render(){
        return(
            <View style={{width:'100%',height:null,justifyContent:'center',alignItems:'center'}}>
                <Icon name='bars' size={25} color={this.props.focused ? Colors.theme : Colors.lightgrey} />
            </View>
        )
    }
}
class Info extends Component {
    render(){
        return(
            <View style={{width:'100%',height:null,justifyContent:'center',alignItems:'center'}}>
                <Icon name='user' size={25}  color={this.props.focused ? Colors.theme : Colors.lightgrey}  />
            </View>
        )
    }
}

const mapStateToProps = state => { 
    return { 

    }
};

export const TabBarDashboard = connect(mapStateToProps)(Dashboard);
export const TabBarInfo = connect(mapStateToProps)(Info);
