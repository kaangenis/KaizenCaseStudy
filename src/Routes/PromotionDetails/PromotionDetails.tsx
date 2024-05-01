import React, { useEffect } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import PromotionDetailsImageBG from './components/PromotionDetailsImageBG';
import LoadingComponent from '../../Components/LoadingComponent';
import PromotionDetailsContent from './components/PromotionDetailsContent';
import PromotionJoinButton from './components/PromotionJoinButton';
import { usePromotionDetailsHook } from './usePromotionDetailsHook';
import { useSelector } from 'react-redux';
import { colors } from '../../Configs/colors';

const PromotionDetails = ({ route }: any) => {
    const { Id, SeoName } = route.params;
    console.log("Id:", Id)
    console.log("SeoName:", SeoName)

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
        <View style={styles.main}>
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
        </View>
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