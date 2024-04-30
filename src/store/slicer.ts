import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        testState: number,
    };
};

const initialState = {
    value: {
        testState: 0,
    },
} as InitialState;

export const slicerFunction = createSlice({
    name: 'slicerTitle',
    initialState,
    reducers: {
        increaseTestState: (state) => {
            state.value.testState += 1;
        },
        decreaseTestState: (state) => {
            state.value.testState -= 1;
        },
    },
});

export const {
    increaseTestState,
    decreaseTestState,
} = slicerFunction.actions;
export default slicerFunction.reducer;