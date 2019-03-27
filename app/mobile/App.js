import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

import { colors } from "@/AppStyles";
import HomeScreen from "./screens/HomeScreen";

// TODO Replace createStackNavigator
const AppNavigator = createStackNavigator(
  {
    TabScreens: createBottomTabNavigator({
      Home: HomeScreen
      // Auth: AuthScreen,
      // Onboarding: OnboardingScreen
    })
  },
  {
    initialRouteName: "TabScreens",
    cardStyle: {
      backgroundColor: colors.backgroundBase
    },
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => <AppContainer />;

export default App;
