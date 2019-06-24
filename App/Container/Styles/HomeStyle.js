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
        alignItems:'center'
      },
      headertext:{fontSize:28,color:'#F8E0D4'},
      body:{
        width:'100%',
        height:'90%',
        flexDirection:'column'
      },
      div:{
        width:'100%',
        height:'30%',
        flexDirection:'row'
      },
      BTN:{
        width:'50%',
        height:'100%',
        borderBottomColor:'#F8E0D4',
        borderBottomWidth:0.5,
        justifyContent:'center',
        alignItems:'center'
      },
      BTNL:{
        width:'50%',
        height:'100%',
        borderBottomColor:'#F8E0D4',
        borderBottomWidth:0.5,
        borderRightColor:'#F8E0D4',
        borderRightWidth:0.5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      }
})