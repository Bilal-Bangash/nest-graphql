
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    exampleField: number;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface User {
    exampleField: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    books(): Nullable<Book[]> | Promise<Nullable<Book[]>>;
    user(id: number): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): User | Promise<User>;
}

type Nullable<T> = T | null;
