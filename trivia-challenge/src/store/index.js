import { configureStore } from "@reduxjs/toolkit";

import { questionsApi } from "./getQuestionsApi";
import questionsSlice from "./questionaireSlice";

export default configureStore({
  reducer: {
    questions: questionsSlice,
    [questionsApi.reducerPath]: questionsApi.reducer,
    // [questionsApi.reducerPath]: questionsApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});
