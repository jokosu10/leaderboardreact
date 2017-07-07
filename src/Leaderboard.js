import React from 'react'
import Players from './Players.js'
import AddPlayer from './AddPlayer.js'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    const PLAYERS = [
      {id: 1, name: "Brendan Eich", score: 25},
      {id: 2, name: "Chris Lattner", score: 18},
      {id: 3, name: "Jose Valim", score: 30}
    ]
    this.state = {
      members: PLAYERS
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }
  onPlayerAdd(name) {
    let new_members = this.state.members
    new_members.push({id: new_members.length + 1, name: name, score:10})
    this.setState({
      members: new_members
    })
  }
  render() {
    const styles = {
      container: {
        padding: 60
      }
    }

    return (
      <div style={styles.container}>
        <h1>LeaderBoard</h1>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    )
  }
}

export default Leaderboard
