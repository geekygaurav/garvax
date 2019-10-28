import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Metrics/index'


export default StyleSheet.create({
    headerDiv:{
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:Colors.cream,
        borderBottomWidth:0.7
    },
    headerText:{
        fontFamily:"monospace",
        fontSize:30,
        color:Colors.cream
    },
    text:{
        fontSize:18,
        color:Colors.cream,
    },
    textImportant:{
        fontSize:18,
        color:Colors.cream,
        fontWeight:'bold',
        fontFamily:'monospace'
    },
    textDiv:{
        width:'100%',
        height:null,
        padding:10
    }
})