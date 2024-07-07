import { Component } from 'react'
import ResponseApi from '../../types/api'
import People from '../../types/people'
import DescriptionField from './DescriptionField'
import Loading from './loader/Loading'
import style from '../index.css'

type Props = {
    data: ResponseApi<People> | undefined
    isLoading: boolean
}

class Results extends Component<Props> {
    render() {
        const { data, isLoading } = this.props

        return (
            <section className='results'>
                <div className='results__list'>
                    {isLoading && <Loading />}
                    {!data?.results.length && !isLoading ? (
                        <div>Sorry, I could not find anything</div>
                    ) : (
                        data?.results.map(
                            (people: {
                                name: string
                                url: string
                                gender: string
                                eye_color: string
                                hair_color: string
                            }) => (
                                <div className='personName' key={people.name + people.url}>
                                    <DescriptionField label='name'>{people.name}</DescriptionField>
                                    <DescriptionField label='gender'>{people.gender}</DescriptionField>
                                    <DescriptionField label='eye color'>{people.eye_color}</DescriptionField>
                                    <DescriptionField label='hair color'>{people.hair_color}</DescriptionField>
                                    <br />
                                </div>
                            ),
                        )
                    )}
                </div>
            </section>
        )
    }
}

export default Results
