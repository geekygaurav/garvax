import React, { useState, useEffect } from 'react';
import { Platform, Image, StyleSheet, Text, TouchableOpacity, View, ShadowPropTypesIOS } from 'react-native';
import { connect } from 'react-redux'
import styles from './Styles/HomeStyle'
import * as Animatable from 'react-native-animatable';
import ApplicationStyle from '../../Metrics/Styles'
import Images from '../../Images/Images'

const Home = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.coffee} style={{ width: 400, height: 200 }} />
      </View>
      <View style={styles.body}>
        <Text style={styles.welcometext}>Welcome to Coffee RN Boilerplate</Text>
        <Text style={styles.welcometextmini}>React .  Redux . Hooks</Text>
        <View style={{ height: 30 }} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Explore')} style={styles.btnDiv}>
          <Text style={styles.btntext}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home;