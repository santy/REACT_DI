import React, { Component } from 'react';
import FontListII from './FontListII';
import FontListUseEffectII from './FontListUseEffectII';
import FontUseEffect from './FontUseEffect';
import './FontListcss.css';

class Font extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'popularity'
    };
  }

  handleClick = sort => {
    this.setState({ sort });
  };

  render() {
    return (
      <div className='container'>
        <div>
          <button className='card__button' onClick={() => {
              this.handleClick('popularity');
            }}
          >
            Popularity
          </button>
          <button className='card__button' onClick={() => {
              this.handleClick('trending');
            }}
          >
            Trending
          </button>
        </div>
        <FontListUseEffectII sort={this.state.sort} />
      </div>
    );
  }
}

export default Font;