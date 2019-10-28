import React, { Component } from 'react'
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import ApplicationStyle from '../Metrics/Styles'
import styles from './Styles/DisclaimerStyle'
import { Colors } from '../Metrics/index'
import interactions from '../Buisness/Interactions'


class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: '',
            drinkNotice: '',
            githubprivacy: '',
            info: '',
            thirdparty: '',
            trade: '',
            userprivacy: '',
            isLoad: true

        }
    }
    async componentDidMount() {
        console.log('cdcd')

        interactions.callDisclaimer((res) => {
            console.log('res', res)
            if (res.data) {
                var data = res.data
                this.setState({
                    about: data.about,
                    drinkNotice: data.drink,
                    githubprivacy: data.githubprivacy,
                    info: data.info,
                    thirdparty: data.thirdparty,
                    trade: data.trade,
                    userprivacy: data.userprivacy,
                    isLoad: false
                })
            }
        })

    }
    render() {
        return (
            <ScrollView style={ApplicationStyle.container}>
                <View style={styles.headerDiv}>
                    <Text style={styles.headerText}>DISCLAIMER</Text>
                </View>
                {!this.state.isLoad ?
                    <View style={styles.textDiv}>
                        <Text style={styles.text}>{'1. ' + this.state.about + '\n'}</Text>
                        <Text style={styles.textImportant}>{'2. ' + this.state.drinkNotice + '\n'}</Text>
                        <Text style={styles.text}>{'3. ' + this.state.githubprivacy + '\n'}</Text>
                        <Text style={styles.textImportant}>{'4. ' + this.state.info + '\n'}</Text>
                        <Text style={styles.text}>{'5. ' + this.state.thirdparty + '\n'}</Text>
                        <Text style={styles.text}>{'6. ' + this.state.trade + '\n'}</Text>
                        <Text style={styles.textImportant}>{'7. ' + this.state.userprivacy + '\n'}</Text>
                    </View> :
                    <ActivityIndicator size={'large'} color={Colors.cream} />
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer)