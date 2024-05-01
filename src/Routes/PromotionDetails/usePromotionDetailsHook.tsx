import { useState } from "react";
import { useAxiosHook } from "../../Hooks/useAxiosHook";
import { useDispatch } from "react-redux";
import { setHomepagePromotionsLoading } from "../../store/slicer";

export const usePromotionDetailsHook = () => {
    const dispatch = useDispatch();
    const [promotionDetails, setPromotionDetails] = useState<any>(null);

    const {
        getPromotionDetails,
    } = useAxiosHook();


    const getPromotionDetailsAndSetState = async (id: number) => {
        dispatch(setHomepagePromotionsLoading(true));
        const response = await getPromotionDetails(id);
        setPromotionDetails(response);
        dispatch(setHomepagePromotionsLoading(false));
    };

    return {
        getPromotionDetailsAndSetState,
        promotionDetails
    };
};