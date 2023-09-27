import {
	createApi,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	tagTypes: ["Post", "Tags"],
	endpoints: (builder) => ({
		getAllPosts: builder.query({
			query: () => "/posts?_sort=id&_order=desc",
			providesTags: () => [
				{
					type: "Post",
				},
			],
		}),
		getOnePost: builder.query({
			query: (id) => ({ url: `/posts/${id}` }),
			providesTags: () => [
				{
					type: "Post",
				},
			],
		}),
		createPost: builder.mutation({
			query: (postInfo) => ({
				body: postInfo,
				url: "/posts",
				method: "POST",
			}),
			invalidatesTags: () => [
				{
					type: "Post",
				},
			],
		}),
		updatePost: builder.mutation({
			query: ({ id, postInfo }) => ({
				body: postInfo,
				url: `/posts/${id}`,
				method: "PATCH",
			}),
			invalidatesTags: () => [{ type: "Post" }],
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `posts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ({ id }) => [
				{ type: "Post", id },
			],
		}),
	}),
});

export const {
	useGetAllPostsQuery,
	useGetOnePostQuery,
	useCreatePostMutation,
	useUpdatePostMutation,
	useDeletePostMutation,
} = api;
