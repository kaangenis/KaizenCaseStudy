import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHomepageTagItems, setHomepageTagItemsLoading } from "../store/slicer";
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
                console.log(response.data);
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
                console.log(error);
            });
    };

    return {
        getTagsList,
    }
};