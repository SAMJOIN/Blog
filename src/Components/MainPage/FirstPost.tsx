import style from './FirstPost.module.css'
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { Post as PostType } from '../../Types';

const FirstPost = (props: PostType) => {

    return (
        <div className={style.post}>
            <img className={style.img} src="https://placehold.co/1140x600" />
            <div className={style.content}>
                <div className={style.title}>
                    <h1>{props.title}</h1>
                    <Counter id={props.id} likeCount={props.likeCount} dislikeCount={props.dislikeCount} reaction={props.reaction} />
                </div>
                <p className={style.body}>{props.body}</p>
                <div className={style.footer}>
                    <Link to={`/${props.id}`} className={style.button}>Читать далее</Link>
                </div>
            </div>
        </div>
    );
}

export default FirstPost;