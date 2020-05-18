import { StyleSheet, Dimensions } from 'react-native'
import { width, height } from 'react-native-dimension'
import { Colors } from '../../../Metrics/index'


let Window = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
    },
    containertheme:{
        flex:1,
        backgroundColor: Colors.theme
    },
    content_container:{
        flex:1,
        padding:10
    },
    header:{
        backgroundColor:Colors.coffee
      },
      headertext:{fontSize:24,color:Colors.white},
      backlogo:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    left:{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' },
    right:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
    body:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
    title:{ fontSize: 20, color: Colors.coffee,fontWeight:'bold' },
    linkbutton:{ fontSize: 18, color: '#0676B6' },
    buttonDiv:{ width: '100%', marginTop: 50, justifyContent: 'center', alignItems: "center" },
    button:{ width: '80%', borderRadius: 30, padding: 10, backgroundColor: Colors.system_green, justifyContent: 'center', alignItems: "center" },
    buttontext:{ fontWeight: "bold", color: Colors.white, fontSize: 20 },
    padding_100:{width:'100%',height:100}

})