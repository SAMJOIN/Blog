import axios from "axios";
import { Post, Posts } from "../Types";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });

export const postAPI = {
    async getPosts() : Promise<Posts> {
        debugger;
        const response = await instance.get<Posts>(`posts`);
        return response.data;
    },
    async filterPosts(title : string) : Promise<Posts> {
        const response = await instance.get<Posts>(`posts?title=${title}`);
        return response.data;
    },
    async getPost(id: number) : Promise<Post> {
        const response = await instance.get<Post>(`posts/${id}`);
        return response.data;
    }
}