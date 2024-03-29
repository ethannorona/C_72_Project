import * as React from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen'; 

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen : WriteStoryScreen}, 
  ReadStory: {screen: ReadStoryScreen}
},
{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon: ({})=>{
       const routeName = navigation.state.routeName
       if(routeName === 'WriteStory'){
         return (
           <Image
            source = {require('./assets/write.png')}
            style = {{width: 40, height: 40}}
          />
         )
       } 
       else if(routeName === 'ReadStory'){
         return(
           <Image
            source = {require('./assets/read.png')}
            style = {{width: 40, height: 40}}
           />
         )
       }
      }
  })}
)
const AppContainer = createAppContainer(TabNavigator);