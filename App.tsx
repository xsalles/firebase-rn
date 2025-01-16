import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator()

const InsideStack = createNativeStackNavigator()

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My todos" component={List}/>
      <InsideStack.Screen name="Details" component={Details}/>
    </InsideStack.Navigator>
  )
}

export default function App() {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user || null)
    })
    
  }, [user]) 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (
            <Stack.Screen name="Inside" component={InsideLayout} options={{headerShown:false}} />
          ) : (
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


