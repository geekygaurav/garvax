import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from '../Container/LaunchScreen'
import Home from '../Container/Home'
import Brew from '../Container/Brew'
import Guru from '../Container/Guru'
import GitHubUser from '../Container/GitHubUser'
import Profile from '../Container/Profile'
import Disclaimer from '../Container/Disclaimer'


const Navigation = createStackNavigator({
    LaunchScreen: { screen: LaunchScreen },
    Home: { screen: Home },
    Brew: { screen: Brew },
    Guru: { screen: Guru },
    GitHubUser: { screen: GitHubUser },
    Profile: { screen: Profile },
    Disclaimer : { screen: Disclaimer}

},
    {
        headerMode: 'none',
        initialRouteName: 'LaunchScreen',
    }

);

export default createAppContainer(Navigation)