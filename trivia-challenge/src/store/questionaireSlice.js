import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    isStartScreenToShow: true,
  },
  reducers: {
    setIsStartScreenToShow: (state, action) => {
      state.isStartScreenToShow = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsStartScreenToShow } = questionsSlice.actions;

export const selectIsStartScreenToShow = (state) =>
  state.questions.isStartScreenToShow;

export default questionsSlice.reducer;
