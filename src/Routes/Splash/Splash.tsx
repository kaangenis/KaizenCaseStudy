import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import DahaDahaIcon from '../../../assets/svg/homepage_icons/DahaDahaIcon.svg'
import LoadingComponent from '../../Components/LoadingComponent'
import ConditionalRendering from '../../Components/ConditionalRendering'
import { useSplashHook } from './useSplashHook'

const Splash = () => {
    const { splashLoadingCompleted } = useSplashHook();
    return (
        <View style={styles.main}>
            <DahaDahaIcon
                width={120}
                height={120}
            />
            <ConditionalRendering
                renderIf={!splashLoadingCompleted}
                children={
                    <LoadingComponent />
                }
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})