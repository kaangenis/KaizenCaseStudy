import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import PortalIcon from '../../../assets/svg/bottom_tab_icons/PortalIcon.svg'
import { colors } from '../../Configs/colors'

const Portal = () => {
    return (
        <View style={styles.main}>
            <PortalIcon
                width={64}
                height={64}
            />
            <Text style={styles.title}>Portal</Text>
        </View >
    )
}

export default Portal

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.pureWhite
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Helvetica-700',
        color: colors.softBlack
    }
})