export type PostProps = {
    posts: Array<PostType>
}

export type PostType = {
    id: number,
    title: string,
    body: string,
    likeCount: number,
    dislikeCount: number,
    reaction: Reactions
}

export type State = {
    posts: PostType[];
}

export type Action<T extends string = string> = {
    type: T,
    [propName: string] : any
}

export enum Reactions {
    none,
    like,
    dislike
}
