import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import dayjs from 'dayjs'
import { colors } from '../../../Configs/colors'

interface HomepagePromotionComponentProps {
    imageURL: string,
    brandURL: string,
    brandIconColor: string,
    badgeTitle: string,
    description: string,
    id: string
    textColor: string,
}

const HomepagePromotionComponent = ({
    imageURL,
    brandURL,
    brandIconColor,
    badgeTitle,
    description,
    id,
    textColor,
}: HomepagePromotionComponentProps) => {
    let clearDescription = description.replace(/<[^>]*>?/gm, '');
    if (clearDescription.includes('K&uuml;tahya')) {
        clearDescription = clearDescription.replace('K&uuml;tahya', 'Kütahya');
    }
    const calculateRemainingText = (remainingText: string) => {
        const replacedText = remainingText.replaceAll('.', '-');
        const splittedText = replacedText.split('-');
        const partsOfText = splittedText[2] + '-' + splittedText[1] + '-' + splittedText[0];
        const unixTimestamp = dayjs(partsOfText, 'YYYY-MM-DD').unix();
        const currentTime = dayjs().unix();
        const remainingTime = unixTimestamp - currentTime;
        const remainingDay = Math.floor(remainingTime / 86400);
        return remainingDay + ' Gün Kaldı';
    };
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.main, { shadowColor: textColor }]}>
            <Image
                style={styles.imageStyle}
                resizeMode='cover'
                source={{ uri: imageURL }} />
            <View style={styles.absoluteBar}>
                <Image
                    style={[styles.brandImage, { backgroundColor: brandIconColor }]}
                    source={{ uri: brandURL }} />
                <View style={styles.textArea}>
                    <Text style={styles.badgeTitle}>{calculateRemainingText(badgeTitle)}</Text>
                </View>
            </View>
            <View style={styles.my_10}>
                <Text style={styles.description}>{clearDescription}</Text>
                <TouchableOpacity>
                    <Text style={[styles.description, { color: textColor }]}>Daha Daha</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default HomepagePromotionComponent

const styles = StyleSheet.create({
    main: {
        width: 305,
        height: 383,
        backgroundColor: colors.pureWhite,
        borderRadius: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20,
        borderWidth: 1.5,
        borderColor: colors.softGray,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 0.25,
    },
    imageStyle: {
        width: 300,
        height: 300,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 16,
    },
    brandImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    absoluteBar: {
        position: 'absolute',
        bottom: 75,
        left: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 280,
        height: 50,
    },
    textArea: {
        width: 100,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pureBlack,
        borderRadius: 10,
        marginLeft: 10
    },
    badgeTitle: {
        color: colors.pureWhite,
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Helvetica-400'
    },
    my_10: {
        marginVertical: 10
    },
    description: {
        color: colors.pureBlack,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Helvetica-700',
        textAlign: 'center',
        padding: 5
    },
})