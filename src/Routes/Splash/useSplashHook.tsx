import { useEffect, useState } from "react";
import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useSplashHook = () => {
    const {
        reset
    } = useNavigateHook();
    const [splashLoadingCompleted, setSplashLoadingCompleted] = useState(false);

    const handleSplashOperations = () => {
        //Splash operations like fetching data, checking user session etc.
        //Example:
        //await AsyncStorage.getItem('isUserLoggedIn');
        setTimeout(() => {
            //After operations completed, setSplashLoadingCompleted(true) and navigate to Homepage.;
            setSplashLoadingCompleted(true);
            reset('BottomTabs');
        }, 2000);
    };

    useEffect(() => {
        handleSplashOperations();
    }, []);

    return {
        splashLoadingCompleted,
    };
};