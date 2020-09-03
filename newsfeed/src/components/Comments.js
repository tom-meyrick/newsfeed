import React, { Component } from "react";
import axios from "../axiosConfig";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    const { articleID } = this.props;
    axios.get(`/articles/${articleID}/comments`).then(({ data }) => {
      this.setState({ comments: data.data });
      console.log(data.data);
    });
  }

  render() {
    const { comments } = this.state;
    return comments
      ? comments.map((comment) => (
          <div class="well" key={comment.id}>
            <h6>{comment.email}</h6>
            <p>{comment.comment}</p>
          </div>
        ))
      : null;
  }
}

export default Comments;
