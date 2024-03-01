import { connect } from "react-redux";
import { PostsProps, Post as PostType, Posts as PostsType } from "../../Types";
import FirstPost from "./FirstPost";
import Post from "./Post";
import style from './Posts.module.css'
import { RootState } from "../../Redux/redux-store";



const Posts = (props: PostsProps) => {

    const firstPost = props.posts[0];
    const posts = props.posts.slice(1);

    const renderPost = (posts : PostsType) => {
        return posts.map((post: PostType) =>
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                likeCount={post.likeCount}
                dislikeCount={post.dislikeCount}
                reaction={post.reaction} />)
    }

    const columnFirst = posts.filter((post: PostType) => post.id % 2 == 0)
    const columnSecond = posts.filter((post: PostType) => post.id % 2 == 1)
        
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
                    {renderPost(columnFirst)}
                </div>
                <div style={{ gridArea: 'second' }}>
                    {renderPost(columnSecond)}
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = (state: RootState) => ({
    posts: state.posts
})

export default connect(mapDispatchToProps)(Posts);