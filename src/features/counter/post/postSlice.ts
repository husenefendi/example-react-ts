import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import PostServiceClass from "../../../services/postService";
import IPost from "../../../types/iPost";

const name = 'post'
export interface PostState {
    data: IPost[],
    status: 'idle' | 'loading' | 'failed';
}

const initialState: PostState = {
    data: [],
    status: 'idle'
}

export const getAllPost = createAsyncThunk(`${name}/fetchPost`, async () => {
    const response = await PostServiceClass.getAll()
    return response.data
})

export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        updateStatus: (state, action: PayloadAction<'idle'>) => {
            state.status = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPost.pending, (state) => {
            state.status = 'loading'
        }).addCase(getAllPost.fulfilled, (state, action) => {
            state.status = 'idle'
            state.data = action.payload
        })
    }
})

export const { updateStatus } = postSlice.actions

export const selectPost = (state: RootState) => state.post

export default postSlice.reducer