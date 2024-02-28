import { connect } from "react-redux";
import { PostProps, PostType } from "../../Types";
import FirstPost from "./FirstPost";
import Post from "./Post";
import style from './Posts.module.css'
import { RootState } from "../../Redux/redux-store";



const Posts = (props: PostProps) => {

    const firstPost = props.posts[0];
    const posts = props.posts.slice(1);
    const columnFirst = posts.filter((post: PostType) => post.id % 2 == 0)
        .map((post: PostType) => <Post
            id={post.id}
            title={post.title}
            body={post.body}
            likeCount={post.likeCount}
            dislikeCount={post.dislikeCount}
            reaction={post.reaction} />)

    const columnSecond = posts.filter((post: PostType) => post.id % 2 == 1)
        .map((post: PostType) => <Post
            id={post.id}
            title={post.title}
            body={post.body}
            likeCount={post.likeCount}
            dislikeCount={post.dislikeCount}
            reaction={post.reaction} />)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {firstPost
                ? <FirstPost
                    id={firstPost.id}
                    title={firstPost.title}
                    body={firstPost.body}
                    likeCount={firstPost.likeCount}
                    dislikeCount={firstPost.dislikeCount}
                    reaction={firstPost.reaction} />
                : <></>
            }
            <div className={style.postsGrid}>
                <div style={{ gridArea: 'first' }}>
                    {columnFirst}
                </div>
                <div style={{ gridArea: 'second' }}>
                    {columnSecond}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (state: RootState) => ({
    posts: state.posts
})

export default connect(mapDispatchToProps)(Posts);