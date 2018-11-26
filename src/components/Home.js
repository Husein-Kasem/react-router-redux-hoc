import React, { Component } from "react";
import axios from "axios";

import Preloader from "./Preloader";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 15)
      });
    });
  }

  render() {
    const { posts } = this.state;
    let postList = null;
    if (posts.length) {
      postList = posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      });
    } else {
      postList = <Preloader />;
    }

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
