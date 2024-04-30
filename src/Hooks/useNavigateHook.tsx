import {
    ParamListBase,
    useNavigation
} from "@react-navigation/native";
import {
    NativeStackNavigationProp
} from "@react-navigation/native-stack";

export const useNavigateHook = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigate = (screen: string) => {
        navigation.navigate(screen);
    };

    const navigateWithParams = (screen: string, params: any) => {
        navigation.navigate(screen, params);
    };

    const replace = (screen: string) => {
        navigation.replace(screen);
    };

    const goBack = () => {
        navigation.goBack();
    };

    const reset = (screen: string) => {
        navigation.reset({
            index: 0,
            routes: [{ name: screen }],
        });
    };

    const resetWithParams = (screen: string, params: any) => {
        navigation.reset({
            index: 0,
            routes: [{ name: screen, params }],
        });
    };

    return {
        navigate,
        replace,
        goBack,
        reset,
        navigateWithParams,
        resetWithParams,
    }
};