import React, { Component } from 'react';
import Header from '../components/restless/Header';
import Form from '../components/restless/Form';
import { fetchApi } from '../services/fetchApi';
import Display from '../components/restless/Display';
import HistoryList from '../components/restless/HistoryList';
import styles from './Restless.css';

export default class Restless extends Component{
  state ={
    url: '',
    method: '',
    body: '',
    history: [],
    display: { 'Hello':'Please make a fetch!' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    const { history, url, method } = this.state;
    const key = `${url}+${method}`;
    
    event.preventDefault();
    this.fetch();
    
    if(history.filter(item => item.key === key).length > 0 || method === '') return;
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body,
        key: `${state.url}+${state.method}`
      }]
    }));
    
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
    const { url, method, body, display, history } = this.state;

    return (
      <>
        <Header/>
        <section className={styles.Restless}>
          <HistoryList history={history} onClick={this.handleClick} />
          <div>
            <Form 
              url={url} 
              method={method} 
              body={body} 
              onSubmit={this.handleSubmit} 
              onChange={this.handleChange} />
            <Display display={display} />
          </div>
        </section>
        
      </>
    );
  }
}
