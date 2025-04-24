import {FC, JSX} from "react";
import {formConfig} from "./config.tsx";
import s from './styles.module.scss'
import {ILoginDTO} from "../../../types/authTypes.tsx";
import UForm from "../../common/UForm";

const Login: FC = (): JSX.Element => {
    return (
        <main
            className={s.main_login}
        >
            <UForm<ILoginDTO>
                cfg={formConfig}
            />
        </main>
    )
}

export default Login