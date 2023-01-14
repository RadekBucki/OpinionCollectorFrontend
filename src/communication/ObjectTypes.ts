//---------------------------------//
//         TYPE TEMPLATES         //
//-------------------------------//

export type Category = {
    categoryName: string,
    visible: boolean
}

export type Opinion = {
    advantages: string[],
    description: string,
    disadvantages: string[],
    firstName: string,
    opinionValue: number,
    opinionAvg: number,
    pictureUrl: string,
    sku: string
}

export type ProductGet = {
    categories: Category[],
    description: string,
    name: string,
    pictureUrl: string,
    sku: string,
    opinionAvg: number,
    visible:boolean
}

export type ProductSend = {
    categoryNames: string,
    description: string,
    name: string,
    pictureUrl: string,
    sku: string,
    visible:boolean
}

export type ProductSearch = {
    categoryName: string,
    opinionAvgMax: number,
    opinionAvgMin: number,
    searchPhrase: string,
}

export type Page = {
    actualPage: number,
    numberOfPages: number,
    products: ProductGet[]
}

export type Suggestion = {
    description: string,
    product: ProductGet,
    review: Review,
    reviewer: Reviewer,
    suggestionId: number,
    user: User,
    sku: string
}

export type SuggestionReply = {
    suggestionId: number,
    suggestionReply: string,
    suggestionStatus: string
}

export type UserLogin = {
    email: string,
    password: string
}

export type User = {
    email: string,
    firstName: string,
    id: number,
    isAdmin: boolean,
    lastName: string,
    pictureUrl:string
}

export type UserEdit = {
    email: string,
    firstName: string,
    isAdmin: boolean,
    lastName: string,
    password: string,
    pictureUrl:string
}

export type Token = {
    token: string,
    type: string,
    user: User
}

export type Review = {
    reply: string,
    status: string
}

export type Reviewer = {
    firstname: string,
    lastname: string,
    profilePictureUrl: string
}