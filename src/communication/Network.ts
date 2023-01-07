import axios from "axios";
import {Get, Post, Global} from "./EnumEndpoints";
import { UserType,
        PageType,
        SuggestionsType,
        ProductType,
        OpinionType,
        CategoryType } from "./ObjectTypes";


export class GetRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static getCategories(): Promise<CategoryType[]> {


        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.CATEGORIES,
        }).then(function (response) {
            return response.data as CategoryType[];
        }).catch(function (error) {
            throw error
        })
    }

    static getAllCategories(): Promise<CategoryType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.CATEGORIES_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as CategoryType[];
        }).catch(function (error) {
            throw error
        })
    }

    //---------------------------------//
    //       opinion-controller       //
    //-------------------------------//

    static getProductOpinions(skuval: string): Promise<OpinionType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.OPINIONS_PRODUCT,
            params: {
                sku: skuval
            }
        }).then(function (response) {
            return response.data as OpinionType[];
        }).catch(function (error) {
            throw error
        })
    }


    static getUserOpinions(): Promise<OpinionType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.OPINIONS_USER,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as OpinionType[];
        }).catch(function (error) {
            throw error
        })
    }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static getProduct(page: number): Promise<PageType> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.PRODUCTS + page,
        }).then(function (response) {
            return response.data as PageType;
        }).catch(function (error) {
            throw error
        })
    }

    static getAllProduct(page: number): Promise<PageType> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.PRODUCTS_ALL + page,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as PageType;
        }).catch(function (error) {
            throw error
        })
    }

    static getProductsDetails(skuParam: string): Promise<ProductType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.PRODUCTS_DETAILS,
            params: {
                sku: skuParam
            }
        }).then(function (response) {
            return response.data as ProductType[]
        }).catch(function (error) {
            throw error
        })
    }

    static getSearchProduct(ctgName: string, opinionMin: number, opinionMax: number, srhPhrase: string): Promise<ProductType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.PRODUCT_SEARCH,
            params: {
                categoryName: ctgName,
                opinionAvgMax: opinionMax,
                opinionAvgMin: opinionMin,
                searchPhrase: srhPhrase
            }
        }).then(function (response) {
            return response.data as ProductType[];
        }).catch(function (error) {
            throw error
        })
    }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static getAllSuggestions(): Promise<SuggestionsType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.SUGGESTIONS_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as SuggestionsType[];
        }).catch(function (error) {
            throw error
        })
    }

    static getUserSuggestions(): Promise<SuggestionsType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.SUGGESTIONS_USER,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as SuggestionsType[];
        }).catch(function (error) {
            throw error
        })
    }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//

    static getAllUsers(): Promise<UserType[]> {
        return axios({
            method: 'GET',
            url: Global.BASE_URL + Get.USERS_ALL,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        }).then(function (response) {
            return response.data as UserType[];
        }).catch(function (error) {
            throw error
        })
    }
}

export class PostRequest {

    //---------------------------------//
    //       category-controller      //
    //-------------------------------//

    static addCategory(categoryName: string, isVisible: boolean): Promise<CategoryType> {

    const newCategory: CategoryType = {
        name: categoryName,
        visible: isVisible,
    };

    return axios({
        method: 'POST',
        url: Global.BASE_URL + Post.CATEGORIES_ADD,
        headers: {
           Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: newCategory,
    }).then(function (response) {
        return response.data as CategoryType;
    }).catch(function (error) {
        throw error
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
                    skuval: string): Promise<OpinionType> {

        const newOpinion: OpinionType = {
            advantages: adv,
            description: desc,
            disadvantages: disadv,
            opinionValue: oval,
            pictureUrl: picurl,
            sku: skuval
        }

        return axios({
            method: 'POST',
            url: Global.BASE_URL + Post.OPINIONS_ADD,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: newOpinion,
        }).then(function (response) {
            return response.data as OpinionType;
        }).catch(function (error) {
            throw error
        })
        }

    //---------------------------------//
    //       product-controller       //
    //-------------------------------//

    static addProduct(ctgName: string[],
                    desc: string,
                    prodname: string,
                    picurl:string, 
                    skuval: string, 
                    isVisible: boolean): Promise<ProductType> {

        const newProduct: ProductType = {
            categoryNames: ctgName,
            description: desc,
            name: prodname,
            pictureUrl: picurl,
            sku: skuval,
            visible: isVisible
        }

        return axios({
            method: 'POST',
            url: Global.BASE_URL + Post.PRODUCTS_ADD,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: newProduct,
        }).then(function (response) {
            return response.data as ProductType;
        }).catch(function (error) {
            throw error
        })
        }

    //---------------------------------//
    //     suggestions-controller     //
    //-------------------------------//

    static addSuggestion(desc: string, skuval: string): Promise<SuggestionsType> {

        const newSuggestion: SuggestionsType = {
            description: desc,
            sku: skuval
        }

        return axios({
            method: 'POST',
            url: Global.BASE_URL + Post.SUGGESTIONS_ADD,
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            data: newSuggestion,
        }).then(function (response) {
            return response.data as SuggestionsType;
        }).catch(function (error) {
            throw error
        })
        }

    //---------------------------------//
    //         user-controller        //
    //-------------------------------//


    static userLogin(mail: string, pass: string): Promise<TokenType> {

        const LoginUser: UserLoginType = {
            email: mail,
            password: pass,
        };

        return axios({
            method: 'POST',
            url: Global.BASE_URL + Post.USER_LOGIN,
            data: LoginUser,
        }).then(function (response) {
            localStorage.setItem("token", response.data["token"]);
            return response.data as TokenType;
        }).catch(function (error) {
            throw error
        })
        }

    static userRegister(mail: string,
                        fname:string, 
                        lname: string, 
                        pass: string, 
                        admin:boolean, 
                        picurl: string): Promise<UserType> {

        const RegisterUser: UserRegisterType = {
            email: mail,
            firstName: fname,
            isAdmin: admin,
            lastName: lname,
            password: pass,
            pictureUrl:picurl
        };

        return axios({
            method: 'POST',
            url: Global.BASE_URL + Post.USER_REGISTER,
            data: RegisterUser,
        }).then(function (response) {
            return response.data as UserType;
        }).catch(function (error) {
            throw error
        })
        }

}

