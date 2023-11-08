import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from './main/HomePage';
// import TaskPage from './main/TaskPage';
import HomePage from './main/HomePage';
import TaskPage from './main/TaskPage';
import ChatBot from './main/ChatBot';
const Tab = createBottomTabNavigator();

const Screen = () => {
    return (
        <Tab.Navigator
        
        >
            <Tab.Screen name="Home" component={HomePage} 
                options={{ headerStyle:{backgroundColor : "black"}, headerTitle: "", headerRight:  }}
            />
            <Tab.Screen name="Task" component={TaskPage} 
                 options={{ headerStyle:{backgroundColor : "black"}, headerTitle: "Select Task And WIn" ,   headerTitleStyle: { color: "orange" }, }}
            />
            <Tab.Screen name="Chatbot" component={ChatBot}
                 options={{ headerStyle:{backgroundColor : "black"}, headerTitle: "" }}
            />
        </Tab.Navigator>
    );
};

export default Screen;