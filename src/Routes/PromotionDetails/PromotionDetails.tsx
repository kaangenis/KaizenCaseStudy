import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAxiosHook } from '../../Hooks/useAxiosHook';
import PromotionDetailsImageBG from './components/PromotionDetailsImageBG';
import { usePromotionDetailsHook } from './usePromotionDetailsHook';
import { useSelector } from 'react-redux';
import LoadingComponent from '../../Components/LoadingComponent';
import PromotionDetailsContent from './components/PromotionDetailsContent';
import { colors } from '../../Configs/colors';
import PromotionJoinButton from './components/PromotionJoinButton';

const PromotionDetails = ({ route }: any) => {
    const { Id } = route.params;
    const {
        getPromotionDetailsAndSetState,
        promotionDetails
    } = usePromotionDetailsHook();

    const promotionDetailsLoading = useSelector((state: any) => state.slicerTitle.value.homepagePromotionsLoading);

    useEffect(() => {
        getPromotionDetailsAndSetState(Id);
    }, [])
    if (promotionDetails === null || promotionDetailsLoading === true) {
        return (
            <LoadingComponent
                indicatorColor={colors.primaryRed}
                fullScreen />
        )
    }
    return (
        <SafeAreaView style={styles.main}>
            <StatusBar hidden />
            <PromotionDetailsImageBG
                RemainingText={promotionDetails?.RemainingText}
                bgURL={promotionDetails?.ImageUrl}
                brandIconURL={promotionDetails?.BrandIconUrl}
                brandIconColor={promotionDetails?.BrandIconColor}
            />
            <PromotionDetailsContent
                headerTitle={promotionDetails?.Title}
                description={promotionDetails?.Description}
            />
            <PromotionJoinButton
                title={promotionDetails?.DetailButtonText}
            />
        </SafeAreaView>
    )
}

export default PromotionDetails

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.pureWhite
    }
})