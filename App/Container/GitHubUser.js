
import React, {Component} from 'react';
import {Platform, FlatList, Text, TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/GitHubUserStyle'
import * as api from '../Service/Api'
import Modal from "react-native-modal";
import ResponsiveImage from 'react-native-responsive-image'


class GitHubUser extends Component {
    constructor(props){
        super(props);
        this.state={
            userList:[]
        }
    }
    componentDidMount(){
        api.githubuser.get('users')
        .then((response) => {console.log(response)
            if(response.status == 200){
                this.setState({
                    userList:response.data
                },()=>{
                    console.log('fetching userList',this.state.userList)
                })
            }
            else{
                alert('Server error')
            }
        })
    }
    render(){
        const userList = this.state.userList
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backlogo}>
                        <Text style={{fontSize:28,color:'#F8E0D4'}}>{'←'}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerDiv}>
                        <Text style={{fontSize:24,color:'#F8E0D4'}}>Say hello to our Github Users!</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={userList}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                        <View style={styles.cardDiv}>
                            <View>
                            <ResponsiveImage 
                            style={styles.imageStyle}
                            source={{uri: item.avatar_url}}                            
                            initWidth="150" 
                            initHeight="150"/>
                            </View>
                            <Text style={{color:'#B56F4A',fontSize:20}}>{item.login}</Text>
                        </View>
                    }
                    />
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(GitHubUser)