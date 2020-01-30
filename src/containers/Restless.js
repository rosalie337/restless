import React, { Component } from 'react';
import Header from '../components/restless/Header';
import Form from '../components/restless/Form';
import fetchApi from '../services/fectchApi';

export default class Restless extends Component{
  state ={
    url: '',
    method: '',
    body: '',
    display: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetch();
  }

  fetch = () => {
    const { url, method, body } = this.state;
    fetchApi(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render(){
    const { url, method, body } = this.state;

    return (
      <>
        <Header/>
        <Form 
          url={url} 
          method={method} 
          body={body} 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange} />
      </>
    );
  }
}
