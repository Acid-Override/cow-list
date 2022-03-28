import React from 'react'

class Cow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      name: this.props.name,
      description: this.props.description,
    }
  }

  componentDidMount = () => {
    console.log("[componentDidMount] Cow")

  }
  componentDidUpdate = () => {
    console.log("[componentDidUpdate] Cow")
  }
  componentWillUnmount = () => {
    console.log("[componentWillUnmount] Cow")
  }
  // handleDelete = (event) => {
  //   event.preventDefault()
  //   console.log("COWS NAME TO DELETE",this.props.name)
  //   this.props.deleteACow(this.props.name)
  // }

  render() {
    return (
      // <tr onClick={() => this.setState({isVisible: !this.state.isVisible})}>
      <tr>
        <td><button onClick={() => this.props.deleteACow(this.props.id)}>Delete Cow</button>
        <button onClick={() => this.props.handleSubmitEdit(this.props.id, this.props.name, this.props.description)}>Edit</button>
        </td>

        {/* <td className="cow-name" onClick={() => this.setState({ isVisible: !this.state.isVisible })}>{this.props.name}</td>
        {this.state.isVisible && <td className="cow-description">{this.props.description}</td>} */}
        <td className="cow-name" onClick={() => this.props.showCow(this.props.name, this.props.description)}>{this.props.name}</td>
        {this.state.isVisible && <td className="cow-description">{this.props.description}</td>}


      </tr>
    )
  }

}
export default Cow;