import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface profileSliceState {
  isLogin: boolean
  userId: string
  coins: number
}

const initialState : profileSliceState = {
  isLogin: false,
  userId: '',
  coins: 0
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsLogin: (state, action : PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },

    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },

    setCoins: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    }
  }
});

export const { setIsLogin, setUserId, setCoins } =
  profileSlice.actions;

  export default profileSlice.reducer;

// export const { selectCount, selectStatus } = counterSlice.selectors;
