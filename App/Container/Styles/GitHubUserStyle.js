import { StyleSheet, Dimensions } from 'react-native'
import { width, height } from 'react-native-dimension'


let Window = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#231F1F'
    },
    header:{
        width:'100%',
        height:80,
        borderBottomWidth:1,
        borderBottomColor:'#F8E0D4',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
      },
      headertext:{fontSize:28,color:'#F8E0D4'},
      backlogo:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    headerDiv:{
        width:'80%',
        height:'100%',
        justifyContent:'center',
    },
    body:{
        width:'100%',
        height:'85%',
        flexDirection:'column',
      },
    cardDiv:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        borderBottomColor:'#F8E0D4',
        borderBottomWidth:0.5
    },
    imageStyle:{
        width:150,
        height:150,
        borderRadius:150,
    }

})