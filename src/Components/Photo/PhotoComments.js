import React from 'react';
import {UserContext} from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./styles/PhotoComments.module.css";

const PhotoComments = (props) => {
    const { login } = React.useContext(UserContext);
    const [comments, setComments] = React.useState(() => {
        return props.comments;
    });
    const commentSection = React.useRef(null);

    React.useEffect(() => {
        commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }, [comments])

    return (
        <>
            <ul ref={commentSection} className={`${styles.comments} ${(props.single) ? styles.single : ""}`}>
                {comments.map((comment) => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {login && <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments} />}
        </>
    );
};

export default PhotoComments;
