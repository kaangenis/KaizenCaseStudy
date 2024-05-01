import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Configs/colors'

interface PromotionDetailsContentProps {
    headerTitle: string,
    description: string
}

const PromotionDetailsContent = ({
    headerTitle,
    description
}: PromotionDetailsContentProps) => {
    const clearDescription = description.replace(/<[^>]*>?/gm, '');
    const kutahyaCheck = clearDescription.includes('K&uuml;tahya') ? clearDescription.replace('K&uuml;tahya', 'Kütahya') : clearDescription;
    const uzerindeCheck = kutahyaCheck.includes('&Uuml;') ? kutahyaCheck.replace('&Uuml;', 'Ü') : kutahyaCheck;
    const finalDescription = uzerindeCheck.includes('&nbsp;') ? uzerindeCheck.replace('&nbsp;', '') : uzerindeCheck;
    const clearHeaderTitle = headerTitle.replace(/<[^>]*>?/gm, '');
    const finalHeaderTitle = clearHeaderTitle.includes('K&uuml;tahya') ? clearHeaderTitle.replace('K&uuml;tahya', 'Kütahya') : clearHeaderTitle;
    return (
        <View style={styles.main}>
            <View style={styles.headerArea}>
                <Text style={styles.headerText}>{finalHeaderTitle}</Text>
            </View>
            <View style={[styles.descriptionArea,]}>
                <Text style={styles.descriptionText}>{finalDescription}</Text>
            </View>
        </View>
    )
}

export default PromotionDetailsContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerArea: {
        width: Dimensions.get('window').width - 30,
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    headerText: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Helvetica-700',
        color: colors.softBlack
    },
    descriptionArea: {
        flex: 1,
        width: Dimensions.get('window').width - 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Helvetica-400',
        color: colors.softBlack,
        lineHeight: 22
    }
})