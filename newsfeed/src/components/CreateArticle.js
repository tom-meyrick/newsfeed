import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "../axiosConfig";

class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      article: "",
      tags: "",
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.handleArticle = this.handleArticle.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleArticle(e) {
    this.setState({ article: e.currentTarget.value });
  }

  handleTags(e) {
    this.setState({ tags: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    let { title, article, tags } = this.state;
    axios
      .post("/articles", {
        title: title,
        content: article,
        tags: tags.split(", "),
      })
      .then(() => {
        console.log("Hello");
        this.setState({ title: "", article: "", tags: "" });
      });
  }

  render() {
    const { title, article, tags } = this.state;
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={this.handleTitle}
            value={title}
          />
        </Form.Group>
        <Form.Group controlId="formArticle">
          <Form.Label>Article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Article"
            onChange={this.handleArticle}
            value={article}
          />
        </Form.Group>
        <Form.Group controlId="formTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tags"
            onChange={this.handleTags}
            value={tags}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleClick}>
          Submit
        </Button>
      </Form>
    );
  }
}

//onSubmit on form rather than button

export default CreateArticle;
