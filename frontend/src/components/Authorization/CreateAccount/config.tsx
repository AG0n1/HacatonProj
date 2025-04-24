import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import {IFooterConfig} from "../../Layout/Footer";
import {IUFormConfig} from "../../common/UForm";
import {ICreateAccountDTO} from "../../../types/authTypes.tsx";
import s from "../Login/styles.module.scss";
import {createAccount} from "./actions.tsx";

export const createAccountFieldsConfig: IAuthFieldsGenerator[] = [
    {
        label: ru.createAccount.userName,
        name: 'name',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.email,
        name: 'email',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.password,
        name: 'password',
        type: 'input',
        required: true,
    },
    {
        label: ru.createAccount.passwordRepeat,
        name: 'passwordRepeat',
        type: 'input',
        required: true,
    },
]

export const footerConfig: IFooterConfig = {
    label: 'Уже есть аккаунт?',
    link: 'Войти',
    to: '/login'
}

export const formConfig: IUFormConfig<ICreateAccountDTO> = {
    label: ru.createAccount.label,
    authFieldsConfig: createAccountFieldsConfig,
    className: s.login_form,
    onFinishAction: (values: ICreateAccountDTO) => createAccount(values),
    button: {
        label: ru.buttons.create,
        className: s.login_button,
    },
    footer: footerConfig,
}