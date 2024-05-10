import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';

import Main from './screens/Main';
import Homescreen from './screens/Homescreen';
import SignUp from './screens/Signup';
import Login from './screens/Login';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();
function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [isuserlogin, setisuserlogin] = useState(false);
  auth().onAuthStateChanged(user => {
    if (user !== null) {
      setisuserlogin(true);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isuserlogin ? <Stack.Screen name="Main" component={Main} /> : null}
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
