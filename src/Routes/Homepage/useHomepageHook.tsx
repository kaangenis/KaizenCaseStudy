import { useDispatch, useSelector } from "react-redux";
import { useAxiosHook } from "../../Hooks/useAxiosHook";
import { setSelectedTag } from "../../store/slicer";

export const useHomepageHook = () => {
    const dispatch = useDispatch();
    const homepageTagItems = useSelector((state: any) => state.slicerTitle.value.homepageTagItems);
    const { getTagsList } = useAxiosHook();

    const checkTagsStateAndDispatch = () => {
        if (homepageTagItems === null) {
            getTagsList();
        } else {
            console.log('Homepage Tag Items already fetched');
            return null;
        }
    };

    const refreshItems = () => {
        getTagsList();
    };

    const filterTags = (tag: String) => {
        tag === 'Fırsat Bul'
            ? dispatch(setSelectedTag(null))
            : dispatch(setSelectedTag(tag))
    };

    return {
        homepageTagItems,
        refreshItems,
        checkTagsStateAndDispatch,
        filterTags,
    }
};