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

  async getUsers(keyword){

    try {

      const request = new Request(this.url + `?q=${keyword}`, {
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