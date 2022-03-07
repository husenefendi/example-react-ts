import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPost, selectPost } from "../../features/counter/post/postSlice";

const About = () => {
  const dispatch = useDispatch();
  const postState = useSelector(selectPost);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  useEffect(() => {
    console.log({ postState });
  }, [postState]);
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">to Home</Link>
      <pre>{JSON.stringify(postState.data, null, 2)}</pre>
    </div>
  );
};
export default About;
