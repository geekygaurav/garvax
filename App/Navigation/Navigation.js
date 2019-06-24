import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from '../Container/LaunchScreen'
import Home from '../Container/Home'


const Navigation = createStackNavigator({
    LaunchScreen: {screen: LaunchScreen},
    Home:{ screen:Home }
  },
  {
      headerMode:'none',
      initialRouteName:'LaunchScreen'
  }

  );
 
  export default createAppContainer(Navigation)