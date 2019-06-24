import React, {Component} from 'react';
import {Platform, FlatList, Text, TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/BrewStyle'
import * as api from '../Service/Api'

class Brew extends Component {
    constructor(props){
        super(props);
        this.state={
            brewList:[]
        }
    }
    componentDidMount(){
        api.brew.get('breweries')
        .then((response) => {console.log(response)
            if(response.status == 200){
                this.setState({
                    brewList:response.data
                },()=>{
                    console.log('fetching brew list',this.state.brewList)
                })
            }
            else{
                alert('Server error')
            }
        })
    }
    render(){
        const yummyBeerShop = this.state.brewList
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backlogo}>
                      <Text style={{fontSize:28,color:'#F8E0D4'}}>{'←'}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerDiv}>
                        <Text style={{fontSize:16,color:'#F8E0D4'}}>Checkout the breweries around United State</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={yummyBeerShop}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                        <View style={styles.cardDiv}>
                            <TouchableOpacity style={styles.card}>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#B98D76'}}>{item.name}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>City : {item.city}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>Street : {item.street}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>State : {item.state}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>Phone : {item.phone}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>Website : {item.website_url}</Text>
                            </TouchableOpacity>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Brew)