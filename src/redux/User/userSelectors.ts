import { RootState } from "../store";

export const getIsLoggedIn = (state: RootState) => state.userInfo.isLogin;

// export const currentCharacter = (state: RootState) =>
//   state.charactersInfo.currentCharacter;

// export const isLoadingCharacters = (state: RootState) =>
//   state.charactersInfo.isLoading;

// export const isLoadingCurrentCharacter = (state: RootState) =>
//   state.charactersInfo.isLoading;
