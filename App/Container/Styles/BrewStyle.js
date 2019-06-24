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
        height:150,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    },
    card:{
        width:'95%',
        height:140,
        borderColor:'#F8E0D4',
        borderWidth:0.5,
        borderRadius:8,
        borderLeftWidth:10,
        padding:10
    }
})