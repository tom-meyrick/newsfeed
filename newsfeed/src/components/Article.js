import React, { Component } from "react";
import axios from "../axiosConfig";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      tags: [],
    };
  }
  componentDidMount() {
    let { id } = this.props;
    axios.get(`/articles/${id}`).then(({ data }) => {
      this.setState({ article: data.data, tags: data.data.tags });
    });
  }

  render() {
    const { article, tags } = this.state;
    console.log(article);
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <div class="d-flex justify-content-end">
          {tags.map((tag) => (
            <span class="btn btn-primary" key={tag.id}>
              {tag}
            </span>
          ))}
        </div>
      </>
    );
  }
}

export default Articles;
