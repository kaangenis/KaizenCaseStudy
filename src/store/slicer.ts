import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        homepageTagItems: Array<any> | null;
        homepageTagItemsLoading: boolean;
        selectedTag: string | null;
        homepagePromotions: Array<any> | null;
        homepagePromotionsLoading: boolean;
    };
};

const initialState = {
    value: {
        homepageTagItems: null,
        homepageTagItemsLoading: true,
        selectedTag: null,
        homepagePromotions: null,
        homepagePromotionsLoading: true,
    },
} as InitialState;

export const slicerFunction = createSlice({
    name: 'slicerTitle',
    initialState,
    reducers: {
        setHomepageTagItems: (state, action) => {
            state.value.homepageTagItems = action.payload;
        },
        setHomepageTagItemsLoading: (state, action) => {
            state.value.homepageTagItemsLoading = action.payload;
        },
        setSelectedTag: (state, action) => {
            state.value.selectedTag = action.payload;
        },
        setHomepagePromotions: (state, action) => {
            state.value.homepagePromotions = action.payload;
        },
        setHomepagePromotionsLoading: (state, action) => {
            state.value.homepagePromotionsLoading = action.payload;
        },
    },
});

export const {
    setHomepageTagItems,
    setHomepageTagItemsLoading,
    setSelectedTag,
    setHomepagePromotions,
    setHomepagePromotionsLoading,
} = slicerFunction.actions;
export default slicerFunction.reducer;