//---------------------------------//
//         TYPE TEMPLATES         //
//-------------------------------//

export type Category = {
    name: string,
    visible: boolean
}

export type Opinion = {
    advantages: string[],
    description: string,
    disadvantages: string[],
    opinionValue: number,
    pictureUrl: string,
    sku: string
}

export type Product = {
    categoryNames: Category[],
    description: string,
    name: string,
    pictureUrl: string,
    sku: string,
    visible:boolean
}

export type Page = {
    actualPage: number,
    numberOfPages: number,
    products: Product[]
}

export type Suggestions = {
    description: string,
    product: Product,
    review: Review,
    reviewer: Reviewer,
    suggestionId: number,
    user: User
    sku: string
}

export type SuggestionsReply = {
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