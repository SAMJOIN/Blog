import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk))

declare global {
    interface Window {
        reduxStore: typeof store;
    }
}

window.reduxStore = store;

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch