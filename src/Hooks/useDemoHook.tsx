import { useDispatch, useSelector } from "react-redux";
import { decreaseTestState, increaseTestState } from "../store/slicer";


export const useDemoHook = () => {

    const testState = useSelector((state: any) => state.slicerTitle.value.testState);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch(increaseTestState())
    };

    const decrease = () => {
        dispatch(decreaseTestState())
    };

    return {
        testState,
        increase,
        decrease
    };

};