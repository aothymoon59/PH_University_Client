import { baseApi } from "../../api/baseApi";

// academic semester api
const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all semester
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicSemesterApi;
