class ApiService {
  constructor(baseUrl){
    this.url = baseUrl
  }

  async getTopRepos(){

    try {
      const url = `https://api.github.com/search/repositories?q=a&sort=stars&per_page=10`
      const request = new Request(url, {
        method: 'get'
      })
      const response = await fetch(request)
      return await response.json()
    } catch (error){
      console.error(error)
    }

  }


  async getUsers({q, page}){

    let params = ''
    if (page){
      params = `&page=${page}`
    }

    try {

      const request = new Request(this.url + `?q=${q}${params}`, {
        method: 'get'
      })
      const response = await fetch(request)
      return await response.json()
    } catch (error){
      console.error(error)
    }

  }

  async getUser(q){
    try {
      const request = new Request(`https://api.github.com/users/${q}`, {
        method: 'get'
      })
      const response = await fetch(request)
      return await response.json()

    } catch (error){
      console.error(error)
    }
  }


}
export const apiService = new ApiService(`https://api.github.com/search/users`)