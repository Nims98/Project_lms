import * as actions from "./api.js";
import axios from "axios";

const api =
    ({ dispatch }) =>
    (next) =>
    async(action) => {
        if (action.type !== actions.apiCallBegan.type) {
            return next(action);
        }
        const { url, method, data, Onstart, Onsuccess, headers, OnError } = action.payload;
        if (Onstart) dispatch({ type: Onstart });
        next(action);
        try {
            const response = await axios.request({
                baseURL: "http://localhost:5000/",
                url,
                method,
                headers,
                data,
            });

            //General
            dispatch(actions.apiCallSuccess(response.data));
            //Specific
            if (Onsuccess) dispatch({ type: Onsuccess, payload: response.data });
        } catch (error) {
            //General
            dispatch(actions.apiCallFailed(error.message));
            //Specific
            if (OnError) dispatch({ type: OnError, payload: error.message });
        }
    };

export default api;