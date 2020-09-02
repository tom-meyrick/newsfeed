import React, { Component } from "react";
import axios from "../axiosConfig";
import { Link } from "react-router-dom";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      articles: [],
    };
  }
  componentDidMount() {
    axios.get("/articles").then(({ data }) => {
      this.setState({ loaded: true, articles: data.data });
    });
  }

  render() {
    let { articles, loaded } = this.state;
    return !loaded ? (
      <p>Loading...</p>
    ) : (
      <>
        <ul class="list-group">
          {articles.map((article) => (
            <li class="list-group-item" key={article.id}>
              <Link to={`/news/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Articles;
