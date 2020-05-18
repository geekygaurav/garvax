/**
* This file contains all the stack of screens/component. 
* You can modify your own custom setting for navigation.
* Please visit https://reactnavigation.org/ for more information.
*/


// import { createStackNavigator, createAppContainer } from "react-navigation";
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, BottomTabBar, createStackNavigator }
    from 'react-navigation';
import React, { Component } from 'react'
import { View, Platform } from 'react-native'
/** TabBar Component */
import { TabBarDashboard, TabBarInfo } from './TabBar'
// import Info from './TabBar'


/** DashboardStack */
import Brew from '../Container/DashboardStack/Brew'
import Guru from '../Container/DashboardStack/Guru'
import Home from '../Container/DashboardStack/Home'
import Explore from '../Container/DashboardStack/Explore'


/** InfoStack */
import Profile from '../Container/InfoStack/Profile'
import GitHubUser from '../Container/InfoStack/GitHubUser'


const DashboardStack = createSwitchNavigator({
    Home: { screen: Home },
    Brew: { screen: Brew },
    Guru: { screen: Guru },
    Explore: { screen: Explore },
},
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
);
DashboardStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName == "Home") { tabBarVisible = true }
            else if (route.routeName == "Explore") { tabBarVisible = true }
            else if (route.routeName == "Guru") { tabBarVisible = false }
        })
    }
    return { tabBarVisible }
}

const InfoStack = createSwitchNavigator({
    GitHubUser: { screen: GitHubUser },
    Profile: { screen: Profile },
},
    {
        headerMode: 'none',
        initialRouteName: 'Profile',
    }
);
const TabBarStacks = {
    Dashboard: { screen: DashboardStack },
    Info: { screen: InfoStack },
}


const AppTabNavigator = createBottomTabNavigator(
    TabBarStacks,
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Dashboard') {
                    return <TabBarDashboard focused={focused} />
                }
                else if (routeName === 'Info') {
                    return <TabBarInfo focused={focused} />
                }
            },
            tabBarComponent: props => {
                return (
                    <View style={{ width: '100%', position: 'absolute', left: 0, bottom: 0, right: 0, zIndex: 1000 }}>
                        <BottomTabBar  {...props} />
                    </View>
                )
            },
            tabBarLabel: ({ focused }) => { return null }
        }),
        tabBarOptions: {
            style: {
                backgroundColor: Platform.OS === "ios" ? "rgba(0,0,0,0)" : "rgba(235,235,237,3)"
            },
            activeTintColor: "#219608",
            inactiveTintColor: "rgba(0,0,0,0.4)",
            initialRouteName: "Dashboard"
        },
    }
);


export default createAppContainer(AppTabNavigator)