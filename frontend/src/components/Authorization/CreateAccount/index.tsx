import {formConfig} from "./config.tsx";
import s from '../Login/styles.module.scss'
import {ICreateAccountDTO} from "../../../types/authTypes.tsx";
import UForm from "../../common/UForm";

const CreateAccount = () => {
    return (
        <main
            className={s.main_login}
        >
            <UForm<ICreateAccountDTO>
                cfg={formConfig}
            />
        </main>
    )
}

export default CreateAccount