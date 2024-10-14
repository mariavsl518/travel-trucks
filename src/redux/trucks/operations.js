import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/'

export const fetchTrucks = createAsyncThunk('fetchAll',
    async(_, thunkAPI) => { 
    try {
        const resp = await axios.get('/campers');
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)