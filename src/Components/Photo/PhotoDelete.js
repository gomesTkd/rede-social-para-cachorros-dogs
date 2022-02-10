import React from 'react';
import styles from "./styles/PhotoDelete.module.css";
import {PHOTO_DELETE} from "../../api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
    const {loading, request} = useFetch();

    async function handleClick() {
        const confirm = window.confirm("Tens certezas que desejas deletar?");
        if (confirm) {
            const {url, options} = PHOTO_DELETE(id);
            const {response} = await request(url, options);

            if (response.ok) window.location.reload();
        }
    }

    return (
        <>
            {(loading) ? (
                <button className={styles.delete} disabled >Carregando...</button>
            ) : (
                <button onClick={handleClick} className={styles.delete}>Deletar</button>
            )}
        </>
    );
};

export default PhotoDelete;
