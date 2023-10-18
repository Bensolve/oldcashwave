import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from './main/HomePage';
// import TaskPage from './main/TaskPage';
import HomePage from './main/HomePage';
import TaskPage from './main/TaskPage';
import ChatBot from './main/ChatBot';
const Tab = createBottomTabNavigator();

const Screen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} 
                
            />
            <Tab.Screen name="Task" component={TaskPage} />
            <Tab.Screen name="Chatbot" component={ChatBot} />
        </Tab.Navigator>
    );
};

export default Screen;