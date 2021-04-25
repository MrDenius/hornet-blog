import "./Post.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function Post() {
	let { postId } = useParams();

	const Post = global.Posts.find((post) => post.id === postId);

	if (!Post) return <h1>Post not found</h1>;

	return (
		<div id="container">
			<h1 id="title">{Post.title}</h1>
			<p id="text">{Post.text}</p>
		</div>
	);
}

export default Post;
