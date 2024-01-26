import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from 'react-native-vector-icons';
import { View } from 'react-native';
import HomePage from './main/HomePage';
import TaskPage from './main/TaskPage';
import ChatBot from './main/ChatBot';
import Profile from './main/Profile'
const Tab = createBottomTabNavigator();


const Screen = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />



            <Tab.Navigator
                screenOptions={{
                    headerShown: false, tabBarStyle: {
                        backgroundColor: 'orange',  // Set the background color to orange
                    },
                }}

            >
                <Tab.Screen name="Home" component={HomePage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={"black"} size={size} />
                        ),
                        tabBarLabelStyle: { color: 'black' }
                    }}
                />
                <Tab.Screen name="Task" component={TaskPage}
                    options={{
                        tabBarLabel: 'Task',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="checkmark-circle" color={"black"} size={size} />
                        ),
                        tabBarLabelStyle: { color: 'black' }
                    }}
                />

                <Tab.Screen name="Chatbot" component={ChatBot}

                    options={{
                        tabBarLabel: 'Chatbot',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbubbles" color={"black"} size={size} />
                        ),
                        tabBarLabelStyle: { color: 'black' }
                    }}

                />
                <Tab.Screen name="Profile" component={Profile}

                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" color={"black"} size={size} />
                        ),
                        tabBarLabelStyle:{color:'black'}
                    }}
                />
            </Tab.Navigator>

        </View>
    );
};

export default Screen;