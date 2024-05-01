import React, { useRef } from 'react'
import {
    Animated,
    Dimensions,
    FlatList,
    StyleSheet,
    View
} from 'react-native'
import HomepagePromotionComponent from './HomepagePromotionComponent'
import LoadingComponent from '../../../Components/LoadingComponent'
import HomepagePaginator from './HomepagePaginator'
import { useSelector } from 'react-redux'
import { colors } from '../../../Configs/colors'
import { useHomepageHook } from '../useHomepageHook'

const HomepageMainContent = () => {
    const { navigateToPromotionDetails } = useHomepageHook();
    const homepagePromotions = useSelector((state: any) => state.slicerTitle.value.homepagePromotions);
    const homepagePromotionsLoading = useSelector((state: any) => state.slicerTitle.value.homepagePromotionsLoading);
    const scrollX = useRef(new Animated.Value(0)).current;
    if (homepagePromotionsLoading === true || homepagePromotions === null) {
        return (
            <LoadingComponent
                indicatorColor={colors.primaryRed} />
        )
    }
    return (
        <View style={styles.main}>
            <FlatList
                data={homepagePromotions}
                renderItem={({ item, index }) =>
                    <HomepagePromotionComponent
                        onPress={() => { navigateToPromotionDetails(item.Id) }}
                        imageURL={item.ImageUrl}
                        brandURL={item.BrandIconUrl}
                        brandIconColor={item.BrandIconColor}
                        badgeTitle={item.RemainingText}
                        description={item.Title}
                        textColor={item.ListButtonTextBackGroudColor}
                        key={index.toString()}
                    />
                }
                keyExtractor={item => item.id}
                horizontal={true}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                showsHorizontalScrollIndicator={false}
            />
            <HomepagePaginator
                scrollX={scrollX}
                data={homepagePromotions}
            />
        </View>
    )
}

export default HomepageMainContent

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width - 20,
    }
})