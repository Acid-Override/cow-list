import React from 'react';


class EditCow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editCowId: this.props.editCowId || '',
      editCowName: this.props.editCowName || '',
      editCowDesc: this.props.editCowDesc || '',
    }
    console.log('editcow props: ', props)
  }

  componentDidMount = () => {
    console.log("[componentDidMount] App")

  }
  componentDidUpdate = () => {
    console.log("[componentDidUpdate] App")
  }
  componentWillUnmount = () => {
    console.log("[componentWillUnmount] App")
  }

  handleChangeNameEdit = (event) => {
    this.setState({
      editCowName: event.target.value
    })
  }
  handleChangeDescEdit = (event) => {
    this.setState({
      editCowDesc: event.target.value
    })
  }
  handleSubmitEdit = (event) => {
    this.props.editACow(this.state.id, this.state.name, this.state.description)
    this.setState({
      editCowId: '',
      editCowName: '',
      editCowDesc: '',
    })
  }


  render() {
    return (
      <div>
        <h3>Edit A Cow here</h3>
        <form onSubmit={this.handleSubmitEdit}>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Click on edit button to edit"
              value={this.state.editCowName}
              onChange={this.handleChangeNameEdit}
            />
            <input
              type="text"
              name="description"
              placeholder=""
              value={this.state.editCowDesc}
              onChange={this.handleChangeDescEdit}
            />
          </label>
          <button>Edit: </button>
        </form>
      </div>
    )
  }

}

export default EditCow;