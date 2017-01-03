import React, { Component, PropTypes } from 'react'

class GeneralInfoForm extends Component {
  render() {
    return (
      <div className="form-general-info">
        <h3>General Information</h3>
        <form>
          <input type="text" name="title" placeholder="Title" />
          <br />
          <textarea name="description" placeholder="Description" />
          <br />
          <textarea name="specification" placeholder="Specification" />
        </form>
      </div>
    )
  }
}

export default GeneralInfoForm