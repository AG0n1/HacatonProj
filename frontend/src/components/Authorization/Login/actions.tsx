import {ILoginDTO, ILogoutDTO} from "../../../types/authTypes.tsx";
import {AxiosResponse} from "axios";
import AxiosService from "../../../axios/AxiosService.tsx";
import {API_USER_LOGIN, API_USER_LOGOUT} from "../../../constants/api.tsx";
import {IActionsFormat} from "../../../types/axiosTypes.tsx";
import {notification} from "antd";

export const login = async (dto: ILoginDTO): Promise<IActionsFormat<AxiosResponse<ILoginDTO, any> >> => {
    try {
        const {data} = await AxiosService.POST<ILoginDTO>(API_USER_LOGIN, {
            data: dto
        })

        return {data, ok: true}
    }
    catch (e) {
        return {
            data: null,
            ok: false,
        }
    }
}

export const logout = async (dto: ILogoutDTO): Promise<void> => {
    try {
        await AxiosService.POST<ILogoutDTO>(API_USER_LOGOUT, {
            data: dto
        })
    }
    catch (e) {
        notification.error({
            message: 'Произошла ошибка!',
            description: 'При попытке выйти из аккаунта произошла неизвестная ошибка. Но Вы всё равно вышли из аккаунта',
        })
    }
    finally {
        localStorage.removeItem('token')
    }
}