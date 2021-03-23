import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './app/screens/Home';
import Posts from './app/screens/Posts';
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { View, TouchableOpacity, Image } from 'react-native'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

function HomeStackScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
        name="Home" 
        component={Home} />
    </Stack.Navigator>
  );
}

function PostStackScreen({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
        name="Posts" 
        component={Posts} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Dashboard" component={HomeStackScreen} />
          <Drawer.Screen name="Posts Api" component={PostStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
