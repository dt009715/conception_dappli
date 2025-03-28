import axios from "axios";
import { HasId } from "./interfaces";

export class Sync<P extends HasId> {

    constructor(private readonly apiUrl: string) {}

    fetch(id: string) {
        return axios.get(`${this.apiUrl}/${id}`)
    }

    save(data: P) {
        const { id } = data
        if(id) {
            return axios.patch(`${this.apiUrl}/${id}`, data);
        } 
        return axios.post(this.apiUrl, data);
    }
}