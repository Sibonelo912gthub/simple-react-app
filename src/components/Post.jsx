// const names = ["Max", "Sibonelo"];
import classes from "./Post.module.css";

const Post = ({ author, body }) => {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  //   names[Math.floor(names.length * Math.random())];
  return (
    <div className={classes.post}>
      <li>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </div>
  );
};

export default Post;
