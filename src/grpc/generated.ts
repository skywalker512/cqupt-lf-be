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

        /**
         * Returns the DepartmentController service client.
         */
        getDepartmentController(): cqupt_user.DepartmentController;

        /**
         * Returns the CardController service client.
         */
        getCardController(): cqupt_user.CardController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a UserController service implementation.
         * @param impl UserController service implementation
         */
        addUserController(impl: cqupt_user.UserController): cqupt_user.ServerBuilder;

        /**
         * Adds a DepartmentController service implementation.
         * @param impl DepartmentController service implementation
         */
        addDepartmentController(impl: cqupt_user.DepartmentController): cqupt_user.ServerBuilder;

        /**
         * Adds a CardController service implementation.
         * @param impl CardController service implementation
         */
        addCardController(impl: cqupt_user.CardController): cqupt_user.ServerBuilder;
    }

    /** Constructs a new UserController service. */
    export interface UserController {

        /**
         * Calls CreatUser.
         * @param request CreatUserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatUser(request: cqupt_user.CreatUserReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatUserRes>;

        /**
         * Calls Login.
         * @param request LoginReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        login(request: cqupt_user.LoginReq, metadata?: grpc.Metadata): Observable<cqupt_user.LoginRes>;

        /**
         * Calls FindOneUser.
         * @param request FindOneUserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneUser(request: cqupt_user.FindOneUserReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindOneUserRes>;

        /**
         * Calls FindAllUsers.
         * @param request FindAllUsersReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllUsers(request: cqupt_user.FindAllUsersReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllUsersRes>;
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
        id?: (string|null);

        /** UserData mobile */
        mobile?: (string|null);

        /** UserData createdAt */
        createdAt?: (string|null);

        /** UserData updatedAt */
        updatedAt?: (string|null);

        /** UserData card */
        card?: (cqupt_user.Card|null);
    }

    /** Properties of a TokenInfo. */
    export interface TokenInfo {

        /** TokenInfo expiresIn */
        expiresIn?: (number|null);

        /** TokenInfo accessToken */
        accessToken?: (string|null);
    }

    /** Properties of a CreatUserReq. */
    export interface CreatUserReq {

        /** CreatUserReq data */
        data?: (cqupt_user.UserData|null);
    }

    /** Properties of a CreatUserRes. */
    export interface CreatUserRes {

        /** CreatUserRes code */
        code?: (number|null);

        /** CreatUserRes message */
        message?: (string|null);

        /** CreatUserRes user */
        user?: (cqupt_user.UserData|null);

        /** CreatUserRes tokenInfo */
        tokenInfo?: (cqupt_user.TokenInfo|null);
    }

    /** Properties of a LoginReq. */
    export interface LoginReq {

        /** LoginReq data */
        data?: (cqupt_user.UserData|null);

        /** LoginReq code */
        code?: (string|null);
    }

    /** Properties of a LoginRes. */
    export interface LoginRes {

        /** LoginRes code */
        code?: (number|null);

        /** LoginRes message */
        message?: (string|null);

        /** LoginRes user */
        user?: (cqupt_user.UserData|null);

        /** LoginRes tokenInfo */
        tokenInfo?: (cqupt_user.TokenInfo|null);
    }

    /** Properties of a FindOneUserReq. */
    export interface FindOneUserReq {

        /** FindOneUserReq data */
        data?: (cqupt_user.UserData|null);
    }

    /** Properties of a FindOneUserRes. */
    export interface FindOneUserRes {

        /** FindOneUserRes code */
        code?: (number|null);

        /** FindOneUserRes message */
        message?: (string|null);

        /** FindOneUserRes user */
        user?: (cqupt_user.UserData|null);
    }

    /** Properties of a FindAllUsersReq. */
    export interface FindAllUsersReq {

        /** FindAllUsersReq pageNumber */
        pageNumber?: (number|null);

        /** FindAllUsersReq pageSize */
        pageSize?: (number|null);
    }

    /** Properties of a FindAllUsersRes. */
    export interface FindAllUsersRes {

        /** FindAllUsersRes code */
        code?: (number|null);

        /** FindAllUsersRes message */
        message?: (string|null);

        /** FindAllUsersRes user */
        user?: (cqupt_user.UserData[]|null);
    }

    /** Constructs a new DepartmentController service. */
    export interface DepartmentController {

        /**
         * Calls CreatDepartment.
         * @param request CreatDepartmentReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatDepartment(request: cqupt_user.CreatDepartmentReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatDepartmentRes>;

        /**
         * Calls FindAllDepartments.
         * @param request FindAllDepartmentsReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllDepartments(request: cqupt_user.FindAllDepartmentsReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindAllDepartmentsRes>;
    }

    /** Properties of a Department. */
    export interface Department {

        /** Department id */
        id?: (string|null);

        /** Department name */
        name?: (string|null);

        /** Department createdAt */
        createdAt?: (string|null);

        /** Department updatedAt */
        updatedAt?: (string|null);
    }

    /** Properties of a CreatDepartmentReq. */
    export interface CreatDepartmentReq {

        /** CreatDepartmentReq name */
        name?: (string|null);
    }

    /** Properties of a CreatDepartmentRes. */
    export interface CreatDepartmentRes {

        /** CreatDepartmentRes code */
        code?: (number|null);

        /** CreatDepartmentRes message */
        message?: (string|null);

        /** CreatDepartmentRes department */
        department?: (cqupt_user.Department|null);
    }

    /** Properties of a FindAllDepartmentsReq. */
    export interface FindAllDepartmentsReq {

        /** FindAllDepartmentsReq pageNumber */
        pageNumber?: (number|null);

        /** FindAllDepartmentsReq pageSize */
        pageSize?: (number|null);
    }

    /** Properties of a FindAllDepartmentsRes. */
    export interface FindAllDepartmentsRes {

        /** FindAllDepartmentsRes code */
        code?: (number|null);

        /** FindAllDepartmentsRes message */
        message?: (string|null);

        /** FindAllDepartmentsRes departments */
        departments?: (cqupt_user.Department[]|null);
    }

    /** Constructs a new CardController service. */
    export interface CardController {

        /**
         * Calls CreatCard.
         * @param request CreatCardReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatCard(request: cqupt_user.CreatCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.CreatCardRes>;

        /**
         * Calls FindOneCard.
         * @param request FindOneCardReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneCard(request: cqupt_user.FindOneCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.FindOneCardRes>;
    }

    /** Properties of a Card. */
    export interface Card {

        /** Card stuNum */
        stuNum?: (string|null);

        /** Card user */
        user?: (cqupt_user.UserData|null);

        /** Card name */
        name?: (string|null);

        /** Card stuId */
        stuId?: (number|null);

        /** Card createdAt */
        createdAt?: (string|null);

        /** Card updatedAt */
        updatedAt?: (string|null);

        /** Card department */
        department?: (cqupt_user.Department|null);
    }

    /** Properties of a CreatCardReq. */
    export interface CreatCardReq {

        /** CreatCardReq stuNum */
        stuNum?: (string|null);

        /** CreatCardReq stuId */
        stuId?: (string|null);

        /** CreatCardReq name */
        name?: (string|null);

        /** CreatCardReq userId */
        userId?: (string|null);

        /** CreatCardReq departmentId */
        departmentId?: (string|null);
    }

    /** Properties of a CreatCardRes. */
    export interface CreatCardRes {

        /** CreatCardRes code */
        code?: (number|null);

        /** CreatCardRes message */
        message?: (string|null);

        /** CreatCardRes card */
        card?: (cqupt_user.Card|null);
    }

    /** Properties of a FindOneCardReq. */
    export interface FindOneCardReq {

        /** FindOneCardReq data */
        data?: (cqupt_user.Card|null);
    }

    /** Properties of a FindOneCardRes. */
    export interface FindOneCardRes {

        /** FindOneCardRes code */
        code?: (number|null);

        /** FindOneCardRes message */
        message?: (string|null);

        /** FindOneCardRes card */
        card?: (cqupt_user.Card|null);
    }
}
