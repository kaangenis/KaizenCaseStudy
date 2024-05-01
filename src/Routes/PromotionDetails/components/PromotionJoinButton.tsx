import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'
import { colors } from '../../../Configs/colors'

interface PromotionJoinButtonProps {
    title: string,
}

const PromotionJoinButton = ({
    title,
}: PromotionJoinButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={styles.absoluteBottom}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PromotionJoinButton

const styles = StyleSheet.create({
    absoluteBottom: {
        width: Dimensions.get('window').width - 20,
        height: 64,
        borderRadius: 32,
        backgroundColor: colors.primaryRed,
        position: 'absolute',
        bottom: Dimensions.get('window').height * 0.05,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Helvetica-700',
        color: colors.pureWhite,
    }
})