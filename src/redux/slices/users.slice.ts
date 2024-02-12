import { Profile } from '@/type/Profile.type';
import { createSlice } from '@reduxjs/toolkit';

type UsersStore = {
  profile: Profile | null;
};

const initialState: UsersStore = {
  profile: null,
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setProfile: (state, action: { type: string; payload: Profile | null }) => {
      state.profile = action.payload;
    },
  },
});

export const usersReducer = UsersSlice.reducer;
export const { setProfile } = UsersSlice.actions;
