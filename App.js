import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Импортируем все экраны приложения
import IntroPage from './pages/IntroPage';
import RulesPage from './pages/RulesPage';
import MoreClinPage from './pages/MoreClinPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroPage">
        <Stack.Screen
          name="IntroPage"
          component={IntroPage}
          options={{
            title: 'КлиноCheck',
            headerStyle: {
              backgroundColor: '#008000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MoreClinPage"
          component={MoreClinPage}
          options={{
            title: 'Информация',
            headerStyle: {
              backgroundColor: '#008000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="RulesPage"
          component={RulesPage}
          options={{
            title: 'Правила',
            headerStyle: {
              backgroundColor: '#008000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
