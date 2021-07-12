import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com/api.php" }),
  endpoints: (builder) => ({
    getQuestionsByParams: builder.query({
      query: ({ difficultyValue, amountValue }) =>
        `?amount=${amountValue}&difficulty=${difficultyValue}&type=boolean`,
    }),
  }),
});

export const { useGetQuestionsByParamsQuery } = questionsApi;
