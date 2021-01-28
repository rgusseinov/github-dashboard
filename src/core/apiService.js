class ApiService {
  constructor(baseUrl){
    this.url = baseUrl
  }

/*   async createPost(post){
    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(post)
      })
      const response = await fetch(request)
      return await response.json()
    } catch (error){
      console.error(error)
    }
  } */

  async getUsers({q, page}){

    // https://api.github.com/search/users?q=rus&per_page=5&page=2
    
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

  removePost() {

  }

}
export const apiService = new ApiService(`https://api.github.com/search/users`)