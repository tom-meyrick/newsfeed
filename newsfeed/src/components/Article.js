import React, { Component } from "react";
import axios from "../axiosConfig";
import Comments from "./Comments";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: [],
      tags: [],
    };
  }
  componentDidMount() {
    const { id } = this.props;
    axios.get(`/articles/${id}`).then(({ data }) => {
      this.setState({ article: data.data, tags: data.data.tags });
    });
  }

  render() {
    const { article, tags } = this.state;
    const { id } = this.props;
    return (
      <>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <div class="d-flex justify-content-end">
          {tags.map((tag) => (
            <span class="badge badge-pill badge-primary m-1" key={tag.id}>
              {tag}
            </span>
          ))}
        </div>
        <Comments articleID={id} />
      </>
    );
  }
}

export default Article;
