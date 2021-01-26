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

  async getPosts(keyword){

    try {
      const request = new Request(this.url + `${keyword}/repos`, {
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
export const apiService = new ApiService(`https://api.github.com/users/`)