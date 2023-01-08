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
        UserLogin,
        UserRegister,
        UserEdit } from "./ObjectTypes";


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

    static getSearchProduct(ctgName: string, opinionMin: number, opinionMax: number, srhPhrase: string): Promise<Product[]> {
        return axios({
            method: 'GET',
            url: BaseUrl + Get.PRODUCT_SEARCH,
            params: {
                categoryName: ctgName,
                opinionAvgMax: opinionMax,
                opinionAvgMin: opinionMin,
                searchPhrase: srhPhrase,
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

    static addOpinion(adv: string[],
                     desc: string,
                    disadv: string[], 
                    oval: number, 
                    picurl: string, 
                    skuval: string): Promise<Opinion> {

        const newOpinion: Opinion = {
            advantages: adv,
            description: desc,
            disadvantages: disadv,
            opinionValue: oval,
            pictureUrl: picurl,
            sku: skuval
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

    static addProduct(ctgName: Product[],
                    desc: string,
                    prodname: string,
                    picurl:string, 
                    skuval: string, 
                    isVisible: boolean): Promise<Product> {

        const newProduct: Product = {
            categoryNames: ctgName,
            description: desc,
            name: prodname,
            pictureUrl: picurl,
            sku: skuval,
            visible: isVisible
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

    static userRegister(mail: string,
                        fname:string, 
                        lname: string, 
                        pass: string, 
                        admin:boolean, 
                        picurl: string): Promise<User> {

        const RegisterUser: UserRegister = {
            email: mail,
            firstName: fname,
            isAdmin: admin,
            lastName: lname,
            password: pass,
            pictureUrl:picurl
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

    static editProduct(ctgName: Product[],
                        desc: string, 
                        prodname: string, 
                        picurl:string, 
                        skuval: string, 
                        isVisible: boolean): Promise<Product> {

        const modifyProduct: Product = {
            categoryNames: ctgName,
            description: desc,
            name: prodname,
            pictureUrl: picurl,
            sku: skuval,
            visible:isVisible
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

    static replySuggestion(sugId: number,
                        sugReply: string,
                        sugStatus: string): Promise<Suggestions> {

        const respondSuggestion: SuggestionsReply = {
            suggestionId: sugId,
            suggestionReply: sugReply,
            suggestionStatus: sugStatus
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

    static editUser(uid: number,
                    mail: string,
                    fname:string, 
                    lname: string,
                    pass: string, 
                    admin:boolean, 
                    picurl: string): Promise<User> {

        const modifyUser: UserEdit = {
            email: mail,
            firstName: fname,
            isAdmin: admin,
            lastName: lname,
            password: pass,
            pictureUrl:picurl
        };

        return axios({
            method: 'PUT',
            url: BaseUrl + Put.USER_EDIT,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: modifyUser,
            params: {
                userId: uid,
            }
        }).then(function (response) {
            return response.data as User;
        }).catch(function (error) {
            throw error;
        })
    }

}