//---------------------------------//
//         TYPE TEMPLATES         //
//-------------------------------//

export type CategoryType = {
    name: string,
    visible: boolean
}

export type OpinionType = {
    advantages: string[],
    description: string,
    disadvantages: string[],
    opinionValue: number,
    pictureUrl: string,
    sku: string
}

export type ProductType = {
    categoryNames: string[],
    description: string,
    name: string,
    pictureUrl: string,
    sku: string,
    visible:boolean
}

export type PageType = {
    actualPage: number,
    numberOfPages: number,
    products: ProductType[]
}

export type SuggestionsType = {
    description: string,
    sku: string
}

export type SuggestionsReplyType = {
    suggestionId: number,
    suggestionReply: string,
    suggestionStatus: string
}

export type UserLoginType = {
    email: string,
    password: string
}

export type UserRegisterType = {
    email: string,
    firstName: string,
    isAdmin: boolean,
    lastName: string,
    password: string,
    pictureUrl:string
}

export type UserEditType = {
    email: string,
    firstName: string,
    isAdmin: boolean,
    lastName: string,
    password: string,
    pictureUrl:string
}

export type UserType = {
    email: string,
    firstName: string,
    id: number,
    isAdmin: boolean,
    lastName: string,
    pictureUrl:string
}

export type TokenType = {
    token: string,
    type: string,
    user: UserType
}

export type ReviewType = {
    reply: string,
    status: string
}

export type ReviewerType = {
    firstname: string,
    lastname: string,
    profilePictureUrl: string
}

export type ReplySuggestionType = {
    description: string,
    product: ProductType,
    review: ReviewType,
    reviewer: ReviewerType,
    suggestionId: number,
    user: UserType
}

