import React, { Component, PropTypes } from 'react'

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      specification: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSpecificationChange = this.handleSpecificationChange.bind(this)
  }

  render() {
    return (
      <div className="form-general-info">
        <h3>General Information</h3>
        <form>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} />
          <br />
          <textarea name="description" placeholder="Description" onChange={this.handleDescriptionChange} />
          <br />
          <textarea name="specification" placeholder="Specification" onChange={this.handleSpecificationChange} />
        </form>
      </div>
    )
  }

  handleTitleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSpecificationChange(event) {
    this.setState({
      specification: event.target.value
    })
  }
}

export default GeneralInfoForm