import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../axiosConfig";

class CreateComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      comment: "",
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.currentTarget.value });
  }

  handleComment(e) {
    this.setState({ comment: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    const { email, comment } = this.state;
    const { articleID } = this.props;
    axios
      .post(`/articles/${articleID}/comments`, {
        email: email,
        comment: comment,
      })
      .then(() => {
        this.setState({ email: "", comment: "" });
      });
  }

  render() {
    const { email, comment } = this.state;
    return (
      <>
        <h3>Add a comment</h3>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.handleEmail}
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment"
              onChange={this.handleComment}
              value={comment}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleClick}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default CreateComment;
