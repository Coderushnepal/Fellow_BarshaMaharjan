import {COUNTER_INCREMENT, COUNTER_DECREMENT} from "../constants/action";

export const increaseCount = () => {
    return {type: COUNTER_INCREMENT};
}

export const decreaseCount = () => {
    return {type: COUNTER_DECREMENT};
}