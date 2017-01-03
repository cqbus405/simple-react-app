import React, { Component, PropTypes } from 'react'
import { setState, getState } from '../../utils/util-product'

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props)

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
    const name = event.target.value
    const state = getState('cp')
    if (state) {
      state[name] = name
    } else {
      setState('cp', {
        name
      })
    }
  }

  handleDescriptionChange(event) {
    const description = event.target.value
    const state = getState('cp')
    if (state) {
      state[description] = description
    } else {
      setState('cp', {
        description
      })
    }
  }

  handleSpecificationChange(event) {
    const specification = event.target.value
    const state = getState('cp')
    if (state) {
      state[specification] = specification
    } else {
      setState('cp', {
        specification
      })
    }
  }
}

export default GeneralInfoForm