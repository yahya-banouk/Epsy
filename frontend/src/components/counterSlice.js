import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    login: (state = {
        username: "",
        password: "",
      }, action) => {
       const user = action.payload['payload'];
       state = {...state, username:user.username, password:user.password};
    },
  },
});

export const { login } = counterSlice.actions;
export default counterSlice.reducer;