import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const getMemesData = createAsyncThunk("users/meme", async () => {
  const result = await fetch(`https://meme-api.com/gimme/10`);
  return result.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
    memesData: [],
    error: "",
    constdata: {},
  },
  reducers: {
    addUser: (state, action) => {
      console.log(state);
      state.users = [...state.users, action.payload];
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getMemesData.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getMemesData.fulfilled, (state, action) => {
        state.loading = false;
        state.memesData = [...state?.memesData, ...action.payload.memes];
      })
      .addCase(getMemesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export synchronous actions
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
