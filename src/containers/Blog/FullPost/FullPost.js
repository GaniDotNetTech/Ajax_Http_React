import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPostData: null
  };
  componentDidMount() {
    this.loaddata();
  }
  componentDidUpdate() {
    this.loaddata();
  }
  loaddata() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPostData ||
        (this.state.loadedPostData &&
          this.state.loadedPostData.id !== +this.props.match.params.id)
      ) {
        axios.get("/posts/" + this.props.match.params.id).then(resposne => {
          this.setState({ loadedPostData: resposne.data });
        });
      }
    }
  }
  deleteClickHandler = () => {
    axios.delete("/posts/" + this.props.match.params.id).then(resposne => {
      console.log(resposne.data);
    });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPostData) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPostData.title}</h1>
          <p>{this.state.loadedPostData.body}</p>
          <div className="Edit">
            <button onClick={this.deleteClickHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
