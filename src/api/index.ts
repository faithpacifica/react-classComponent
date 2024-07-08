import ResponseApi from '../types/api'
import People from '../types/people'

export async function getPeoples(search: string = ''): Promise<ResponseApi<People>> {
  try {
    const url = search
      ? `https://swapi.dev/api/people/?search=${search}&page=1`
      : `https://swapi.dev/api/people/`
    const result = await fetch(url)
    if (!result.ok) {
      throw new Error()
    }
    return result.json()
  } catch {
    throw new Error('Oops, something went wrong')
  }
}
