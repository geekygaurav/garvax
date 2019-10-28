import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../Metrics/index'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.theme,
    },
    profileHeadercontainer: {
        width: '100%',
        height: 300,
        backgroundColor: Colors.theme
    },
    profileImagediv: {
        width: '100%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImageSec: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    profileInfoDiv: {
        width: '100%',
        height: '30%',
        flexDirection: 'row'
    },
    profileInfoSec1: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 10
    },
    profileInfoSec2: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
        padding: 10
    },
    navbarcontainer: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        backgroundColor: Colors.theme
    },
    navbarSec1: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navbarSec2: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,

    },
    navBarSectionHeader:{
        width:'100%',
        height:50,
        marginTop:40,
        borderBottomColor:'lightgrey',
        borderBottomWidth:0.7,
        padding:10
    },
    contentTextDiv:{
        width:'100%',
        height:null,
        padding:10
    }
})
