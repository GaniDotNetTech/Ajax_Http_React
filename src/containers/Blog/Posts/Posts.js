import React, { Component } from "react";
import axios from "../../../axios";
import "./Posts.css";
import Post from "../../../components/Post/Post";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
//import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null,
    error: false
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(resposne => {
        const posts = resposne.data.slice(0, 4);
        const updatePost = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });

        this.setState({ posts: updatePost });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }
  selectedClickeHandler = id => {
    this.props.history.push({
      pathname: "/posts/" + id
    });
  };

  render() {
    let postsData = (
      <p style={{ textAlign: "centre" }}>Something went Error </p>
    );
    if (!this.state.error) {
      postsData = this.state.posts.map(res => {
        return (
          // <Link to={"/" + res.id} key={res.id}>
          <div>
            <Post
              title={res.title}
              Author={res.author}
              clickHandler={() => this.selectedClickeHandler(res.id)}
            />
          </div>
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{postsData}</section>
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
