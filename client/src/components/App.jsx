import React from 'react'
import axios from 'axios'
import CowList from './CowList.jsx'
import Add from './Add.jsx'
import ShowCow from './ShowCow.jsx'
import EditCow from './EditCow.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows: [],
      showcow: '',
      description: '',
      editCowId: '',
      editCowName: '',
      editCowDesc: '',
    }
  }

  getAllCows = () => {
    axios.get('/api/cows')
      .then(response => {
        console.log("[getAllCows] REsponse: ", response.data)
        const cows = response.data
        console.log("cows: ", cows)
        const allCows = cows.map((cow) => {
          return {
            id: cow._id,
            name: cow.name,
            description: cow.description,
          }
        })
        this.setState({
          cows: allCows
        })

      })
      .catch(err => {
        console.log("[getAllCows] ERROR: ", err)
      })
  }

  addACow = (name, description) => {
    const cow = { name: name, description: description }
    console.log("COW SAYS ", cow)
    axios.post('/api/cows', cow)
      .then(response => {
        console.log(response)
        this.getAllCows()
      })
      .catch(err => {
        console.log("addACow ERROR", err)
      })
  }

  deleteACow = (id) => {
    const cow = { id: id }

    console.log("DELETE A COW", cow)
    axios.delete(`api/cows/${id}`, { data: { id: id } })
      .then(response => {
        this.getAllCows()
      })
      .catch(err => {
        console.log("[deleteACow] ERROR: ", err)
      })
  }
  editACow = (id, name, description) => {
    console.log('editACow', id, name, description)
    axios.put(`api/cows/${this.state.editCowId}`, {data: {name: this.state.editCowName, description: this.state.editCowDesc}})
    .then(response => {
      this.getAllCows()
    })
    .catch(err => {
      console.log(err)
    })

  }

  componentDidMount = () => {
    console.log("[componentDidMount] App")
    this.getAllCows()
  }
  componentDidUpdate = () => {
    console.log("[componentDidUpdate] App")
  }
  componentWillUnmount = () => {
    console.log("[componentWillUnmount] App")
  }

  showCow = (name, desc) => {
    console.log('showCow', name, desc)
    this.setState({
      showcow: name,
      description: desc
    })
  }
  handleSubmitEditAxios = (id, name, desc) => {
    console.log('handleSumbitEdit; ', id, name, desc)
    // this.setState({
    //   editCowId: id,
    //   editCowName: name,
    //   editCowDesc: desc,
    // })
    this.editACow()
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

  handleSubmitEdit = (id, name, desc) => {

    this.setState({
      editCowId: id,
      editCowName: name,
      editCowDesc: desc,
    })
  }

  render() {
    return (
      <>
        <h1>Cow List</h1>
        <ShowCow showcow={this.state.showcow} description={this.state.description} />
        <Add addACow={this.addACow} />
        <h3>Edit A Cow here</h3>
        <form onSubmit={this.handleSubmitEditAxios}>
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

        {/* <EditCow
          editACow={this.editACow}
          editCowId={this.state.editCowId}
          editCowName={this.state.editCowName}
          editCowDesc={this.state.editCowDesc}
        /> */}
        <table>
          <CowList
            cows={this.state.cows}
            deleteACow={this.deleteACow}
            showCow={this.showCow}
            handleSubmitEdit={this.handleSubmitEdit}
          />
        </table>
      </>

    )
  }


}
export default App