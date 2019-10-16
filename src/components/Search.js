import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';
import { Input } from 'semantic-ui-react';

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
            .then(({ data }) => {
                // console.log(data)
                this.setState({
                    results: data
                })
            })
    };

    handleInputChange = () => {
        console.log(this.search.inputRef.current.value)
        this.setState({
            query: this.search.inputRef.current.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo();
                }
            } else if (!this.state.query) {

            }
        });
    }

    render() {
        return (
                <form>
                    <Input
                        placeholder="Buscar tweet..."
                        icon="search"
                        ref={input => this.search = input}
                        onChange={this.handleInputChange}
                    />
                    <p>Resultados: {this.state.results.length}</p>
                    <Suggestions results={this.state.results} query={this.state.query} />
                </form>

        );
    }
}