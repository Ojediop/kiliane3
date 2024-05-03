const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ONBOARD from "./screens/ONBOARD";
import HomePage from "./screens/HomePage";
import HomePageInvite from "./screens/HomePageInvite";
import ChatAltLight from "./components/ChatAltLight";
import HomeLight from "./components/HomeLight";
import ButtonNavBar from "./screens/ButtonNavBar";
import FrameComponent from "./components/FrameComponent";
import AllServices from "./screens/AllServices";
import Service from "./screens/Service";
import Top1 from "./screens/Top1";
import HomeLightIcon from "./components/HomeLightIcon";
import ChatAltLightIcon from "./components/ChatAltLightIcon";
import UserLightIcon from "./components/UserLightIcon";
import SPLASHSCREEN from "./screens/SPLASHSCREEN";
import ONBOARD1 from "./screens/ONBOARD1";
import ONBOARD2 from "./screens/ONBOARD2";
import WELCOME from "./screens/WELCOME";
import LOGIN from "./screens/LOGIN";
import REGISTER from "./screens/REGISTER";
import REGISTERSUCCESS from "./screens/REGISTERSUCCESS";
import ForgetPassword from "./screens/ForgetPassword";
import OTPVerification from "./screens/OTPVerification";
import SetNewPassword from "./screens/SetNewPassword";
import Done from "./screens/Done";
import ReviewEmptyState from "./screens/ReviewEmptyState";
import Review from "./screens/Review";
import AddReview from "./screens/AddReview";
import AllReviews from "./screens/AllReviews";
import Profile from "./screens/Profile";
import HomePageInvite1 from "./screens/HomePageInvite1";
import HomePage1 from "./screens/HomePage1";
import UserLight from "./components/UserLight";
import Frame from "./components/Frame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Frame />,
    <ChatAltLightIcon />,
    <UserLightIcon />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <HomeLightIcon />,
    <ChatAltLightIcon />,
    <UserLightIcon />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 349,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: 81,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="HomePage1"
        component={HomePage1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AllReviews"
        component={AllReviews}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Medium": require("./assets/fonts/Mulish-Medium.ttf"),
    "Mulish-SemiBold": require("./assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Raleway-Black": require("./assets/fonts/Raleway-Black.ttf"),
    "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
    "RobotoMono-Medium": require("./assets/fonts/RobotoMono-Medium.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="ONBOARD"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="ONBOARD"
              component={ONBOARD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageInvite"
              component={HomePageInvite}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ButtonNavBar"
              component={ButtonNavBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllServices"
              component={AllServices}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Service"
              component={Service}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Top1"
              component={Top1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SPLASHSCREEN"
              component={SPLASHSCREEN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONBOARD1"
              component={ONBOARD1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ONBOARD2"
              component={ONBOARD2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WELCOME"
              component={WELCOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LOGIN"
              component={LOGIN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="REGISTER"
              component={REGISTER}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="REGISTERSUCCESS"
              component={REGISTERSUCCESS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgetPassword"
              component={ForgetPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerification"
              component={OTPVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SetNewPassword"
              component={SetNewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Done"
              component={Done}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ReviewEmptyState"
              component={ReviewEmptyState}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Review"
              component={Review}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddReview"
              component={AddReview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePageInvite1"
              component={HomePageInvite1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SPLASHSCREEN />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
