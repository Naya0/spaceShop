import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "~/types/user.types";
import { BASE_API_URL } from "~/utils/constants";

interface Inputs {
  avatar: string;
  email: string;
  name: string;
  password: string;
}

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  formType: string;
  showForm: boolean;
  error: string | null;
}

export const createUser = createAsyncThunk<User, Inputs>(
  "user/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_API_URL}users/`, payload);
      return res.data;
    } catch (err: any) {
      console.error("Error creating user:", err);
      return thunkAPI.rejectWithValue("Ошибка при создании пользователя");
    }
  }
);

export const loginUser = createAsyncThunk<User, Inputs>(
  "user/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_API_URL}auth/login`, payload);
      const accessToken = res.data.access_token;

      const login = await axios.get(`${BASE_API_URL}auth/profile`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      localStorage.setItem("auth", JSON.stringify(login.data));

      return login.data;
    } catch (err: any) {
      console.error("Error login user:", err);
      return thunkAPI.rejectWithValue("Ошибка при входе");
    }
  }
);

const getUserData = (): User | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const authData = localStorage.getItem("auth");
    if (authData) {
      return JSON.parse(authData);
    }
  } catch (error) {
    console.error("Ошибка при чтении данных авторизации:", error);
  }
  return null;
};

const initialState: UserState = {
  isLoading: false,
  currentUser: typeof window !== "undefined" ? getUserData() : null,
  formType: "signup",
  showForm: false,
  error: null,
};

export const loadUserFromStorage = createAsyncThunk(
  "user/loadUserFromStorage",
  async (_, thunkAPI) => {
    try {
      if (typeof window === "undefined") {
        return null;
      }

      const authData = localStorage.getItem("auth");
      if (authData) {
        return JSON.parse(authData);
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue("Ошибка загрузки пользователя");
    }
  }
);
const addCurrentUser = (state: UserState, action: PayloadAction<User>) => {
  state.isLoading = false;
  state.currentUser = action.payload;
  state.error = null;
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("auth");
      state.currentUser = null;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(loadUserFromStorage.fulfilled, addCurrentUser);
  },
});
export const { logout, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
