import React from 'react';


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
    }
  }



handleNameChange = (event) => {
  console.log(event.target.value)
  this.setState({
    name: event.target.value
  })
}
handleDesChange = (event) => {
  console.log(event.target.value)
  this.setState({
    description: event.target.value
  })
}
handleSubmit = (event) => {
  event.preventDefault()
  this.props.addACow(this.state.name, this.state.description)
  this.setState({
    name: '',
    description: '',
  })
}

render() {
  return (
    <div>
      <h3>Add A Cow here</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Cow's Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Cow Says"
            value={this.state.description}
            onChange={this.handleDesChange}
          />
        </label>
        <button>Add: {this.state.name}</button>
      </form>
    </div>
  )
}


}
export default Add