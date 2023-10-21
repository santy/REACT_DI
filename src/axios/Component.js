import React, { Component } from 'react';
const API_KEY = 'AIzaSyCtp_MK8H4zWBobZfnWILWrQZlUy6MpfUw';

class Component extends Component {
    constructor(props){
        super(props);
        this.state={items: []};
    }
    async componentDidMount() {
        const res = await axios.get('https://mydomain.com/api');
        this.setState({items: res.data.items});
    }

  render() {
    return (
        <ul>
            {this.state.items.map((item, index) => (
            <li key={index}>{item.title}</li>))}
        </ul>
    );
  }
}

export default Component;

