import React, { Component } from 'react';
import Navigasi from '../components/navbar';
import axios from 'axios';

export default class CoursesSingular extends Component {
  state = {
    data: [],
    Loader: false
  };

  componentDidMount = () => {
    console.log(this.props.store);
    axios
      .get(
        `https://abuadzhan.tk/wp-json/wp/v2/posts/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({ data: response.data, Loader: true });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Navigasi />
        {this.state.Loader ? (
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.data.content.rendered
            }}
          />
        ) : (
          <h1> Loading . . . </h1>
        )}
      </div>
    );
  }
}
