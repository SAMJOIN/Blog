import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";
import { useParams } from "react-router";
import style from './PostPage.module.css'
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";



const PostPage: React.FC = () => {
    const params = useParams();
    const postId = Number(params.postID); // Получаем postId из URL
    const post = useSelector((state: RootState) => state.posts.find(post => post.id === postId));

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className={style.post}>
            <div className={style.blogTop}>
                <div className={style.textContent}>
                    <Link to={'/'} className={style.backTo}>
                        <div className={style.vector}>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="#0A0A0A" />
                            </svg>
                        </div>
                        <p>Вернуться к статьям</p>
                    </Link>
                    <Counter id={post.id} likeCount={post.likeCount} dislikeCount={post.dislikeCount} reaction={post.reaction} />
                </div>
            </div>
            <div className={style.article}>
                <h1>{post.title}</h1>
                <img src="https://placehold.co/848x477"/>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostPage;