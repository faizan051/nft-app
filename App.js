import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font'
import { Home, Details } from './screens'



const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'transparent'
  }
}

export default function App() {

  const loaded = useFonts({
    interBold: require('./assets/fonts/Inter-Bold.ttf'),
    interLight: require('./assets/fonts/Inter-Light.ttf'),
    interMedium: require('./assets/fonts/Inter-Medium.ttf'),
    interRegular: require('./assets/fonts/Inter-Regular.ttf'),
    interSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  })

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

