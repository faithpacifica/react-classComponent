import { Component } from 'react'
import SearchSection from './components/SearchSection'
import MainSection from './components/MainSection'
import { SEARCH } from './consts/index'
import { getPeoples } from './api/index'
import ResponseApi from './types/api'
import People from 'types/people'
import ErrorBoundary from './components/ErrorBoundary'

type State = {
  defaultValue: string
  isLoading: boolean
  response?: ResponseApi<People>
}

class App extends Component<object, State> {
  state: State = { defaultValue: '', isLoading: false }

  componentDidMount() {
    const defaultValue = localStorage.getItem(SEARCH) || ''
    this.setState({ defaultValue, isLoading: true })
    getPeoples(defaultValue).then((response) => this.setState({ response, isLoading: false }))
  }

  handleChange = async (value: string) => {
    localStorage.setItem(SEARCH, value)
    this.setState({ isLoading: true, response: undefined })
    const response = await getPeoples(value)
    this.setState({ response, isLoading: false })
  }

  render() {
    return (
      <ErrorBoundary className='container'>
        <div className='home'>
          <section className='section-search'>
            <div className='search-title'>Type name from the Star war</div>
            <br />
            <SearchSection
              isLoading={this.state.isLoading}
              defaultValue={this.state.defaultValue}
              onChange={this.handleChange}
            />
          </section>

          <hr />

          <MainSection isLoading={this.state.isLoading} data={this.state.response} />
        </div>
      </ErrorBoundary>
    )
  }
}
export default App
