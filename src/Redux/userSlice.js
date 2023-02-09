import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: "yusuf",
    skin: "ebony",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        changeName: (state, action) =>{
            state.name = action.payload
        },

        changeSkin: (state, action) =>{
            state.skin = "blacky"
        }
    }
})

export default userSlice.reducer
export const {changeName, changeSkin} = userSlice.actions