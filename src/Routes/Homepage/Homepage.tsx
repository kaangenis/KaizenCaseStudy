import React, { useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import HomepageTopBar from './components/HomepageTopBar'
import HomepageListSection from './components/HomepageListSection'
import HomepageMainContent from './components/HomepageMainContent'
import { useHomepageHook } from './useHomepageHook'
import { colors } from '../../Configs/colors'

const Homepage = () => {
    const {
        checkTagsStateAndDispatch,
        checkPromotionsStateAndDispatch,
    } = useHomepageHook();
    useEffect(() => {
        checkTagsStateAndDispatch()
        checkPromotionsStateAndDispatch()
    }, []);
    return (
        <SafeAreaView style={styles.main}>
            <HomepageTopBar />
            <HomepageListSection />
            <HomepageMainContent />
        </SafeAreaView>
    )
}

export default Homepage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.pureWhite
    }
})