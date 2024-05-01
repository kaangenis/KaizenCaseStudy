// Navigation Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SVG's
import HomepageIcon from "../../assets/svg/bottom_tab_icons/HomepageIcon.svg";
import PortalIcon from "../../assets/svg/bottom_tab_icons/PortalIcon.svg";
import StarIcon from "../../assets/svg/bottom_tab_icons/StarIcon.svg";

//Routes
import Splash from "./Splash/Splash";
import Homepage from "./Homepage/Homepage";
import Portal from "./Portal/Portal";
import Wallet from "./Wallet/Wallet";

//ETC.
import { colors } from "../Configs/colors";

//Configuring Stack and Tab Navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    const BottomTabs = () => {
        return (
            <Tab.Navigator
                initialRouteName='Homepage'
                screenOptions={{
                    tabBarActiveTintColor: colors.pureBlack,
                    tabBarInactiveTintColor: colors.pureWhite,
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarStyle: {
                        height: '10%',
                        backgroundColor: colors.pureWhite,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderTopColor: colors.softGray,
                        borderTopWidth: 1.5,
                    },
                }}>
                <Tab.Screen
                    options={
                        {
                            tabBarLabel: 'Keşfet',
                            tabBarLabelStyle: {
                                color: colors.pureBlack,
                                fontSize: 12,
                                fontWeight: '700',
                                fontFamily: 'Helvetica-700',
                                bottom: 5
                            },
                            tabBarIcon: () => <HomepageIcon />
                        }
                    }
                    name="Homepage"
                    component={Homepage} />
                <Tab.Screen
                    options={
                        {
                            tabBarLabel: () => null,
                            tabBarIconStyle: { bottom: 7.5 },
                            tabBarIcon: () => <PortalIcon />
                        }
                    }
                    name="Portal"
                    component={Portal} />
                <Tab.Screen
                    options={
                        {
                            tabBarLabel: 'Daha Cüzdan',
                            tabBarLabelStyle: {
                                color: colors.pureBlack,
                                fontSize: 12,
                                fontWeight: '700',
                                fontFamily: 'Helvetica-700',
                                bottom: 5
                            },
                            tabBarIcon: () => <StarIcon />
                        }
                    }
                    name="Wallet"
                    component={Wallet} />
            </Tab.Navigator>
        )
    };

    const ROUTES = [
        { name: 'Splash', component: Splash },
        { name: 'BottomTabs', component: BottomTabs }
    ]

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    headerShown: false
                }}>
                {
                    ROUTES.map((route, index) => (
                        <Stack.Screen
                            options={{
                                animation: 'fade'
                            }}
                            key={index}
                            name={route.name}
                            component={route.component} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}