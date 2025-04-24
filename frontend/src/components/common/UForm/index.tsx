import {IAuthFieldsGenerator} from "../../../types/generatorTypes.tsx";
import Footer, {IFooterConfig} from "../../Layout/Footer";
import {Button, Form} from "antd";
import {authFieldsGenerator} from "../../../utils/generators.tsx";

export interface IUFormConfig<T> {
    label: string;
    authFieldsConfig: IAuthFieldsGenerator[];
    button: {
        label: string,
        className: string
    };
    footer: IFooterConfig;
    onFinishAction: (values: T) => any | Promise<any> | void,
    className: string;
}

interface IUForm<T> {
    cfg: IUFormConfig<T>,
}

const UForm = <T,>({cfg}: IUForm<T>) => {
    return (
        <Form
            onFinish={cfg.onFinishAction}
            layout={'vertical'}
            className={cfg.className}
        >
            <h1>{cfg.label}</h1>
            {authFieldsGenerator(cfg.authFieldsConfig)}
            <Button className={cfg.button.className} htmlType={'submit'}>{cfg.button.label}</Button>
            <Footer cfg={cfg.footer} />
        </Form>
    )
}

export default UForm