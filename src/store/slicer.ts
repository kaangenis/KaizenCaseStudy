import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        homepageTagItems: Array<any> | null;
        homepageTagItemsLoading: boolean;
        selectedTag: string | null;
    };
};

const initialState = {
    value: {
        homepageTagItems: null,
        homepageTagItemsLoading: true,
        selectedTag: null,
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
    },
});

export const {
    setHomepageTagItems,
    setHomepageTagItemsLoading,
    setSelectedTag,
} = slicerFunction.actions;
export default slicerFunction.reducer;