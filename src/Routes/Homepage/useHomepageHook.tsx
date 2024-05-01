import { useDispatch, useSelector } from "react-redux";
import { useAxiosHook } from "../../Hooks/useAxiosHook";
import { setSelectedTag } from "../../store/slicer";
import { useNavigateHook } from "../../Hooks/useNavigateHook";

export const useHomepageHook = () => {
    const {
        navigate,
        navigateWithParams,
    } = useNavigateHook();
    const dispatch = useDispatch();
    const homepageTagItems = useSelector((state: any) => state.slicerTitle.value.homepageTagItems);
    const homepageTagItemsLoading = useSelector((state: any) => state.slicerTitle.value.homepageTagItemsLoading);
    const {
        getTagsList,
        getPromotions,
    } = useAxiosHook();

    const checkTagsStateAndDispatch = () => {
        if (homepageTagItems === null) {
            getTagsList();
        } else {
            console.log('Homepage Tag Items already fetched');
            return null;
        }
    };

    const checkPromotionsStateAndDispatch = () => {
        if (homepageTagItems === null) {
            getPromotions();
        } else {
            console.log('Promotions already fetched');
            return null;
        }
    };

    const refreshItems = () => {
        getTagsList();
        getPromotions();
    };

    const filterTags = (tag: String) => {
        if (tag === 'Fırsat Bul') {
            dispatch(setSelectedTag(null))
            navigate('Portal')
        } else {
            dispatch(setSelectedTag(tag))
        }
    };

    const navigateToPromotionDetails = (Id: number) => {
        navigateWithParams('PromotionDetails', { Id: Id });
    };

    return {
        homepageTagItems,
        homepageTagItemsLoading,
        refreshItems,
        checkTagsStateAndDispatch,
        filterTags,
        checkPromotionsStateAndDispatch,
        navigateToPromotionDetails,
    }
};