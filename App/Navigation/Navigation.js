/**
* This file contains all the stack of screens/component. 
* You can modify your own custom setting for navigation.
* Please visit https://reactnavigation.org/ for more information.
*/


import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from '../Container/LaunchScreen'
import Home from '../Container/Home'
import Brew from '../Container/Brew'
import Guru from '../Container/Guru'
import GitHubUser from '../Container/GitHubUser'
import Profile from '../Container/Profile'


const Navigation = createStackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    Home: { screen: Home },
    Brew: { screen: Brew },
    Guru: { screen: Guru },
    GitHubUser: { screen: GitHubUser },
    Profile: { screen: Profile },

},
    {
        headerMode: 'none',
        initialRouteName: 'LaunchScreen',
    }

);

export default createAppContainer(Navigation)