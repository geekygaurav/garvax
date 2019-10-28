import React, { Component } from 'react';
import { Platform, Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import styles from './Styles/GuruStyle'
import GuruActions from '../Redux/Reducer/GuruRedux'
import ApplicationStyle from '../Metrics/Styles'

class Guru extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinValue: new Animated.Value(0),
            advice: ''
        }
        Animated.loop(Animated.timing(this.state.spinValue, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: true, })).start()
    }
    onadvice() {
        this.props.getAdvise()
    }
    componentWillReceiveProps(props) {
        console.log('props recived', props)
        if (props.guruResponse) {
            this.setState({
                advice: props.guruResponse.slip.advice
            })
        }
    }
    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={ApplicationStyle.container}>
                <Animated.View style={styles.animatedview}>
                    <Animated.Image
                        style={{ transform: [{ rotate: spin }] }}
                        source={require('../Assets/Garvaxlogo.png')} />
                </Animated.View>
                <View style={styles.textDiv}>
                    <Text style={{ fontSize: 18, color: '#F8E0D4' }}>You can ask an advise to our Garvax Guru</Text>
                </View>
                <View style={styles.textDiv}>
                    <TouchableOpacity onPress={this.onadvice.bind(this)} style={styles.askbtn}>
                        <Text style={{ fontSize: 18 }}>Ask</Text>
                    </TouchableOpacity>
                </View>
                {this.state.advice != '' ?
                    <View style={styles.textDiv}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#F8E0D4' }}>{this.state.advice}</Text>
                    </View> :
                    null
                }
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.textDiv}>
                    <Text style={{ fontSize: 18, color: '#F8E0D4' }}>Go back</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        guruResponse: state.guru.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdvise: () => dispatch(GuruActions.requestGuru())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guru)