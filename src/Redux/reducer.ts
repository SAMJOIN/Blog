import { postAPI } from "../API/api"
import { Dispatch } from 'redux';
import { Action, PostProps, PostType, Reactions, State } from "../Types";

const SET_REACTION = 'SET-REACTION'
const SET_POSTS = 'SET-POSTS'


const initState: State = {
    posts: []
}

const reducer = (state: State = initState, action: Action): State => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: action.posts.map((post: PostType) => {
                    return {
                        ...post,
                        likeCount: Math.floor(Math.random() * 51),
                        dislikeCount: Math.floor(Math.random() * 51),
                        reaction: Reactions.none
                    }
                })
            }
        }
        case SET_REACTION: {
            debugger;
            return {
                ...state,
                posts: state.posts.map((post: PostType) => {
                    if (post.id === action.id) {
                        if (post.reaction === action.reaction && action.reaction !== Reactions.none) {
                            if (action.reaction === Reactions.like)
                                return {
                                    ...post,
                                    likeCount: post.likeCount - 1,
                                    reaction: Reactions.none
                                }
                            else
                                return {
                                    ...post,
                                    dislikeCount: post.dislikeCount - 1,
                                    reaction: Reactions.none
                                }
                        }
                        if (action.reaction === Reactions.like && post.reaction === Reactions.dislike)
                            return {
                                ...post,
                                dislikeCount: post.dislikeCount - 1,
                                likeCount: post.likeCount + 1,
                                reaction: Reactions.like
                            }
                        if (action.reaction === Reactions.dislike && post.reaction === Reactions.like)
                            return {
                                ...post,
                                dislikeCount: post.dislikeCount + 1,
                                likeCount: post.likeCount - 1,
                                reaction: Reactions.dislike
                            }
                        if (action.reaction === Reactions.like)
                            return {
                                ...post,
                                likeCount: post.likeCount + 1,
                                reaction: Reactions.like
                            }
                        if (action.reaction === Reactions.dislike)
                            return {
                                ...post,
                                dislikeCount: post.dislikeCount + 1,
                                reaction: Reactions.dislike
                            }
                    }
                    return post
                })
            }
        }
        default:
            return state;
    }
}


export const setReaction = (id: number, reaction: Reactions): Action => {
    return {
        type: SET_REACTION,
        id,
        reaction
    }
}

export const setPosts = (posts: PostProps): Action => {
    return {
        type: SET_POSTS,
        posts
    }
}

export const getPosts = () => {
    return (dispatch: Dispatch) => {
        postAPI.getPosts()
            .then(response => { dispatch(setPosts(response)) })
    }
}



export const filterPosts = (title: string) => {
    return (dispatch: Dispatch) => {
        postAPI.filterPosts(title)
            .then(response => { dispatch(setPosts(response)) })
    }
}

export default reducer;