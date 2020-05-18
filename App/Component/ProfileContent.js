import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
import { Colors } from '../Metrics/index'
import styles from '../Metrics/Styles'

const info = require('../Fixtures/StarkInfo.json')

class Content extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.navBarSectionHeader}>
                    <Text style={{ fontSize: 20, color: Colors.theme }}>About</Text>
                </View>
                <View style={styles.contentTextDiv}>
                    <Text style={{ color: 'black' }}>{info.info}</Text>
                </View>
                <View style={styles.navBarSectionHeader}>
                    <Text style={{ fontSize: 20, color: Colors.theme }}>Formation of avengers</Text>
                </View>
                <View style={styles.contentTextDiv}>
                    <Text style={{ color: 'black' }}>{info.avengers}</Text>
                </View>
                <View style={styles.navBarSectionHeader}>
                    <Text style={{ fontSize: 20, color: Colors.theme }}>Infinity war</Text>
                </View>
                <View style={styles.contentTextDiv}>
                    <Text style={{ color: 'black' }}>{info.war}</Text>
                </View>
                <View style={styles.contentTextDivCenter}>
                    <Text style={{ color: 'black' }}>{"Made by gouravc"}</Text>
                    <Text style={{ color: 'black' }}>{"I ❤️ you 3000"}</Text>
                </View>

                <View style={{width:'100%',height:100}}/>
            </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Content)