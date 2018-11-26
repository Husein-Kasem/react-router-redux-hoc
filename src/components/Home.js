import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import Preloader from "./Preloader"

import Pokeball from "../images/pokeball.png"

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 15)
      })
    })
  }

  render() {
    const { posts } = this.state
    let postList = null
    if (posts.length) {
      postList = posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              <Link to={"/posts/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    } else {
      postList = <Preloader />
    }

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home
