import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHomepagePromotions, setHomepagePromotionsLoading, setHomepageTagItems, setHomepageTagItemsLoading } from "../store/slicer";
import SearchIcon from '../../assets/svg/homepage_icons/SearchIcon.svg'

export const useAxiosHook = () => {
    const dispatch = useDispatch();

    const baseURL = 'https://api.extrazone.com/';
    const endpoints = {
        LIST_TAGS: 'tags/list',
        LIST_PROMOTIONS: 'promotions/list?Channel=PWA',
        PROMOTION_DETAILS: `promotions?Id={Id}`
    }
    const headers = {
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR'
    }

    const constantIcon = {
        width: 24,
        height: 24,
        marginRight: 6,
        borderRadius: 4
    }

    const getTagsList = async () => {
        dispatch(setHomepageTagItemsLoading(true));
        const url = `${baseURL}${endpoints.LIST_TAGS}`;
        await axios.get(url, { headers })
            .then((response) => {
                console.log("TAGS:", response.data);
                response.data.unshift({
                    Name: 'Fırsat Bul',
                    IconUrl: <SearchIcon style={constantIcon} />,
                    Id: 0,
                    Rank: 0
                });
                dispatch(setHomepageTagItems(response.data));
                dispatch(setHomepageTagItemsLoading(false));
            })
            .catch((error) => {
                console.log("LIST_TAGS_ERROR_AT_AXIOS_HOOK:", error);
            });
    };

    const getPromotions = async () => {
        dispatch(setHomepagePromotionsLoading(true));
        const url = `${baseURL}${endpoints.LIST_PROMOTIONS}`;
        await axios.get(url, { headers })
            .then((response) => {
                console.log(response.data);
                dispatch(setHomepagePromotions(response.data));
                dispatch(setHomepagePromotionsLoading(false));
            })
            .catch((error) => {
                console.log("LIST_PROMOTIONS_ERROR_AT_AXIOS_HOOK:", error);
            });
    };

    return {
        getTagsList,
        getPromotions,
    }
};