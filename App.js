import React from 'react'
import InstaScreen from './InstaScreen';
import ModelScreen from './ModelScreen'
import MailScreen from './MailScreen'
import InboxScreen from './InboxScreen'
import ComposeEmail from './ComposeEmail'
import ToDO1 from './ToDO1'
import ToDO2 from './ToDO2'
import ToDO3 from './ToDO3'
import VideoCallScreen from './VideoCallScreen'
import { LogBox } from 'react-native';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  const Drawer = createDrawerNavigator();
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Inbox" component={InboxScreen} />
        <Drawer.Screen name="Mail" component={MailScreen} />
        <Drawer.Screen name="Insta Screen" component={InstaScreen} />
        <Drawer.Screen name="Model Screen" component={ModelScreen} />
        <Drawer.Screen name="Compose Email" component={ComposeEmail} />
        <Drawer.Screen name="ToDO1" component={ToDO1} />
        <Drawer.Screen name="ToDO2" component={ToDO2} />
        <Drawer.Screen name="ToDO3" component={ToDO3} />
        <Drawer.Screen name="Video Call" component={VideoCallScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
