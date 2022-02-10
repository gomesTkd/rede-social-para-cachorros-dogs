import React from 'react';
import styles from "./styles/FeedPhotoItem.module.css"
import Image from "../Helper/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title} />
            <span className={styles.visualizacoes}>{photo.acessos}</span>
        </li>
    );
};

export default FeedPhotosItem;
