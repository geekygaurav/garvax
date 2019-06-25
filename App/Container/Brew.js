import React, {Component} from 'react';
import {Platform, FlatList, Text, TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux'
import styles from './Styles/BrewStyle'
import * as api from '../Service/Api'
import Modal from "react-native-modal";
import ResponsiveImage from 'react-native-responsive-image'


class Brew extends Component {
    constructor(props){
        super(props);
        this.state={
            brewList:[],
            isModalVisible:false,
            image:'',
            description:''
        }
    }
    componentDidMount(){
        api.brew.get('beers')
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
    onPressModal(item){
        console.log('item',item)
        this.setState({
            isModalVisible:true,
            image:item.image_url,
            description:item.description
        })
    }
    render(){
        const yummyBeer = this.state.brewList
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backlogo}>
                      <Text style={{fontSize:28,color:'#F8E0D4'}}>{'←'}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerDiv}>
                        <Text style={{fontSize:16,color:'#F8E0D4'}}>Checkout different types of beer below!</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={yummyBeer}
                        keyExtractor={item => item.id}
                        renderItem={({item}) =>
                        <View style={styles.cardDiv}>
                            <TouchableOpacity onPress={this.onPressModal.bind(this,item)} style={styles.card}>
                                <Text style={{fontSize:20,fontWeight:'bold',color:'#B98D76'}}>{item.name}</Text>
                                <Text style={{fontSize:16,color:'#C27C57'}}>{item.tagline}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>First brewed on : {item.first_brewed}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>Best food pairing : {item.food_pairing[0]}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>Yeast : {item.ingredients.yeast}</Text>
                                <Text style={{fontSize:15,color:'#F8E0D4'}}>ph : {item.ph}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    />
                    
                </View>
                <Modal
                isVisible={this.state.isModalVisible}
                onBackdropPress={()=>(this.setState({isModalVisible:false}))}
                >
                    <View style={styles.modal}>
                        <View style={styles.modaldiv}>
                            <ResponsiveImage 
                            source={{uri: this.state.image}}                            
                            initWidth="100" 
                            initHeight="400"/>
                            <View style={{width:'70%',paddingRight:10}}>
                            <Text numberOfLines={10}>{this.state.description}</Text>
                            </View>
                        </View>
                    </View>

                </Modal>
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