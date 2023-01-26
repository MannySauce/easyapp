import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RemindListScreen from '../screens/RemindList';
import HomeScreen from '../screens/Home';
import DoneListScreen from '../screens/DoneList';
import SettingsScreen from '../screens/Settings';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='RemindList' component={RemindListScreen}/>
            <Stack.Screen name='DoneList' component={DoneListScreen}/>
            <Stack.Screen name='Settings' component={SettingsScreen}/>
        </Stack.Navigator>
    )
};

export default Routes;