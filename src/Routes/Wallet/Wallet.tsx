import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import StarIcon from '../../../assets/svg/bottom_tab_icons/StarIcon.svg'
import { colors } from '../../Configs/colors'

const Wallet = () => {
    return (
        <View style={styles.main}>
            <StarIcon
                width={54}
                height={54}
            />
            <Text style={styles.title}>Wallet</Text>
        </View >
    )
}

export default Wallet

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