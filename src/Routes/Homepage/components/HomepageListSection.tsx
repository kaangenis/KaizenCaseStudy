import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useHomepageHook } from '../useHomepageHook';
import HomepageListComponent from './HomepageListComponent';
import SearchIcon from '../../../../assets/svg/homepage_icons/SearchIcon.svg';

const HomepageListSection = () => {
    const { homepageTagItems } = useHomepageHook();
    return (
        <View style={styles.main}>
            <View style={styles.mr_10}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={homepageTagItems}
                    renderItem={({ item }) =>
                        <HomepageListComponent
                            title={item.Name}
                            iconURL={item.IconUrl}
                        />
                    }
                />
            </View>
        </View>
    )
}

export default HomepageListSection

const styles = StyleSheet.create({
    main: {
        width: Dimensions.get('window').width,
        height: 36,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        left: 15
    },
    mr_10: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})