import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import Entry from './assets/screen/entry';
import Search from './assets/screen/search';
import Detail from './assets/screen/detail';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LangContext from './assets/utilities/context'

const Stack = createStackNavigator();

const App = () => {

  //todo: block left scroll to Entry screen
  const [lang, setLang] = useState("E");
  const value = { lang, setLang };

  return (
    <LangContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ 
            headerShown: false,
            gestureEnabled: false,
        }}>
          {/* <Stack.Screen name="Entry" component={Entry} /> */}
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </LangContext.Provider>
  );
}

export default App;