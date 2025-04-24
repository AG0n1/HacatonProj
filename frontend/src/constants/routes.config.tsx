import {IRoutesGenerator} from "../types/generatorTypes.tsx";
import Login from "../components/Authorization/Login";
import CreateAccount from "../components/Authorization/CreateAccount";

export const logoutUser: IRoutesGenerator[] = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/createAccount',
        element: <CreateAccount />
    }
]

export const authorizedUser: IRoutesGenerator[] = []