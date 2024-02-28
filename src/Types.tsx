import { Dispatch } from "redux"

export type Post = {
    id: number,
    title: string,
    body: string,
    likeCount: number,
    dislikeCount: number,
    reaction: Reactions
}

export type Posts = Array<Post>

export type PostsProps = {
    posts: Posts
}

export type InitialState = {
    posts: Post[];
}

export type SetReaction = (id: number, reaction: Reactions) => SetReactionReturn;

export type SetReactionReturn = {
    type: 'SET-REACTION',
    id: number,
    reaction: Reactions,
}

export type SetPostsReturn = {
    type: 'SET-POSTS',
    posts: Posts
}

export type Action = SetReactionReturn | SetPostsReturn

export type ThunkResult<R> = (title: string, dispatch: Dispatch<Action>) => R;

export type CounterProps = {setReaction: SetReaction} & Pick<Post, 'id' | 'likeCount' | 'dislikeCount' | 'reaction' >

export enum Reactions {
    none,
    like,
    dislike
}

type Thunk = (title: string) => void

export type MainPageProps = {
    posts: Posts,
    filterPosts: Thunk
}

export type AppProps = {
    posts: Posts,
    state: InitialState,
    getPosts: () => void;
}


