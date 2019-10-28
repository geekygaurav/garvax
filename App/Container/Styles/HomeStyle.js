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
      headertext:{
        fontSize:28,
        color:'#F8E0D4',
        fontFamily:"monospace"
      },
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
      div1:{
        width:'100%',
        height:'25%',
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
      },
      divLast:{
        width:'100%',
        height:'5%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end'
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
      },
      wishDiv:{
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
      disclaimerDiv:{
        width:'90%',
        height:null,
        justifyContent:'center',
        alignItems:'center'
      },
      buttontext:{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#F8E0D4' ,
        fontFamily:"monospace"
      },
      buttontextsmall:{ 
        fontSize: 18, 
        color: '#F8E0D4' ,
        fontFamily:"monospace"
      },
      buttontextmedium:{ 
        fontSize: 24, 
        color: '#F8E0D4' ,
        fontFamily:"monospace"
      },
      buttontextlarge:{ 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#F8E0D4' ,
        fontFamily:"monospace"
      },
      disclaimerText:{ 
        fontSize: 18, 
        color: '#F8E0D4' ,
        borderBottomWidth:0.7,
        borderBottomColor:'#F8E0D4'
      }
})