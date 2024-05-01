import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DahaDahaIcon from '../../../../assets/svg/homepage_icons/DahaDahaIcon.svg'
import ProfileIcon from '../../../../assets/svg/homepage_icons/ProfileIcon.svg'
import { colors } from '../../../Configs/colors'

const HomepageTopBar = () => {
    return (
        <View style={styles.main}>
            <DahaDahaIcon
                height={40}
                width={81} />
            <View style={styles.insideRower}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.profileButton}>
                    <ProfileIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomepageTopBar

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width - 30,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 40
    },
    insideRower: {
        width: 141,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: colors.primaryRed,
        width: 91,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonText: {
        color: colors.pureWhite,
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Helvetica-700'
    },
    profileButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.softBlack,
        justifyContent: 'center',
        alignItems: 'center'
    }
})