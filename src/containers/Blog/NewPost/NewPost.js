import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";
import { Redirect } from "react-router-dom";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };
  componentDidMount() {
    // for getting the search value set into router to
    // const query = new URLSearchParams(this.props.location.search);
    // let search = [];
    // for (let param of query.entries()) {
    //   search = param;
    // }
    // console.log(search.join(" "));
    console.log(this.props);
  }
  postDataHandler = () => {
    const posts = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };
    axios.post("/posts/", posts).then(res => {
      this.props.history.replace("/posts");
      console.log(res.data);
      //this.setState({ submitted: true });
    });
  };
  render() {
    // let reDirect = this.state.submitted ? <Redirect to="/posts" /> : null;

    return (
      <div className="NewPost">
        {/* {reDirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
