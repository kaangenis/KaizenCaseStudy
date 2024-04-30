import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDemoHook } from '../../Hooks/useDemoHook'
import { useNavigateHook } from '../../Hooks/useNavigateHook'

const Onboarding = () => {

    const { navigate } = useNavigateHook();

    return (
        <SafeAreaView style={styles.main}>
            <Text>Onboarding</Text>
            <Button
                title="Go to Home"
                onPress={() => navigate('Home')}
            />
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})