import React, { Component, PropTypes } from 'react'

class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="description-container">
          <p className="description-title">Description</p>
          <p className="description-content">CSS on its own can be fun, but stylesheets are getting larger, 
          more complex, and harder to maintain. This is where a preprocessor can help. 
          Sass lets you use features that don't exist in CSS yet like variables, nesting, 
          mixins, inheritance and other nifty goodies that make writing CSS fun again.<br /><br />
          Once you start tinkering with Sass, it will take your preprocessed Sass file and 
          save it as a normal CSS file that you can use in your web site.</p>
        </div>
        <div className="description-container">
          <p className="description-title">Video Url</p>
          <p className="description-content">https://videos.localhost.com/1</p>
        </div>
      </div>
    )
  }
}

export default Description