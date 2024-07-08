import { Component } from 'react'

type State = {
  isError: boolean
}

export default class ErrorShowingButton extends Component<object, State> {
  state = { isError: false }
  handleBreak = () => {
    this.setState({ isError: true })
  }

  componentDidUpdate() {
    console.log(this.state.isError)
    if (this.state.isError) {
      throw new Error('')
    }
  }

  render() {
    return <button onClick={this.handleBreak}>Push me to break the site</button>
  }
}
