import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CommentScreen from '../screens/CommentScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from '@react-native-vector-icons/ionicons';

const getTabBarIcon = (route, focused, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'book-outline';
  } else if (route.name === 'Favorite') {
    iconName = 'list-outline';
  } else if (route.name === 'Categories') {
    iconName = 'grid-outline';
  } else if (route.name === 'User') {
    iconName = 'person-outline';
  } else if (route.name === 'Cart') {
    iconName = 'cart-outline';
  }

  return <Ionicons name={iconName} size={size} color={focused ? '#4A80F0' : '#999'} />;
};
// Các màn hình
// const LoginScreen = ({navigation}) => (
//   <View>
//     <Text>Login Screen</Text>
//     <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
//     <Button title="Login" onPress={() => navigation.replace('Main')} />
//   </View>
// );

const RegisterScreen = ({navigation}) => (
  <View>
    <Text>Register Screen</Text>
    <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
  </View>
);

// const HomeScreen = ({navigation}) => (
//   <View>
//     <Text>Home Screen</Text>
//     <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
//   </View>
// );

const FavoriteScreen = () => (
  <View>
    <Text>Favorite Screen</Text>
  </View>
);
// const UserScreen = () => (
//   <View>
//     <Text>User Screen</Text>
//   </View>
// );

// const DetailScreen = ({navigation}) => (
//   <View>
//     <Text>Detail Screen</Text>
//     <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
//   </View>
// );

// const CartScreen = ({navigation}) => (
//   <View>
//     <Text>Cart Screen</Text>
//     <Button
//       title="Go to Home"
//       onPress={() =>
//         navigation.reset({
//           index: 0,
//           routes: [{name: 'HomeTabs'}], // Đặt HomeTabs làm root mới
//         })
//       }
//     />
//   </View>
// );

// Auth Stack (Login, Register)
const AuthStack = createNativeStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <AuthStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
    </AuthStack.Navigator>
  );
}

// Tab Navigator (Home, Favorite, User)
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => getTabBarIcon(route, focused, size),
        tabBarActiveTintColor: '#4A80F0',
        tabBarInactiveTintColor: '#999',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="User" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Main Stack (HomeTabs + Detail + Cart)
const MainStack = createNativeStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false}} />
      <MainStack.Screen name="Detail" component={DetailScreen} />
      <MainStack.Screen name="Cart" component={CartScreen} />
      <MainStack.Screen name="Comment" component={CommentScreen} options={{title: 'Write a comment'}} />
    </MainStack.Navigator>
  );
}

// App Navigator
export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Auth" component={AuthStackScreen} options={{headerShown: false}} />
        <AuthStack.Screen name="Main" component={MainStackScreen} options={{headerShown: false}} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
