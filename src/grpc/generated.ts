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
        id?: (string|null);

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

    /** Constructs a new DepartmentController service. */
    export interface DepartmentController {

        /**
         * Calls CreatDepartment.
         * @param request DepartmentReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        creatDepartment(request: cqupt_user.DepartmentReq, metadata?: grpc.Metadata): Observable<cqupt_user.DepartmentRes>;

        /**
         * Calls FindAllDepartments.
         * @param request FindDataByPageReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findAllDepartments(request: cqupt_user.FindDataByPageReq, metadata?: grpc.Metadata): Observable<cqupt_user.DepartmentsRes>;
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

    /** Properties of a DepartmentReq. */
    export interface DepartmentReq {

        /** DepartmentReq name */
        name?: (string|null);
    }

    /** Properties of a DepartmentRes. */
    export interface DepartmentRes {

        /** DepartmentRes code */
        code?: (number|null);

        /** DepartmentRes message */
        message?: (string|null);

        /** DepartmentRes department */
        department?: (cqupt_user.Department|null);
    }

    /** Properties of a DepartmentsRes. */
    export interface DepartmentsRes {

        /** DepartmentsRes code */
        code?: (number|null);

        /** DepartmentsRes message */
        message?: (string|null);

        /** DepartmentsRes departments */
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
        creatCard(request: cqupt_user.CreatCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.CardRes>;

        /**
         * Calls FindOneCard.
         * @param request FindOneCardReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        findOneCard(request: cqupt_user.FindOneCardReq, metadata?: grpc.Metadata): Observable<cqupt_user.CardRes>;
    }

    /** Properties of a Card. */
    export interface Card {

        /** Card stuNum */
        stuNum?: (string|null);

        /** Card user */
        user?: (string|null);

        /** Card name */
        name?: (string|null);

        /** Card stuId */
        stuId?: (string|null);

        /** Card createdAt */
        createdAt?: (string|null);

        /** Card updatedAt */
        updatedAt?: (string|null);
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

    /** Properties of a FindOneCardReq. */
    export interface FindOneCardReq {

        /** FindOneCardReq type */
        type?: (string|null);

        /** FindOneCardReq data */
        data?: (cqupt_user.Card|null);
    }

    /** Properties of a CardRes. */
    export interface CardRes {

        /** CardRes code */
        code?: (number|null);

        /** CardRes message */
        message?: (string|null);

        /** CardRes card */
        card?: (cqupt_user.Card|null);
    }
}
