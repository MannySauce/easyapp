import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RemindListScreen from '../screens/RemindList';
import CreateScreen from '../screens/Create';
import DoneListScreen from '../screens/DoneList';
import SettingsScreen from '../screens/Settings';


export type StackParamsList = {
    RemindList: undefined;
    DoneList: undefined;
    Create: undefined
}
const Tab = createMaterialBottomTabNavigator<StackParamsList>();


const Routes = () => {
    return (
        <Tab.Navigator
            labeled={false}
            shifting={false}
            barStyle={{ backgroundColor: '#694fad', height:70, margin:0}}
        >
            <Tab.Screen 
                name='RemindList' 
                component={RemindListScreen}
                options={{tabBarLabel:"Remind",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="clock" color={color} size={26}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Create' 
                component={CreateScreen} 
                options={{tabBarLabel:"Create",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26}/>
                    )
                }} 
                
            />
            <Tab.Screen 
                name='DoneList' 
                component={DoneListScreen} 
                options={{tabBarLabel:"Done",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="check" color={color} size={26}/>
                    )
                }} 
            />
            {/* <Tab.Screen name='Settings' component={SettingsScreen}/> */}
        </Tab.Navigator>
    )
};

export default Routes;