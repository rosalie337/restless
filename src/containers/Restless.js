import React, { Component } from 'react';
import Header from '../components/restless/Header';
import Form from '../components/restless/Form';
import { fetchApi } from '../services/fetchApi';
import Display from '../components/restless/Display';

export default class Restless extends Component{
  state ={
    url: '',
    method: '',
    body: '',
    display: { 'Hello':'Please make a fetch!' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetch();
  }

  handleClick = event => {
    const { id } = event.target;
    this.setState(({ history }) => {
      return {
        url: history[id].url,
        method: history[id].method,
        body: history[id].body
      };});
  }

  fetch = () => {
    const { url, method, body } = this.state;
    return fetchApi(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render(){
    const { url, method, body, display } = this.state;

    return (
      <>
        <Header/>
        <section>
          <Form 
            url={url} 
            method={method} 
            body={body} 
            onSubmit={this.handleSubmit} 
            onChange={this.handleChange} />
        </section>
        <Display display={display} />
      </>
    );
  }
}
