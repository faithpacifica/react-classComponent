import { Component, FormEvent } from 'react'

type Props = {
  defaultValue: string
  isLoading: boolean
  onChange: (value: string) => Promise<void>
}

class SearchSection extends Component<Props> {
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    this.props.onChange(e.currentTarget.search.value)
  }

  render() {
    const { isLoading, defaultValue } = this.props
    return (
      <form className='' onSubmit={this.handleSubmit}>
        <input disabled={isLoading} name='search' defaultValue={defaultValue} />
        <button disabled={isLoading} type='submit'>
          Search
        </button>
      </form>
    )
  }
}

export default SearchSection
