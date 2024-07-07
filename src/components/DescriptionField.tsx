import { Component } from 'react'

type Props = {
  label: string
  children: string
}

export default class DescriptionField extends Component<Props> {
  render() {
    return (
      <div className='person-description'>
        <div className='label'>{this.props.label + ':'}</div>
        <div className='extra-info'>{this.props.children}</div>
        <hr /></div>
     
    )
  }
}
