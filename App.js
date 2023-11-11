import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigationBar from './BottomNavigationBar';
import Doroga from './Doroga';
import Doroga1 from './Doroga1';
import Doroga2 from './Doroga2';
import Doroga3 from './Doroga3';
import Doroga4 from './Doroga4';
import Graf from './Graf';
import Chat from './Chat';
import Lk from './Lk';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{ headerShown: false }}>        
{/* Определите экраны и компоненты для навигации */}
        <Stack.Screen name="Doroga" component={Doroga} />
        <Stack.Screen name="Doroga1" component={Doroga1} />
        <Stack.Screen name="Doroga2" component={Doroga2} />
        <Stack.Screen name="Doroga3" component={Doroga3} />
        <Stack.Screen name="Doroga4" component={Doroga4} />
        <Stack.Screen name="Graf" component={Graf} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Lk" component={Lk} />
      </Stack.Navigator>
      <BottomNavigationBar />
    </NavigationContainer>
  );
}

export default App;
