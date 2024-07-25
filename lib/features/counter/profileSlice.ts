import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface profileState {
  userId: string
  coins: number
}

const initialState : profileState = {
  userId: "",
  coins: 0
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {

    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },

    setCoins: (state, action: PayloadAction<number>) => {
      state.coins += action.payload
    }
  }
});

export const { setUserId, setCoins } =
  profileSlice.actions;

  export default profileSlice.reducer;

// export const { selectCount, selectStatus } = counterSlice.selectors;
