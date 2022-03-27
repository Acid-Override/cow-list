import React from 'react'
import axios from 'axios'
import CowList from './CowList.jsx'
import Add from './Add.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cows: [],
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
    const cow = {name: name, description: description}
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

  deleteACow = (name) => {
    const cow = {name: name}
    console.log("DELETE A COW",cow)
    axios.post('api/cows/delete', cow)
    .then(response => {
      this.getAllCows()
    })
    .catch(err => {
      console.log("[deleteACow] ERROR: ", err)
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




  render() {
    return (
      <>
        <h1>Cow List</h1>
        <Add addACow={this.addACow}/>
        <table>
          <CowList cows={this.state.cows} deleteACow={this.deleteACow}/>
        </table>


      </>

    )
  }


}
export default App