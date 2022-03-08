import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllPost,
  selectPost,
  updateStatus,
} from "../../features/counter/post/postSlice";

const About = (): React.ReactElement => {
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
      <button onClick={() => dispatch(updateStatus("loading"))}>
        status to Loading
      </button>
      <pre>{JSON.stringify(postState.status, null, 2)}</pre>
      <pre>{JSON.stringify(postState.data, null, 2)}</pre>
    </div>
  );
};
export default About;
