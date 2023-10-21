import React, { Component } from 'react';
import axios from 'axios';
import './FontListcss.css';
const API_KEY = 'AIzaSyCtp_MK8H4zWBobZfnWILWrQZlUy6MpfUw';

class FontList extends Component {
    constructor(props){
        super(props);
        this.state={fonts: []};
    }
    async componentDidMount() {
        const res = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`);
        console.log(res)
        this.setState({fonts: res.data.items.slice(0, 10)});
      }

  render() {
    return (
        <div className="card">
        {this.state.fonts.map((font, index) => (
        <a href={`https://fonts.google.com/specimen/${font.family.replace(' ', '+')}`} className="card__item" key={index}>
        {font.family}
        </a>
        ))}
        </div>
    );
  }
}

export default FontList;
