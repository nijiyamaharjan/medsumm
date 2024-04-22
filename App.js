import 'react-native-gesture-handler';
import * as React from 'react';
import { Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './components/Details';
import SignUpScreen from './components/Signup';
import UploadImageScreen from './components/UploadImage';
import LoginScreen from './components/Login';

const Stack = createNativeStackNavigator();

const CustomHeader = () => (
  <Image
    source={require('./logo.png')} // Adjust the path according to your project structure
    style={{ width: 80, height: 25, marginLeft: 5, }} // Adjust the width and height as needed
  />
);

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{ 
        title: '',
        headerTitle: () => <CustomHeader />,
        }}>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="UploadImage" component={UploadImageScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;