import { api } from "./api";

export const tagsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTags: builder.query({
			query: () => "/tags?_sort=date&_order=desc",
			providesTags: () => [
				{
					type: "Tags",
				},
			],
		}),
		createTags: builder.mutation({
			query: (tagsInfo) => ({
				body: tagsInfo,
				url: "/tags",
				method: "POST",
			}),
			invalidatesTags: () => [
				{
					type: "Tags",
				},
			],
		}),
		deleteTags: builder.mutation({
			query: (id) => ({
				url: `/tags/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ({ id }) => [
				{
					type: "Tags",
					id,
				},
			],
		}),
	}),
});

export const {
	useGetTagsQuery,
	useCreateTagsMutation,
	useDeleteTagsMutation,
} = tagsApi;
