import { createAsyncThunk } from "@reduxjs/toolkit";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkApi) => {
//     try {
//       const resp = await axios.post("/users/login", userData);
//       setAuthHeader(resp.data.token);
//       return resp.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
