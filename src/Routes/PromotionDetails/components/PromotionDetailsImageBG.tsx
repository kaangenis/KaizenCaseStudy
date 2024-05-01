import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GoBackIcon from '../../../../assets/svg/content_page_icons/GoBackIcon.svg'
import { colors } from '../../../Configs/colors'
import { useNavigateHook } from '../../../Hooks/useNavigateHook'
import { useDateTimeHook } from '../../../Hooks/useDateHook'

interface PromotionDetailsImageBGProps {
    bgURL: string,
    brandIconURL: string,
    brandIconColor: string,
    RemainingText: string,
}

const PromotionDetailsImageBG = ({
    bgURL,
    brandIconURL,
    brandIconColor,
    RemainingText,
}: PromotionDetailsImageBGProps) => {
    const { goBack } = useNavigateHook();
    const { calculateRemainingText } = useDateTimeHook();
    return (
        <View style={styles.main}>
            <Image
                resizeMode='cover'
                source={{ uri: bgURL }}
                style={styles.image}
            />
            <TouchableOpacity
                onPress={goBack}
                style={styles.goBackCircle}>
                <GoBackIcon />
            </TouchableOpacity>
            <View style={styles.absoluteBar}>
                <Image
                    style={[styles.brandImage, { backgroundColor: brandIconColor }]}
                    source={{ uri: brandIconURL }} />
                <View style={styles.textArea}>
                    <Text style={styles.badgeTitle}>{calculateRemainingText(RemainingText)}</Text>
                </View>
            </View>
        </View>
    )
}

export default PromotionDetailsImageBG

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    goBackCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.darkGray,
        position: 'absolute',
        top: 40,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
        borderBottomLeftRadius: 100,
    },
    absoluteBar: {
        width: Dimensions.get('window').width - 30,
        height: 50,
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    brandImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textArea: {
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pureBlack,
        borderRadius: 10,
        marginLeft: 10
    },
    badgeTitle: {
        color: colors.pureWhite,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Helvetica-400'
    },
})