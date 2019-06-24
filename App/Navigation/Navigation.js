import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from '../Container/LaunchScreen'
import Home from '../Container/Home'
import Brew from '../Container/Brew'
import Guru from '../Container/Guru'


const Navigation = createStackNavigator({
    LaunchScreen: {screen: LaunchScreen},
    Home:{ screen:Home },
    Brew:{screen:Brew},
    Guru:{screen:Guru}
  },
  {
      headerMode:'none',
      initialRouteName:'LaunchScreen'
  }

  );
 
  export default createAppContainer(Navigation)