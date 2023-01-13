import axios from "axios";
import {Get, Post, Delete, Put, BaseUrl} from "./EnumEndpoints.ts";
import { Token,
        User,
        Page,
        SuggestionReply,
        Suggestion,
        ProductSend,
        ProductGet,
        Opinion,
        Category,
        UserLogin,
        UserEdit,
        ProductSearch } from "./ObjectTypes";


export class GetRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static getCategories(): Promise<Category[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.CATEGORIES,
        }).then(function (response) {
            return response.data as Category[];
        }).catch(function (error) {
            throw error;
        })
    }

    static getAllCategories(): Promise<Category[]> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.CATEGORIES_ALL,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as Category[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //       opinion-controller       //
    //-------------------------------//

    static getProductOpinions(skuval: string): Promise<Opinion[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.OPINIONS_PRODUCT,
            params: {
                sku: skuval
            },
        }).then(function (response) {
            return response.data as Opinion[];
        }).catch(function (error) {
            throw error;
        })
    }

    static getUserOpinions(): Promise<Opinion[]> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.OPINIONS_USER,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as Opinion[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static getProducts(page: number): Promise<Page> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCTS + page,
        }).then(function (response) {
            return response.data as Page;
        }).catch(function (error) {
            throw error;
        })
    }

    static getAllProducts(page: number): Promise<Page> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCTS_ALL + page,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as Page;
        }).catch(function (error) {
            throw error;
        })
    }

    static getProductDetails(skuParam: string): Promise<ProductGet> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCTS_DETAILS,
            params: {
                sku: skuParam,
            },
        }).then(function (response) {
            return response.data as ProductGet
        }).catch(function (error) {
            throw error;
        })
    }

    static getSearchProduct(searchInput: ProductSearch): Promise<ProductGet[]> {

        const params = new URLSearchParams({});

        if (searchInput.categoryName) params.append("categoryName", searchInput.categoryName);
        if (searchInput.opinionAvgMax != null) params.append("opinionAvgMax", searchInput.opinionAvgMax.toString());
        if (searchInput.opinionAvgMin != null) params.append("opinionAvgMin", searchInput.opinionAvgMin.toString());
        if (searchInput.searchPhrase != null) params.append("searchPhrase", searchInput.searchPhrase);

        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCT_SEARCH + params.toString(),
        }).then(function (response) {
            return response.data as ProductGet[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static getAllSuggestions(): Promise<Suggestion[]> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.SUGGESTIONS_ALL,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as Suggestion[];
        }).catch(function (error) {
            throw error;
        })
    }

    static getUserSuggestions(): Promise<Suggestion[]> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.SUGGESTIONS_USER,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as Suggestion[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//

    static getAllUsers(): Promise<User[]> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'GET',
            url: BaseUrl + Get.USERS_ALL,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
        }).then(function (response) {
            return response.data as User[];
        }).catch(function (error) {
            throw error;
        })
    }
}

export class PostRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static addCategory(categoryName: string, isVisible: boolean): Promise<Category> {

    const token = localStorage.getItem("token");
    const newCategory: Category = {
        categoryName: categoryName,
        visible: isVisible
    };

    return axios({
        method: 'POST',
        url: BaseUrl + Post.CATEGORIES_ADD,
        headers: {
            Authorization: token == null ? "" : "Bearer " + token,
        },
        data: newCategory,
    }).then(function (response) {
        return response.data as Category;
    }).catch(function (error) {
        throw error;
    })
    }

    //---------------------------------//
    //       opinion-controller       //
    //-------------------------------//

    static addOpinion(opinion: Opinion): Promise<Opinion> {

        const token = localStorage.getItem("token");
        const newOpinion: Opinion = {
            advantages: opinion.advantages,
            description: opinion.description,
            disadvantages: opinion.disadvantages,
            firstName: null,
            opinionValue: opinion.opinionValue,
            opinionAvg: null,
            pictureUrl: opinion.pictureUrl,
            sku: opinion.sku
        };

        return axios({
            method: 'POST',
            url: BaseUrl + Post.OPINIONS_ADD,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: newOpinion,
        }).then(function (response) {
            return response.data as Opinion;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static addProduct(product: ProductSend): Promise<ProductGet> {

        const token = localStorage.getItem("token");
        const newProduct: ProductSend = {
            categoryNames: product.categoryNames,
            description: product.description,
            name: product.name,
            pictureUrl: product.pictureUrl,
            sku: product.sku,
            visible: product.visible
        };

        return axios({
            method: 'POST',
            url: BaseUrl + Post.PRODUCTS_ADD,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: newProduct,
        }).then(function (response) {
            return response.data as ProductGet;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static addSuggestion(desc: string, skuval: string): Promise<Suggestion> {

        const token = localStorage.getItem("token");
        const newSuggestion: Suggestion = {
            description: desc,
            product: null,
            review: null,
            reviewer: null,
            suggestionId: null,
            user: null,
            sku: skuval
        };

        return axios({
            method: 'POST',
            url: BaseUrl + Post.SUGGESTIONS_ADD,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: newSuggestion,
        }).then(function (response) {
            return response.data as Suggestion;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//


    static userLogin(mail: string, pass: string): Promise<Token> {

        const LoginUser: UserLogin = {
            email: mail,
            password: pass
        };

        return axios({
            method: 'POST',
            url: BaseUrl + Post.USER_LOGIN,
            data: LoginUser,
        }).then(function (response) {
            localStorage.setItem("token", response.data["token"]);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return response.data as Token;
        }).catch(function (error) {
            throw error;
        })
    }

    static userRegister(user: UserEdit): Promise<User> {

        const RegisterUser: UserEdit = {
            email: user.email,
            firstName: user.firstName,
            isAdmin: user.isAdmin,
            lastName: user.lastName,
            password: user.password,
            pictureUrl: user.pictureUrl
        };

        return axios({
            method: 'POST',
            url: BaseUrl + Post.USER_REGISTER,
            data: RegisterUser,
        }).then(function (response) {
            return response.data as User;
        }).catch(function (error) {
            throw error;
        })
    }
}

export class DeleteRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static deleteCategory(categoryName: string): Promise<Category> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'DELETE',
            url: BaseUrl + Delete.CATEGORIES_DELETE,
            headers: {
            Authorization: token == null ? "" : "Bearer " + token,
            },
            params: {
                name: categoryName,
            },
        }).then(function (res) {
            return res.data as Category;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static deleteProduct(skuval: string): Promise<ProductGet> {

        const token = localStorage.getItem("token");

        return axios({
            method: 'DELETE',
            url: BaseUrl + Delete.PRODUCTS_DELETE,
            headers: {
               Authorization: token == null ? "" : "Bearer " + token,
            },
            params: {
                sku: skuval,
            },
        }).then(function (res) {
            return res.data as ProductGet;
        }).catch(function (error) {
            throw error;
        })
    }
}

export class PutRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static editCategory(categoryName: string, isVisible: boolean): Promise<Category> {

        const token = localStorage.getItem("token");
        const modifyCategory: Category = {
            categoryName: categoryName,
            visible: isVisible,
        };

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.CATEGORIES_EDIT,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: modifyCategory,
        }).then(function (response) {
            return response.data as Category;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static editProduct(product: ProductSend): Promise<ProductGet> {

        const token = localStorage.getItem("token");
        const modifyProduct: ProductSend = {
            categoryNames: product.categoryNames,
            description: product.description,
            name: product.name,
            pictureUrl: product.pictureUrl,
            sku: product.sku,
            visible: product.visible
        }

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.PRODUCTS_EDIT,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: modifyProduct,
        }).then(function (response) {
            return response.data as ProductGet;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static replySuggestion(sugReply: SuggestionReply): Promise<Suggestion> {

        const token = localStorage.getItem("token");
        const respondSuggestion: SuggestionReply = {
            suggestionId: sugReply.suggestionId,
            suggestionReply: sugReply.suggestionReply,
            suggestionStatus: sugReply.suggestionStatus
        }

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.SUGGESTIONS_REPLY,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: respondSuggestion,
        }).then(function (response) {
            return response.data as Suggestion;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//

    static userEdit(userId: number, user: UserEdit): Promise<User> {

        const token = localStorage.getItem("token");
        var modifyUser = {};

        if (user.email != null) modifyUser['email'] = user.email;
        if (user.firstName != null) modifyUser['firstName'] = user.firstName;
        if (user.isAdmin != null) modifyUser['isAdmin'] = user.isAdmin;
        if (user.lastName != null) modifyUser['lastName'] = user.lastName;
        if (user.password != null) modifyUser['password'] = user.password;
        if (user.pictureUrl != null) modifyUser['pictureUrl'] = user.pictureUrl;

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.USER_EDIT,
            headers: {
                Authorization: token == null ? "" : "Bearer " + token,
            },
            data: modifyUser,
            params: {
                userId: userId,
            }
        }).then(function (response) {
            return response.data as User;
        }).catch(function (error) {
            throw error;
        })
    }

}

export class MethodRequest {
    static getUser(): User | null {
        return JSON.parse(localStorage.getItem("user")) as User;
    }

    static isTokenAvailable() {
        const token = localStorage.getItem("token")
        return token == null ? false : true;
    }

    static userLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}
