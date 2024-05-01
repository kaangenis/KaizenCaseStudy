import React from 'react'
import {
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from 'react-native'
import HomepageListComponent from './HomepageListComponent';
import LoadingComponent from '../../../Components/LoadingComponent';
import { useHomepageHook } from '../useHomepageHook';
import { colors } from '../../../Configs/colors';

const HomepageListSection = () => {
    const {
        homepageTagItems,
        homepageTagItemsLoading
    } = useHomepageHook();
    if (homepageTagItemsLoading === true || homepageTagItems === null) {
        return (
            <LoadingComponent
                style={styles.my_25}
                indicatorSize='small'
                indicatorColor={colors.primaryRed} />
        )
    }
    return (
        <View style={styles.main}>
            <View style={styles.mr_10}>
                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={homepageTagItems}
                    renderItem={({ item, index }) =>
                        <HomepageListComponent
                            title={item.Name}
                            iconURL={item.IconUrl}
                            key={index.toString()}
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
        left: 10
    },
    mr_10: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    my_25: {
        marginVertical: 25
    }
})