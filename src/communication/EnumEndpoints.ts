export const BaseUrl = process.env.VUE_APP_BACKEND_URL;

export enum Get {
    CATEGORIES = "/categories",
    CATEGORIES_ALL = "/categories/all",
    OPINIONS_PRODUCT = "/opinions/product",
    OPINIONS_USER = "/opinions/user",
    PRODUCTS = "/products/",
    PRODUCTS_ALL = "/products/all/",
    PRODUCTS_DETAILS = "/products/details",
    PRODUCT_SEARCH = "/products/search",
    SUGGESTIONS_ALL = "/suggestions/get",
    SUGGESTIONS_USER = "/suggestions/user",
    USERS_ALL = "/users"
}

export enum Post {
    CATEGORIES_ADD = "/categories/add",
    OPINIONS_ADD = "/opinions/add",
    PRODUCTS_ADD = "/products/add",
    SUGGESTIONS_ADD = "/suggestions/add",
    USER_LOGIN = "/users/login",
    USER_REGISTER = "/users/register"
}

export enum Put {
    CATEGORIES_EDIT = "/categories/edit",
    PRODUCTS_EDIT = "/products/edit",
    SUGGESTIONS_REPLY = "/suggestions/reply",
    USER_EDIT = "/users/update"
}

export enum Delete {
    CATEGORIES_DELETE = "/categories/delete",
    PRODUCTS_DELETE = "/products/delete"
}