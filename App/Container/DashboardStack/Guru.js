import React, { useEffect, useState } from 'react';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Styles/GuruStyle'
import GuruActions from '../../Redux/Reducer/GuruRedux'
import ApplicationStyle from './Styles/ApplicationStyles'
import { Header, Left, Content, Body, Title, Right, Icon } from 'native-base'
import { Colors } from '../../Metrics/index'


const Guru = props => {
    /** redux  */

    const reducer = useSelector(state => state);

    const dispatch = useDispatch()
    const requestGuru = GuruActions.requestGuru()

    /** variable */

    let [advice, setAdvice] = useState('');
    let [spinValue] = useState(new Animated.Value(0));


    useEffect(() => {
        Animated.loop(Animated.timing(spinValue, { toValue: 1, duration: 4000, easing: Easing.linear, useNativeDriver: true, })).start()
        if (reducer.guru.payload) {
            setAdvice(reducer.guru.payload.slip.advice)
        }
    });

    function onadvice() {
        dispatch(requestGuru)
    }

    function goBack() {
        props.navigation.navigate('Explore')
    }

    /** Render Function */

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })


    return (
        <View style={ApplicationStyle.containertheme}>
            <Header androidStatusBarColor={Colors.theme} style={ApplicationStyle.header}  >
                <Left style={ApplicationStyle.left}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name='arrow-back' style={{ paddingLeft: 10, color: Colors.white }} />
                    </TouchableOpacity>
                </Left>
                <Body style={ApplicationStyle.body}>
                    <Title style={ApplicationStyle.headertext}>Ask Guru</Title>
                </Body>
                <Right style={ApplicationStyle.right} />
            </Header>
            <Content>
                <View style={{ width: '100%', height: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: Colors.cream }}>Redux - Hooks - Saga</Text>
                </View>
                <Animated.View style={styles.animatedview}>
                    <Animated.Image
                        style={{ transform: [{ rotate: spin }] }}
                        source={require('../../Assets/Garvaxlogo.png')} />
                </Animated.View>
                <View style={styles.textDiv}>
                    <Text style={{ fontSize: 18, color: '#F8E0D4' }}>You can ask an advise to our Garvax Guru</Text>
                </View>
                {advice != '' ?
                    <View style={styles.textDiv}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#F8E0D4' }}>{advice}</Text>
                    </View> :
                    null
                }
                <View style={styles.textDiv}>
                    <TouchableOpacity onPress={onadvice} style={styles.askbtn}>
                        <Text style={{ fontSize: 18 }}>Ask</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.padding_100} />
            </Content>
        </View>
    )
}

export default Guru;
