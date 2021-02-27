import React from 'react'
import InstaScreen from './InstaScreen';
import ModelScreen from './ModelScreen'
import MailScreen from './MailScreen'
import InboxScreen from './InboxScreen'
import ComposeEmail from './ComposeEmail'
import ToDO1 from './ToDO1'
import ToDO2 from './ToDO2'
import VideoCallScreen from './VideoCallScreen'
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return(
    <ToDO2 />
  )
}

export default App;
