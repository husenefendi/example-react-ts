import IPost from "../types/iPost";
import api from "./api";

class PostServiceClass {
    baseUrl = "posts"

    getAll() {
        return api.get<Array<IPost>>(this.baseUrl)
    }

    getSinglle(id: number) {
        return api.get<IPost>(`${this.baseUrl}/${id}`)
    }
}

export default new PostServiceClass()