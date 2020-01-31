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
    display: { 'Hello':'Please make a fetch!' },
    history: []
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
    console.log(id);
    this.setState(({ history }) => {
      return {
        url: history[id].url,
        method: history[id].method,
        body: history[id].body
      };});
  }

  fetch = () => {
    const { url, method, body } = this.state;
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body
      }]
    }));
    return fetchApi(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render(){
    const { url, method, body, display, history } = this.state;

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
