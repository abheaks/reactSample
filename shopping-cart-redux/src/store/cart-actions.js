import { cartActions } from "./cart-slice";
import { uiSliceActions } from "./ui-slice";


export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://redux-http-2235a-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json')
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        }
        catch (err) {
            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Sending request Error",
                type: "Error"
            }));

        }
    }
}
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiSliceActions.showNotification({
            open: true,
            message: "Sending request",
            type: "warning"
        }));
        const sendRequest = async () => {

            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Sending request dab",
                type: "success"
            }));
            const res = await fetch('https://redux-http-2235a-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
                method: "PUT",
                body: JSON.stringify(cart)
            });
            const data = await res.json();
        };

        try {
            await sendRequest();
        }
        catch (err) {
            dispatch(uiSliceActions.showNotification({
                open: true,
                message: "Sending request Error",
                type: "Error"
            }));
        }

    }
};