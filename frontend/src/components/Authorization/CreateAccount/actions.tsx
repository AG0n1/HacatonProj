import {ICreateAccountDTO} from "../../../types/authTypes.tsx";
import AxiosService from "../../../axios/AxiosService.tsx";
import {API_USER_REGISTER} from "../../../constants/api.tsx";
import {IActionsFormat} from "../../../types/axiosTypes.tsx";
import {AxiosResponse} from "axios";

export const createAccount = async (dto: ICreateAccountDTO): Promise<IActionsFormat<AxiosResponse<ICreateAccountDTO, any> >> => {
    try {
        const {data} = await AxiosService.POST<ICreateAccountDTO>(API_USER_REGISTER, {
            data: dto
        })

        return {
            data,
            ok: true,
        }
    } catch (e) {
        return {
            data: null,
            ok: false,
        }
    }
}