import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
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
    this.setState({ selectedPost: id });
  };

  render() {
    let postsData = (
      <p style={{ textAlign: "centre" }}>Something went Error </p>
    );
    if (!this.state.error) {
      postsData = this.state.posts.map(res => {
        return (
          <Post
            key={res.id}
            title={res.title}
            Author={res.author}
            clickHandler={() => this.selectedClickeHandler(res.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{postsData}</section>
        <section>
          <FullPost id={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
