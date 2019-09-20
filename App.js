import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const SwitchNavigator = createSwitchNavigator({
      loginFlow:createStackNavigator({
        Signin:{screen: SigninScreen},
        Signup:{screen: SignupScreen}
        
      }),
      mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
          TrackList:{screen:TrackListScreen},
          TrackDetails:{screen:TrackDetailsScreen}
        }),
        TrackCreate: {screen: TrackCreateScreen},
        Account: {screen: AccountScreen}
      })

});
export default createAppContainer(SwitchNavigator);

