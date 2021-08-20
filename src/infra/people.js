import Request from '@/infra/request.js'

const getRandomPeople = async (howMany, fields) => {
  try {
    const response = await Request.getRequest(howMany, fields)
    return response.data.results
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default {
  getRandomPeople
}