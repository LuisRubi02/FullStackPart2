import axios from 'axios';
const baseUrl = 'http://localhost:3001/agenda'

const getAll = () => {
    
    return axios.get(baseUrl).then(response =>response.data)
    
}

const create = (newObject) =>{
    return axios.post(baseUrl, newObject)
}

const update = (id,newObject) =>{
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteP = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll:getAll,
    create:create,
    update:update,
    deleteP:deleteP
}