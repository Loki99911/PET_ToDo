import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/IUserRedux";
import { toast } from "react-toastify";
import {
  createUserAPI,
  logInUserAPI,
  logOutUserAPI,
  updateTokenAPI,
} from "../../service/API/Auth&UserAPI.js";

interface ErrorResponse {
  message: string;
}

interface Params {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async (params: Params, { rejectWithValue }) => {
    try {
      const response = await createUserAPI(params);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`);
        return rejectWithValue({ message: error.message });
      } else {
        return rejectWithValue({
          message: "Failed to create user. Please try again later.",
        });
      }
    }
  }
);

// export const getAllCharacters = createAsyncThunk<
//   Characters[],
//   Params,
//   { rejectValue: ErrorResponse }
// >("characters/getCharacters", async (params, { rejectWithValue }) => {
//   const { page, characters } = params;
//   let reqArr;

//   if (characters.length > 0) {
//     reqArr = characters.slice((page - 1) * 6, (page - 1) * 6 + 6);
//   } else {
//     reqArr = [1, 2, 3, 4, 5, 6].map((el) => 6 * (page - 1) + el);
//   }

//   try {
//     const data = await getAllCharactersAPI(reqArr);
//     return data as Characters[];
//   } catch (error) {
//     if (error instanceof Error) {
//       toast.error(`${error.message}`);
//       return rejectWithValue({ message: error.message });
//     } else {
//       return rejectWithValue({ message: "An error occurred" });
//     }
//   }
// });
