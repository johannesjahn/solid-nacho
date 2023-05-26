/* tslint:disable */
/* eslint-disable */
/**
 * Chat - API
 * Chat - API Description
 *
 * The version of the OpenAPI document: 1.1.52
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CommentResponseDTO,
  CreateCommentDTO,
  CreatePostDTO,
  CreateReplyDTO,
  DeleteCommentDTO,
  DeletePostDTO,
  DeleteReplyDTO,
  PostResponseDTO,
  ReplyResponseDTO,
  UpdateCommentDTO,
  UpdatePostDTO,
  UpdateReplyDTO,
} from '../models';
import {
    CommentResponseDTOFromJSON,
    CommentResponseDTOToJSON,
    CreateCommentDTOFromJSON,
    CreateCommentDTOToJSON,
    CreatePostDTOFromJSON,
    CreatePostDTOToJSON,
    CreateReplyDTOFromJSON,
    CreateReplyDTOToJSON,
    DeleteCommentDTOFromJSON,
    DeleteCommentDTOToJSON,
    DeletePostDTOFromJSON,
    DeletePostDTOToJSON,
    DeleteReplyDTOFromJSON,
    DeleteReplyDTOToJSON,
    PostResponseDTOFromJSON,
    PostResponseDTOToJSON,
    ReplyResponseDTOFromJSON,
    ReplyResponseDTOToJSON,
    UpdateCommentDTOFromJSON,
    UpdateCommentDTOToJSON,
    UpdatePostDTOFromJSON,
    UpdatePostDTOToJSON,
    UpdateReplyDTOFromJSON,
    UpdateReplyDTOToJSON,
} from '../models';

export interface PostControllerCreateCommentRequest {
    createCommentDTO: CreateCommentDTO;
}

export interface PostControllerCreatePostRequest {
    createPostDTO: CreatePostDTO;
}

export interface PostControllerCreateReplyRequest {
    createReplyDTO: CreateReplyDTO;
}

export interface PostControllerDeleteCommentRequest {
    deleteCommentDTO: DeleteCommentDTO;
}

export interface PostControllerDeletePostRequest {
    deletePostDTO: DeletePostDTO;
}

export interface PostControllerDeleteReplyRequest {
    deleteReplyDTO: DeleteReplyDTO;
}

export interface PostControllerGetCommentsRequest {
    postId: number;
}

export interface PostControllerGetRepliesRequest {
    commentId: number;
}

export interface PostControllerUpdateCommentRequest {
    updateCommentDTO: UpdateCommentDTO;
}

export interface PostControllerUpdatePostRequest {
    updatePostDTO: UpdatePostDTO;
}

export interface PostControllerUpdateReplyRequest {
    updateReplyDTO: UpdateReplyDTO;
}

/**
 * 
 */
export class PostApi extends runtime.BaseAPI {

    /**
     * Create comment with the authenticated user
     * 
     */
    async postControllerCreateCommentRaw(requestParameters: PostControllerCreateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommentResponseDTO>> {
        if (requestParameters.createCommentDTO === null || requestParameters.createCommentDTO === undefined) {
            throw new runtime.RequiredError('createCommentDTO','Required parameter requestParameters.createCommentDTO was null or undefined when calling postControllerCreateComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/comment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateCommentDTOToJSON(requestParameters.createCommentDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentResponseDTOFromJSON(jsonValue));
    }

    /**
     * Create comment with the authenticated user
     * 
     */
    async postControllerCreateComment(requestParameters: PostControllerCreateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommentResponseDTO> {
        const response = await this.postControllerCreateCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create post with the authenticated user
     * 
     */
    async postControllerCreatePostRaw(requestParameters: PostControllerCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponseDTO>> {
        if (requestParameters.createPostDTO === null || requestParameters.createPostDTO === undefined) {
            throw new runtime.RequiredError('createPostDTO','Required parameter requestParameters.createPostDTO was null or undefined when calling postControllerCreatePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePostDTOToJSON(requestParameters.createPostDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseDTOFromJSON(jsonValue));
    }

    /**
     * Create post with the authenticated user
     * 
     */
    async postControllerCreatePost(requestParameters: PostControllerCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponseDTO> {
        const response = await this.postControllerCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create reply with the authenticated user
     * 
     */
    async postControllerCreateReplyRaw(requestParameters: PostControllerCreateReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReplyResponseDTO>> {
        if (requestParameters.createReplyDTO === null || requestParameters.createReplyDTO === undefined) {
            throw new runtime.RequiredError('createReplyDTO','Required parameter requestParameters.createReplyDTO was null or undefined when calling postControllerCreateReply.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/reply`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateReplyDTOToJSON(requestParameters.createReplyDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReplyResponseDTOFromJSON(jsonValue));
    }

    /**
     * Create reply with the authenticated user
     * 
     */
    async postControllerCreateReply(requestParameters: PostControllerCreateReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReplyResponseDTO> {
        const response = await this.postControllerCreateReplyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a comment that belongs to the currently authenticated user
     * 
     */
    async postControllerDeleteCommentRaw(requestParameters: PostControllerDeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deleteCommentDTO === null || requestParameters.deleteCommentDTO === undefined) {
            throw new runtime.RequiredError('deleteCommentDTO','Required parameter requestParameters.deleteCommentDTO was null or undefined when calling postControllerDeleteComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/comment`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteCommentDTOToJSON(requestParameters.deleteCommentDTO),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a comment that belongs to the currently authenticated user
     * 
     */
    async postControllerDeleteComment(requestParameters: PostControllerDeleteCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postControllerDeleteCommentRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a post that belongs to the currently authenticated user
     * 
     */
    async postControllerDeletePostRaw(requestParameters: PostControllerDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deletePostDTO === null || requestParameters.deletePostDTO === undefined) {
            throw new runtime.RequiredError('deletePostDTO','Required parameter requestParameters.deletePostDTO was null or undefined when calling postControllerDeletePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeletePostDTOToJSON(requestParameters.deletePostDTO),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a post that belongs to the currently authenticated user
     * 
     */
    async postControllerDeletePost(requestParameters: PostControllerDeletePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postControllerDeletePostRaw(requestParameters, initOverrides);
    }

    /**
     * Delete reply with the authenticated user
     * 
     */
    async postControllerDeleteReplyRaw(requestParameters: PostControllerDeleteReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.deleteReplyDTO === null || requestParameters.deleteReplyDTO === undefined) {
            throw new runtime.RequiredError('deleteReplyDTO','Required parameter requestParameters.deleteReplyDTO was null or undefined when calling postControllerDeleteReply.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/reply`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: DeleteReplyDTOToJSON(requestParameters.deleteReplyDTO),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete reply with the authenticated user
     * 
     */
    async postControllerDeleteReply(requestParameters: PostControllerDeleteReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postControllerDeleteReplyRaw(requestParameters, initOverrides);
    }

    /**
     * Get comments of a post
     * 
     */
    async postControllerGetCommentsRaw(requestParameters: PostControllerGetCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CommentResponseDTO>>> {
        if (requestParameters.postId === null || requestParameters.postId === undefined) {
            throw new runtime.RequiredError('postId','Required parameter requestParameters.postId was null or undefined when calling postControllerGetComments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/app/post/comment/{postId}`.replace(`{${"postId"}}`, encodeURIComponent(String(requestParameters.postId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentResponseDTOFromJSON));
    }

    /**
     * Get comments of a post
     * 
     */
    async postControllerGetComments(requestParameters: PostControllerGetCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CommentResponseDTO>> {
        const response = await this.postControllerGetCommentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all posts
     * 
     */
    async postControllerGetPostsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PostResponseDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/app/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostResponseDTOFromJSON));
    }

    /**
     * Get all posts
     * 
     */
    async postControllerGetPosts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PostResponseDTO>> {
        const response = await this.postControllerGetPostsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get replies of a comment
     * 
     */
    async postControllerGetRepliesRaw(requestParameters: PostControllerGetRepliesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ReplyResponseDTO>>> {
        if (requestParameters.commentId === null || requestParameters.commentId === undefined) {
            throw new runtime.RequiredError('commentId','Required parameter requestParameters.commentId was null or undefined when calling postControllerGetReplies.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/app/post/reply/{commentId}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters.commentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReplyResponseDTOFromJSON));
    }

    /**
     * Get replies of a comment
     * 
     */
    async postControllerGetReplies(requestParameters: PostControllerGetRepliesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ReplyResponseDTO>> {
        const response = await this.postControllerGetRepliesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a comment that belongs to the currently authenticated user
     * 
     */
    async postControllerUpdateCommentRaw(requestParameters: PostControllerUpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommentResponseDTO>> {
        if (requestParameters.updateCommentDTO === null || requestParameters.updateCommentDTO === undefined) {
            throw new runtime.RequiredError('updateCommentDTO','Required parameter requestParameters.updateCommentDTO was null or undefined when calling postControllerUpdateComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/comment`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCommentDTOToJSON(requestParameters.updateCommentDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentResponseDTOFromJSON(jsonValue));
    }

    /**
     * Update a comment that belongs to the currently authenticated user
     * 
     */
    async postControllerUpdateComment(requestParameters: PostControllerUpdateCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommentResponseDTO> {
        const response = await this.postControllerUpdateCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a post that belongs to the currently authenticated user
     * 
     */
    async postControllerUpdatePostRaw(requestParameters: PostControllerUpdatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostResponseDTO>> {
        if (requestParameters.updatePostDTO === null || requestParameters.updatePostDTO === undefined) {
            throw new runtime.RequiredError('updatePostDTO','Required parameter requestParameters.updatePostDTO was null or undefined when calling postControllerUpdatePost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePostDTOToJSON(requestParameters.updatePostDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostResponseDTOFromJSON(jsonValue));
    }

    /**
     * Update a post that belongs to the currently authenticated user
     * 
     */
    async postControllerUpdatePost(requestParameters: PostControllerUpdatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostResponseDTO> {
        const response = await this.postControllerUpdatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update reply with the authenticated user
     * 
     */
    async postControllerUpdateReplyRaw(requestParameters: PostControllerUpdateReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReplyResponseDTO>> {
        if (requestParameters.updateReplyDTO === null || requestParameters.updateReplyDTO === undefined) {
            throw new runtime.RequiredError('updateReplyDTO','Required parameter requestParameters.updateReplyDTO was null or undefined when calling postControllerUpdateReply.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/app/post/reply`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateReplyDTOToJSON(requestParameters.updateReplyDTO),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReplyResponseDTOFromJSON(jsonValue));
    }

    /**
     * Update reply with the authenticated user
     * 
     */
    async postControllerUpdateReply(requestParameters: PostControllerUpdateReplyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReplyResponseDTO> {
        const response = await this.postControllerUpdateReplyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
