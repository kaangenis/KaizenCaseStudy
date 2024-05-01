import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Configs/colors';
import { useSelector } from 'react-redux';
import { useHomepageHook } from '../useHomepageHook';

interface HomepageListComponentProps {
    title: string;
    iconURL?: string | React.ReactNode;
    constantIcon?: boolean;
}

const HomepageListComponent = ({
    title,
    iconURL,
    constantIcon
}: HomepageListComponentProps) => {
    const { filterTags } = useHomepageHook();
    const selectedTag = useSelector((state: any) => state.slicerTitle.value.selectedTag);
    return (
        <TouchableOpacity
            disabled={selectedTag === title}
            onPress={() => filterTags(title)}
            activeOpacity={0.75}
            style={selectedTag === title ? styles.main_selected : styles.main}>
            {
                typeof iconURL === 'string'
                    ? <Image
                        style={styles.iconStyle}
                        resizeMode='contain'
                        source={{ uri: iconURL }} />
                    : iconURL
            }
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default HomepageListComponent

const styles = StyleSheet.create({
    main: {
        width: 'auto',
        paddingHorizontal: 10,
        height: 36,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: colors.pureWhite,
        borderColor: colors.softGray,
        borderWidth: 1.5,
        borderRadius: 8
    },
    main_selected: {
        width: 'auto',
        paddingHorizontal: 10,
        height: 36,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: colors.pureWhite,
        borderColor: colors.primaryRed,
        borderWidth: 1.5,
        borderRadius: 8
    },
    iconStyle: {
        width: 24,
        height: 24,
        marginRight: 6,
        borderRadius: 4
    },
    title: {
        fontSize: 12,
        fontFamily: 'Helvetica-400',
        fontWeight: '400',
        color: colors.softBlack
    }
})