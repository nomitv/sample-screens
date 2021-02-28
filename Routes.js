import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './InboxScreen.js'
import About from './MailScreen.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {About} title = "Home" initial = {true} />
         <Scene key = "about" component = {Home} title = "About" />
      </Scene>
   </Router>
)
export default Routes