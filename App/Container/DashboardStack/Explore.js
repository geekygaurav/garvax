import React, { useState, useEffect } from 'react';
import {  Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles/ApplicationStyles'
import { Colors } from '../../Metrics/index'
import { Header, Left, Content, Body, Title, Right, Icon, Accordion } from 'native-base'


const Explore = props => {
    function goBack() {
        props.navigation.navigate('Home');
    }
    function goGuru() {
        props.navigation.navigate('Guru');
    }
    function openLink() {
        let link = "https://nativebase.io/"
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log("Error");
            }
        })
    }
    function openHookLink() {
        let link = "https://reactjs.org/docs/hooks-intro.html"
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log("Error");
            }
        })
    }
    function openVersionLink() {
        let link = "https://reactnative.dev/docs/0.60/getting-started"
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log("Error");
            }
        })
    }
    return (
        <View style={styles.container}>
            <Header androidStatusBarColor={Colors.coffee} style={styles.header}  >
                <Left style={styles.left}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name='arrow-back' style={{ paddingLeft: 10, color: Colors.white }} />
                    </TouchableOpacity>
                </Left>
                <Body style={styles.body}>
                    <Title style={styles.headertext}>Explore</Title>
                </Body>
                <Right style={styles.right} />
            </Header>
            <Content style={styles.content_container}>
                <Text style={styles.title}>Features</Text>
                <Text />
                <Accordion dataArray={dataArray} />
                <Text />
                <Text style={styles.title}>Resources</Text>
                <Text />
                <TouchableOpacity onPress={openLink}>
                    <Text style={styles.linkbutton}>1. Native-Base</Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity onPress={openHookLink}>
                    <Text style={styles.linkbutton}>2. React Native Hooks</Text>
                </TouchableOpacity>
                <Text />
                <TouchableOpacity onPress={openVersionLink}>
                    <Text style={styles.linkbutton}>3. React Native 0.60 Documentation</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goGuru} style={styles.buttonDiv}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>Cool ! Let see some demo</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ width: '100%', height: 100 }} />
            </Content>
        </View>
    )
}

const pointText = { fontSize: 16, color: 'black' }
const dataArray = [
    {
        title: "RN version 0.60 & Hooks component",
        content: "This boilerplate demonstrate the Hooks concept of React. And we should adopt this concept to make the components much crispier."
    },
    {
        title: "Redux Support",
        content: "Redux is unarguably needed for data and action managment in RN applications. We have configured\n\n 1. Redux Store \n 2. Redux Persist \n 3. Redux Saga middleware \n\n Everything is set to go!!!   🏌"
    },
    {
        title: "Tab Navigation Support",
        content: "Configuring tab navigation route is kinda hectic and consume time for developers.\n\nWe have built the tab navigation component for you.\nThe only thing you need to do is,\n\nCreate your own screen & to follow some steps...😉\n"
    },
    {
        title: "Native-Base Support",
        content: "Well native-base is one of the  popular UI component library for RN. \n\nTo know more about Native-base, please click the link in the Resource section.👇"
    },

];

export default Explore;