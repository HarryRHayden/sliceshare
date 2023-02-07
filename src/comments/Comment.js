import React from 'react';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar';
import styles from '../styles/Comment.module.css';

const Comment = (props) => {
    const {
        profile_id,
        profile_image,
        owner,
        updated_at,
        content
    } = props;


  return (
    <div>
        <hr />
        <Media>
            <Link 
                to={`/profiles/${profile_id}`}
                className="align-self-center"
            >
                <Avatar src={profile_image} />
            </Link>
            <Media.Body className={`align-self-center ${styles.Body}`}>
                <span className={styles.Owner}>{owner}</span>
                <span className={styles.Date}>{updated_at}</span>
                <p>{content}</p>
            </Media.Body>
        </Media>
    </div>
  )
}

export default Comment