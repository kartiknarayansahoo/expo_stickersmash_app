import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#ffd33d",
            tabBarInactiveTintColor: "#cbcbcbff",
            headerStyle: {
                backgroundColor: "#25292e"
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: '#25292e',
            },
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'home' : "home-outline"} color={color} size={size} ></Ionicons>
                )
            }}></Tabs.Screen>
            <Tabs.Screen name="about" options={{
                title: "About",
                headerShown: false,
                tabBarIcon: ({ color, focused, size }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={size} ></Ionicons>
                )
            }}></Tabs.Screen>
        </Tabs>
    );
};

export default TabLayout

