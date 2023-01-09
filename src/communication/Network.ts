import axios from "axios";
import {Get, Post, Delete, Put, BaseUrl} from "./EnumEndpoints.ts";
import { Token,
        User,
        Page,
        SuggestionsReply,
        Suggestions,
        Product,
        Opinion,
        Category,
        UserLogin } from "./ObjectTypes";


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
        return axios({
            method: 'GET',
            url: BaseUrl + Get.CATEGORIES_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
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
        return axios({
            method: 'GET',
            url: BaseUrl + Get.OPINIONS_USER,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
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
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCTS_ALL + page,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as Page;
        }).catch(function (error) {
            throw error;
        })
    }

    static getProductDetails(skuParam: string): Promise<Product> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCTS_DETAILS,
            params: {
                sku: skuParam,
            },
        }).then(function (response) {
            return response.data as Product
        }).catch(function (error) {
            throw error;
        })
    }

    static getSearchProduct(searchInput: ProductSearch): Promise<Product[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCT_SEARCH,
            params: {
                categoryName: searchInput.categoryName,
                opinionAvgMax: searchInput.opinionAvgMax,
                opinionAvgMin: searchInput.opinionAvgMin,
                searchPhrase: searchInput.searchPhrase,
            },
        }).then(function (response) {
            return response.data as Product[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static getAllSuggestions(): Promise<Suggestions[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.SUGGESTIONS_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as Suggestions[];
        }).catch(function (error) {
            throw error;
        })
    }

    static getUserSuggestions(): Promise<Suggestions[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.SUGGESTIONS_USER,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as Suggestions[];
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//

    static getAllUsers(): Promise<User[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.USERS_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
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

    const newCategory: Category = {
        name: categoryName,
        visible: isVisible
    };

    return axios({
        method: 'POST',
        url: BaseUrl + Post.CATEGORIES_ADD,
        headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
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
               Authorization: "Bearer " + localStorage.getItem("token"),
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

    static addProduct(product: Product): Promise<Product> {

        const newProduct: Product = {
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
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: newProduct,
        }).then(function (response) {
            return response.data as Product;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static addSuggestion(desc: string, skuval: string): Promise<Suggestions> {

        const newSuggestion: Suggestions = {
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
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: newSuggestion,
        }).then(function (response) {
            return response.data as Suggestions;
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
            return response.data as Token;
        }).catch(function (error) {
            throw error;
        })
    }

    static userRegister(user: User): Promise<User> {

        const RegisterUser: User = {
            email: user.email,
            firstName: user.firstName,
            isAdmin: user.isAdmin,
            id: null,
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
    return axios({
        method: 'DELETE',
        url: BaseUrl + Delete.CATEGORIES_DELETE,
        headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
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

    static deleteProduct(skuval: string): Promise<Product> {
        return axios({
            method: 'DELETE',
            url: BaseUrl + Delete.PRODUCTS_DELETE,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            params: {
                sku: skuval,
            },
        }).then(function (res) {
            return res.data as Product;
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

        const modifyCategory: Category = {
            name: categoryName,
            visible: isVisible,
        };
    
        return axios({
            method: 'PUT',
            url: BaseUrl + Put.CATEGORIES_EDIT,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
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

    static editProduct(product: Product): Promise<Product> {

        const modifyProduct: Product = {
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
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: modifyProduct,
        }).then(function (response) {
            return response.data as Product;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static replySuggestion(sugReply: SuggestionsReply): Promise<Suggestions> {

        const respondSuggestion: SuggestionsReply = {
            suggestionId: sugReply.suggestionId,
            suggestionReply: sugReply.suggestionReply,
            suggestionStatus: sugReply.suggestionStatus
        }

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.SUGGESTIONS_REPLY,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: respondSuggestion,
        }).then(function (response) {
            return response.data as Suggestions;
        }).catch(function (error) {
            throw error;
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//

    static editUser(user: User): Promise<User> {

        const modifyUser: User = {
            email: user.email,
            firstName: user.firstName,
            isAdmin: user.isAdmin,
            id: user.id,
            lastName: user.lastName,
            password: user.password,
            pictureUrl: user.pictureUrl
        };

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.USER_EDIT,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: modifyUser,
            params: {
                userId: modifyUser.id,
            }
        }).then(function (response) {
            return response.data as User;
        }).catch(function (error) {
            throw error;
        })
    }

}