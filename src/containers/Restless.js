import React, { Component } from 'react';
import Header from '../components/restless/Header';
import Form from '../components/restless/Form';
import fetchApi from '../services/fectchApi';
import Display from '../components/restless/Display';

export default class Restless extends Component{
  state ={
    url: '',
    method: '',
    body: '',
    display: '',
    history: []
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
      .then(res => this.setState({ display: JSON.stringify(res, null, 4) }));
  }

  render(){
    const { url, method, body, display } = this.state;

    return (
      <>
        <Header/>
        <Form 
          url={url} 
          method={method} 
          body={body} 
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange} />
        <Display display={display} />
      </>
    );
  }
}
