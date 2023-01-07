import axios from "axios";
import {Get, Global} from "./EnumEndpoints";
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