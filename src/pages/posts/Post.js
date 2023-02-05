import React from 'react'
import styles from "../../styles/PostPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import { Link } from 'react-router-dom';
import Avatar from "../../components/Avatar";
import appStyles from "../../App.module.css";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={60}/>
            {owner}
          </Link>
          <div className='d-flex align-items-center'>
            <span>
              {updated_at}
            </span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className={appStyles.Content}>{title}</Card.Title>}
        {content && <Card.Text >{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger placement='top' overlay ={<Tooltip>You can't like your own post!!</Tooltip>}>
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          ): like_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-thumbs-up ${styles.ThumbUp}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-thumbs-up ${styles.ThumbOutline}`} />
            </span>
          ) : (
            <OverlayTrigger placement='top' overlay={<Tooltip>You must be logged in to like a post!</Tooltip>}>
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className={`fas fa-comments ${styles.ThumbUp}`} />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Post