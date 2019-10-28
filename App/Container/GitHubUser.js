
import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import styles from './Styles/GitHubUserStyle'
import Modal from "react-native-modal";
import ResponsiveImage from 'react-native-responsive-image'
import UserAcions from '../Redux/Reducer/GithubUserRedux'
import ApplicationStyle from '../Metrics/Styles'

const fixtureData = require('../Fixtures/User.json')


class GitHubUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }
    componentDidMount() {
        this.props.getUser()
    }
    componentWillReceiveProps(props) {
        if (props.githubuserResponse) {
            this.setState({
                userList: props.githubuserResponse
            })
        }
    }
    render() {
        const userList = this.state.userList
        return (
            <View style={ApplicationStyle.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backlogo}>
                        <Text style={{ fontSize: 28, color: '#F8E0D4' }}>{'←'}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerDiv}>
                        <Text style={{ fontSize: 24, color: '#F8E0D4' }}>Say hello to our Github Users!</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    {this.renderList(userList)}
                </View>
            </View>
        );
    }
    renderList(userList) {
        return (
            <FlatList
                data={userList}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={styles.cardDiv}>
                        <View>
                            <ResponsiveImage
                                style={styles.imageStyle}
                                source={{ uri: item.avatar_url }}
                                initWidth="150"
                                initHeight="150" />
                        </View>
                        <Text style={{ color: '#B56F4A', fontSize: 20 }}>{item.login}</Text>
                    </View>
                }
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        githubuserResponse: state.githubuser.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(UserAcions.requestUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GitHubUser)