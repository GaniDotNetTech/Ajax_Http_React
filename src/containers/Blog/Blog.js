import React, { Component, Suspense } from "react";
import Posts from "./Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
//import NewPost from "../Blog/NewPost/NewPost";
// using React suspense for lazy loading const LazyPosts = React.lazy(() => import("../Blog/NewPost/NewPost"));
import asyncComponent from "../../hoc/AsyncComponent";
//import FullPost from "../Blog/FullPost/FullPost";

//lazy loading using normal
const asyncPost = asyncComponent(() => {
  return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts"
                activeClassName="my-active"
                activeStyle={{
                  color: "#fa923f",
                  textDecoration: "underline"
                }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-posts",
                  search: "?quick-search=true"
                  //hash: "#submit"
                }}
              >
                Post
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/posts" component={Posts} />.
          {/* lazy loading using normal */}
          {this.state.auth ? (
            <Route path="/new-posts" component={asyncPost} />
          ) : null}
          {/*  using React suspense for lazy loading {this.state.auth ? (
            <Route
              path="/new-posts"
              render={() => {
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyPosts />
                </Suspense>;
              }}
            />
          ) : null} */}
          <Redirect from="/" to="/posts" />
        </Switch>
        {/* <Posts />  switch is used for switching the components based on route*/}
        {/* <section>
          <FullPost id={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
