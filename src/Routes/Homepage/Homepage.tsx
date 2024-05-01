import React, { useEffect } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import HomepageTopBar from './components/HomepageTopBar'
import HomepageListSection from './components/HomepageListSection'
import { useHomepageHook } from './useHomepageHook'
import { colors } from '../../Configs/colors'

const Homepage = () => {
    const { checkTagsStateAndDispatch } = useHomepageHook();
    useEffect(() => { checkTagsStateAndDispatch() }, []);
    return (
        <View style={styles.main}>
            <HomepageTopBar />
            <HomepageListSection />
        </View>
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