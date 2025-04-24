import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import {ru} from "../../../constants/messages.tsx";
import {IFooterConfig} from "../../Layout/Footer";
import {IUFormConfig} from "../../common/UForm";
import cn from "classnames";
import s from "./styles.module.scss";
import {ILoginDTO} from "../../../types/authTypes.tsx";
import {login} from "./actions.tsx";

export const loginFieldsConfig: IAuthFieldsGenerator[] = [
    {
        label: ru.login.email,
        name: 'email',
        type: 'input',
        placeholder: ru.login.placeholders.email,
        required: true,
    },
    {
        label: ru.login.password,
        name: 'password',
        type: 'input',
        placeholder: ru.login.placeholders.password,
        required: true,
    },
]

export const footerConfig: IFooterConfig = {
    label: 'Нет аккаунта?',
    link: 'Создать',
    to: '/createAccount'
}

export const formConfig: IUFormConfig<ILoginDTO> = {
    label: ru.login.label,
    authFieldsConfig: loginFieldsConfig,
    className: cn(s.login_form, s.login_field_width),
    onFinishAction: (values: ILoginDTO) => login(values),
    button: {
        label: ru.buttons.enter,
        className: s.login_button,
    },
    footer: footerConfig,
}