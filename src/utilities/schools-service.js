import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:8080/api/v1/schools'


const setOptions = () => {
     return {headers: {
        // We are attaching the token to our Authorization header
        //  Prefacing with 'Bearer' is recommended in HTTP specification
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json'
    }}
}

export const getSchools = async () => {
    try {
        const response = await axios.get(BASE_URL, setOptions())
        // console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const createSchool = async schoolDetails => {
    try {
        const createdSchool = await axios.post(BASE_URL, schoolDetails, setOptions())
        return createdSchool
    } catch (e) {
        console.log(e)
    }
}

export const updateSchool = async newSchoolDetails => {
    try {
        // console.log(newMovieDetails)
        const updatedSchool = await axios.put(`${BASE_URL}/${newSchoolDetails._id}`, newSchoolDetails, setOptions())
        return updatedSchool
    } catch (e) {
        console.log(e)
    }
}

export const deleteSchool = async id => {
    try {
        const deletedSchool = await axios.delete(`${BASE_URL}/${id}`, setOptions())
        return deletedSchool
    } catch (e) {
        console.log(e)
    }
}