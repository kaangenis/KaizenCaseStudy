import { Animated, Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import HomepagePromotionComponent from './HomepagePromotionComponent'
import { useSelector } from 'react-redux'
import ConditionalRendering from '../../../Components/ConditionalRendering'
import LoadingComponent from '../../../Components/LoadingComponent'
import { colors } from '../../../Configs/colors'
import HomepagePaginator from './HomepagePaginator'

const HomepageMainContent = () => {
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
                        imageURL={item.ImageUrl}
                        brandURL={item.BrandIconUrl}
                        brandIconColor={item.BrandIconColor}
                        badgeTitle={item.RemainingText}
                        description={item.Title}
                        textColor={item.ListButtonTextBackGroudColor}
                        id={item.Id}
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