import React, { Component } from 'react'
import { View, Text, Dimensions, TextInput,ImageBackground, Image, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Metrics/index'
import ApplicationStyle from '../Metrics/Styles'

const image = 'https://image.shutterstock.com/image-photo/las-vegas-nv-usa-sep-600w-719147524.jpg'

class ProfileHeader extends Component {
    render() {
        return (
            <View style={ApplicationStyle.profileHeadercontainer}>
                <ImageBackground blurRadius={10} source={{uri:image}} style={{width:'100%',height:300}}>
                <View style={ApplicationStyle.profileImagediv}>
                    <View style={ApplicationStyle.profileImageSec}>
                        <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 75 }} />
                    </View>

                </View>
                <View style={ApplicationStyle.profileInfoDiv}>
                    <View style={ApplicationStyle.profileInfoSec1}>
                        <Text style={{ fontSize: 20, color: '#F8E0D4', fontWeight: 'bold' }}>Tony Stark</Text>
                        <Text style={{ fontSize: 18, color: '#E3B198' }}>Stark Industries</Text>
                    </View>
                    <View style={ApplicationStyle.profileInfoSec2}>
                        <Text style={{ fontSize: 20, color: '#F8E0D4', fontWeight: 'bold' }}>Iron Man</Text>
                        <Text style={{ fontSize: 18, color: '#E3B198' }}>Stanlee (MCU)</Text>
                    </View>
                </View>
                </ImageBackground>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)