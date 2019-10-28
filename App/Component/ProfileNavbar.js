import React, { Component } from 'react'
import { View, Text, Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Metrics/index'
import styles from '../Metrics/Styles'

class ProfileNavbar extends Component {
    render() {
        return (
            <View style={styles.navbarcontainer}>
                <View style={styles.navbarSec1}>
                    <Image source={{ uri: 'https://image.shutterstock.com/image-photo/hollywood-april-26-actor-robert-600w-51846661.jpg' }} style={{ width: 80, height: 80, borderRadius: 40 }} />
                </View>
                <View style={styles.navbarSec2}>
                    <Text style={{ fontSize: 20, color: '#F8E0D4' }}>Tony Stark</Text>
                    <Text style={{ fontSize: 16, color: '#E3B198' }}>Stark Industries</Text>
                    <Text style={{ fontSize: 16, color: '#EE8753' }}>Ironman</Text>
                </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavbar)