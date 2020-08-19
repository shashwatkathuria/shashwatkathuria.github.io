import React from 'react';
import { MediumIcon1 } from '../common/icons.jsx';

export default class BlogCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let className = 'straight';
    if (this.props.index % 2 === 1) {
      className = 'reverse';
    }

    return (
        <a href={this.props.data.blogUrl} class={`blog-card blog-card-${className}`} title='Click to read on Medium'>
          <div class={`blog-text blog-text-${className}`}>
            <h1 class='blog-title'>
              {this.props.data.title}
              <br/>
              <span class='blog-metadata'>
                Click to read on Medium <MediumIcon1 className='blog-icon'/>
              </span>
            </h1>
            <div class='blog-vertical-line'/>
            <p class='blog-description'>{this.props.data.description}</p>
          </div>
          <img class='blog-image' src={this.props.data.imageUrl}/>
        </a>
    );
  }
}
