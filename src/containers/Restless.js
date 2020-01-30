import React, { Component } from 'react';
import Header from '../components/restless/Header';
import Form from '../components/restless/Form';
import fetchApi from '../services/fectchApi';
import Display from '../components/restless/Display';
import HistoryList from '../components/restless/HistoryList';

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
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body
      }]
    }));
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
          <HistoryList history={history}/>
        </section>
        <Display display={display} />
      </>
    );
  }
}
