import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Configs/colors'
import HomepageTopBar from './components/HomepageTopBar'

const Homepage = () => {
    return (
        <View style={styles.main}>
            <HomepageTopBar />
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