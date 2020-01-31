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
    display: { 'Hello':'I am bored. PLEASE make a fetch!' }
  }

  componentDidMount(){
    const historyStored = JSON.parse(localStorage.getItem('history'));
    
    if(historyStored){
      this.setState({ history: historyStored });
    }
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

    this.setState(state => {
      localStorage.setItem('history', JSON.stringify(state.history));
    });
  }

  handleClick = event => {
    const { id } = event.target;
    let result;

    this.state.history.forEach(item => {
      if(item.key === id){
        result = item;
      }
    });

    this.setState({
      url: result.url,
      method: result.method,
      body: result.body
    });
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
