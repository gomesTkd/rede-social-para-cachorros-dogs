import React from 'react';
import {ReactComponent as Enviar} from "../../Assets/enviar.svg";
import useFetch from "../../Hooks/useFetch";
import {COMMENT_POST} from "../../api";
import Error from "../Helper/Error";
import styles from "./styles/PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const [comment, setComment] = React.useState("");
    const { request, error } = useFetch();

    function handleComment({ target }) {
        return setComment(target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const {url, options} = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComments((comments) => {
                setComment("");
                return [...comments, json];
            })
        }
    }
    return (
        <form className={`${styles.form} ${(single) ? styles.single : ""}`} onSubmit={handleSubmit}>
            <textarea
                className={styles.textarea}
                id={"comment"}
                name={"comment"}
                value={comment}
                onChange={handleComment}
            />
            <button className={styles.button}>
                <Enviar />
            </button>
            <Error error={error} />
        </form>
    );
};

export default PhotoCommentsForm;
