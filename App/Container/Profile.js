import React, { Component } from 'react'
import { View, Text, Dimensions, Platform, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import ApplicationStyle from '../Metrics/Styles'
import styles from './Styles/ProfileStyle'
const { width, height } = Dimensions.get('window')
import { Colors } from '../Metrics/index'

import ReactNativeParallaxHeader from 'react-native-parallax-header';
import ProfileHeader from '../Component/ProfileHeader'
import ProfileNavbar from '../Component/ProfileNavbar'
import ProfileContent from '../Component/ProfileContent'

export const IS_IPHONE_X = height === 812 || height === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

class Profile extends Component {
    render() {
        const div = [
            <ProfileHeader/>
        ]
        return (
            <View style={ApplicationStyle.container}>
                <ReactNativeParallaxHeader
                    headerMinHeight={NAV_BAR_HEIGHT}
                    headerMaxHeight={250}
                    extraScrollHeight={0}
                    backgroundColor={Colors.theme}
                    alwaysShowTitle={false}
                    alwaysShowNavBar={false}
                    title={div}
                    renderNavBar={this.renderNavBar}
                    renderContent={this.renderContent}
                    navbarColor={Colors.theme}
                />

            </View>
        )
    }

    renderNavBar(){
        return(
            <ProfileNavbar/>
        )
    }
    renderContent(){
        return(
            <ProfileContent/>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile)