import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace cqupt_user. */
export namespace cqupt_user {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the UserController service client.
         */
        getUserController(): cqupt_user.UserController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a UserController service implementation.
         * @param impl UserController service implementation
         */
        addUserController(impl: cqupt_user.UserController): cqupt_user.ServerBuilder;
    }

    /** Constructs a new UserController service. */
    export interface UserController {

        /**
         * Calls CreatUser.
         * @param request UserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatUser(request: cqupt_user.UserReq, metadata?: grpc.Metadata): Observable<cqupt_user.UserWithTokenRes>;

        /**
         * Calls Login.
         * @param request UserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        login(request: cqupt_user.UserReq, metadata?: grpc.Metadata): Observable<cqupt_user.UserWithTokenRes>;

        /**
         * Calls FindOneUser.
         * @param request UserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneUser(request: cqupt_user.UserReq, metadata?: grpc.Metadata): Observable<cqupt_user.UserRes>;

        /**
         * Calls FindAllUsers.
         * @param request FindDataByPageReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllUsers(request: cqupt_user.FindDataByPageReq, metadata?: grpc.Metadata): Observable<cqupt_user.UsersRes>;
    }

    /** Properties of a StringDataResponse. */
    export interface StringDataResponse {

        /** StringDataResponse code */
        code?: (number|null);

        /** StringDataResponse message */
        message?: (string|null);

        /** StringDataResponse result */
        result?: (string|null);
    }

    /** Properties of a UserData. */
    export interface UserData {

        /** UserData id */
        id?: (number|null);

        /** UserData mobile */
        mobile?: (string|null);

        /** UserData createdAt */
        createdAt?: (string|null);

        /** UserData updatedAt */
        updatedAt?: (string|null);
    }

    /** Properties of a UserReq. */
    export interface UserReq {

        /** UserReq type */
        type?: (string|null);

        /** UserReq data */
        data?: (cqupt_user.UserData|null);
    }

    /** Properties of a UserRes. */
    export interface UserRes {

        /** UserRes user */
        user?: (cqupt_user.UserData|null);
    }

    /** Properties of a UsersRes. */
    export interface UsersRes {

        /** UsersRes users */
        users?: (cqupt_user.UserData[]|null);
    }

    /** Properties of a UserWithTokenRes. */
    export interface UserWithTokenRes {

        /** UserWithTokenRes code */
        code?: (number|null);

        /** UserWithTokenRes message */
        message?: (string|null);

        /** UserWithTokenRes user */
        user?: (cqupt_user.UserData|null);

        /** UserWithTokenRes tokenInfo */
        tokenInfo?: (cqupt_user.UserWithTokenRes.TokenInfo|null);
    }

    export namespace UserWithTokenRes {

        /** Properties of a TokenInfo. */
        export interface TokenInfo {

            /** TokenInfo expiresIn */
            expiresIn?: (number|null);

            /** TokenInfo accessToken */
            accessToken?: (string|null);
        }
    }

    /** Properties of a FindDataByPageReq. */
    export interface FindDataByPageReq {

        /** FindDataByPageReq pageNumber */
        pageNumber?: (number|null);

        /** FindDataByPageReq pageSize */
        pageSize?: (number|null);
    }
}
