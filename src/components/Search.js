import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';

const API_URL = 'http://resistam.net:3001/tweets';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: []
        };
    }

    getInfo = () => {
        axios.get(`${API_URL}?content=ilike.*${this.state.query}*&order=time.desc`)
            .then(({data}) => {
                // console.log(data)
                this.setState({
                    results: data
                })
            })
    };
    
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {

            }
        });
    }
    
    render() {
        return(
            <form>
                <input 
                    placeholder="Buscar tweet..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>Resultados: {this.state.results.length}</p>
                <Suggestions results={this.state.results} /> 
            </form>
        );
    }
}