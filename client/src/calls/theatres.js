import {axiosInstance} from '../axiosInstance';

const addTheatre = async (theatre) => {
    try {
        const response = await axiosInstance.post('/add-theatre', theatre);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getAllTheatres = async () => {
    try {
        const response = await axiosInstance.get('/get-all-theatres');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}   


const updateTheatre = async (id, values) => {
    try {
        const response = await axiosInstance.put('/update-theatre', {id, values});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


const deleteTheatre = async (id) => {
    try {
        const response = await axiosInstance.delete('/delete-theatre', {id});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {addTheatre, getAllTheatres, updateTheatre, deleteTheatre}