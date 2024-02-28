import style from './Post.module.css'
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import { Post as PostType } from '../../Types';

const Post = (props: PostType) => {
    return (
        <div className={style.post}>
            <img className={style.img} src="https://placehold.co/558x273" />
            <div className={style.content}>
                <h1>{props.title}</h1>
                <div className={style.reactions}>
                    <Counter id={props.id} likeCount={props.likeCount} dislikeCount={props.dislikeCount} reaction={props.reaction} />
                    <Link to={`/${props.id}`} className={style.button}>Читать далее</Link>
                </div>
            </div>
        </div>
    )
}

export default Post;