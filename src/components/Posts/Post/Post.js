import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core/";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, heartPost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color={post.likeCount === 1 ? "secondary" : "default"}
          onClick={() => dispatch(heartPost(post._id))}
        >
          <FavoriteIcon fontSize="small" />
          &nbsp; Like &nbsp; {post.likeCount}{" "}
        </Button>
        <Button
          size="small"
          color="inherit"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteSweepIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
