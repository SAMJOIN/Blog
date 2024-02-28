import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

export const postAPI = {
    async getPosts() {
        debugger;
        const response = await instance.get(`posts`);
        return response.data;
    },
    async filterPosts(title : string) {
        const response = await instance.get(`posts?title=${title}`);
        return response.data;
    },
    async getPost(id: number) {
        const response = await instance.get(`posts/${id}`);
        return response.data;
    }
}