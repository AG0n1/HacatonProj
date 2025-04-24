export interface ILoginDTO {
    email: string;
    password: string;
}

export interface ILogoutDTO {
    userId: string;
}

export interface ICreateAccountDTO {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
}