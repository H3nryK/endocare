import 'react-native-gesture-handler';

import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import BottomTab from './src/components/BottomTab';
import SignupScreen from './src/screens/SignupScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import TermsAndConditionsScreen from './src/screens/TermsAndConditionsScreen';
import ContactUsScreen from './src/screens/ContactScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import BlogListScreen from './src/screens/BlogListScreen';
import ItemListScreen from './src/screens/ItemListScreen';
import NotificationsScreen from './src/screens/NotificationScreen';

const Stack = createStackNavigator();

const App = () => {

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcome">
                <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Hometab" component={BottomTab} options={{headerShown: false}} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
                <Stack.Screen name="Terms" component={TermsAndConditionsScreen} />
                <Stack.Screen name="Contact" component={ContactUsScreen} />
                <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
                <Stack.Screen name="BlogList" component={BlogListScreen} />
                <Stack.Screen name="ItemList" component={ItemListScreen} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
                <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
};

export default App;