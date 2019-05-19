import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace cqupt_api. */
export namespace cqupt_api {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the BaiduocrController service client.
         */
        getBaiduocrController(): cqupt_api.BaiduocrController;

        /**
         * Returns the QcloudsmsController service client.
         */
        getQcloudsmsController(): cqupt_api.QcloudsmsController;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a BaiduocrController service implementation.
         * @param impl BaiduocrController service implementation
         */
        addBaiduocrController(impl: cqupt_api.BaiduocrController): cqupt_api.ServerBuilder;

        /**
         * Adds a QcloudsmsController service implementation.
         * @param impl QcloudsmsController service implementation
         */
        addQcloudsmsController(impl: cqupt_api.QcloudsmsController): cqupt_api.ServerBuilder;
    }

    /** Constructs a new BaiduocrController service. */
    export interface BaiduocrController {

        /**
         * Calls GetOcrToken.
         * @param request GetOcrTokenReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        getOcrToken(request: cqupt_api.GetOcrTokenReq, metadata?: grpc.Metadata): Observable<cqupt_api.GetOcrTokenRes>;
    }

    /** Properties of a GetOcrTokenReq. */
    export interface GetOcrTokenReq {
    }

    /** Properties of a GetOcrTokenRes. */
    export interface GetOcrTokenRes {

        /** GetOcrTokenRes code */
        code?: (number|null);

        /** GetOcrTokenRes message */
        message?: (string|null);

        /** GetOcrTokenRes accessToken */
        accessToken?: (string|null);
    }

    /** Constructs a new QcloudsmsController service. */
    export interface QcloudsmsController {

        /**
         * Calls SendVerifyCode.
         * @param request SendVerifyCodeReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        sendVerifyCode(request: cqupt_api.SendVerifyCodeReq, metadata?: grpc.Metadata): Observable<cqupt_api.SendVerifyCodeRes>;

        /**
         * Calls ValidateCode.
         * @param request ValidateCodeReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        validateCode(request: cqupt_api.ValidateCodeReq, metadata?: grpc.Metadata): Observable<cqupt_api.ValidateCodeRes>;

        /**
         * Calls SendFoundCardNotice.
         * @param request SendFoundCardNoticeReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        sendFoundCardNotice(request: cqupt_api.SendFoundCardNoticeReq, metadata?: grpc.Metadata): Observable<cqupt_api.SendFoundCardNoticeRes>;
    }

    /** Properties of a SendVerifyCodeReq. */
    export interface SendVerifyCodeReq {

        /** SendVerifyCodeReq mobile */
        mobile?: (string|null);
    }

    /** Properties of a SendVerifyCodeRes. */
    export interface SendVerifyCodeRes {

        /** SendVerifyCodeRes code */
        code?: (number|null);

        /** SendVerifyCodeRes message */
        message?: (string|null);
    }

    /** Properties of a ValidateCodeReq. */
    export interface ValidateCodeReq {

        /** ValidateCodeReq mobile */
        mobile?: (string|null);

        /** ValidateCodeReq code */
        code?: (string|null);
    }

    /** Properties of a ValidateCodeRes. */
    export interface ValidateCodeRes {

        /** ValidateCodeRes code */
        code?: (number|null);

        /** ValidateCodeRes message */
        message?: (string|null);
    }

    /** Properties of a SendFoundCardNoticeReq. */
    export interface SendFoundCardNoticeReq {

        /** SendFoundCardNoticeReq mobile */
        mobile?: (string|null);

        /** SendFoundCardNoticeReq stuNum */
        stuNum?: (string|null);

        /** SendFoundCardNoticeReq locationName */
        locationName?: (string|null);
    }

    /** Properties of a SendFoundCardNoticeRes. */
    export interface SendFoundCardNoticeRes {

        /** SendFoundCardNoticeRes code */
        code?: (number|null);

        /** SendFoundCardNoticeRes message */
        message?: (string|null);
    }
}

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
         * Calls SuperAdminLogin.
         * @param request SuperAdminLoginReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        superAdminLogin(request: cqupt_user.SuperAdminLoginReq, metadata?: grpc.Metadata): Observable<cqupt_user.SuperAdminLoginRes>;

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

    /** Properties of a SuperAdminLoginReq. */
    export interface SuperAdminLoginReq {

        /** SuperAdminLoginReq data */
        data?: (cqupt_user.UserData|null);

        /** SuperAdminLoginReq code */
        code?: (string|null);
    }

    /** Properties of a SuperAdminLoginRes. */
    export interface SuperAdminLoginRes {

        /** SuperAdminLoginRes code */
        code?: (number|null);

        /** SuperAdminLoginRes message */
        message?: (string|null);

        /** SuperAdminLoginRes user */
        user?: (cqupt_user.UserData|null);

        /** SuperAdminLoginRes tokenInfo */
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

        /** FindOneCardReq stuNum */
        stuNum?: (string|null);

        /** FindOneCardReq stuId */
        stuId?: (string|null);

        /** FindOneCardReq name */
        name?: (string|null);

        /** FindOneCardReq userId */
        userId?: (string|null);
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
