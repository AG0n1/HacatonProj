import {IAuthFieldsGenerator, IRoutesGenerator} from "../types/generatorTypes.tsx";
import {Route} from "react-router-dom";
import {v4 as uuid} from 'uuid'
import Input from "antd/es/input/Input";
import {Button, Form, Select} from "antd";
import {ru} from "../constants/messages.tsx";

export const routesGenerator = (routesConfig: IRoutesGenerator[]) => routesConfig.map((element: IRoutesGenerator) => {
    return (
        <Route
            path={element.path}
            element={element.element}
            key={uuid()}
        >
            {element.child ? routesGenerator([element]) : <></>}
        </Route>
    )
})

export const authFieldsGenerator = (authFieldsConfig: IAuthFieldsGenerator[]) => authFieldsConfig.map((element: IAuthFieldsGenerator) => {
    const defineFieldType = () => {
        switch (element.type) {
            case "input":
                return <Input key={uuid()} className={element.className} placeholder={element.placeholder}/>
            case "button":
                return <Button key={uuid()} className={element.className}>{element.label}</Button>
            case 'select':
                // @ts-ignore
                return <Select key={uuid()} className={element.className} options={element.options} />
        }
    }

    return (
        <Form.Item
            name={element.name}
            rules={[{required: element.required ?? false, message: ru.errors.validationMessage}]}
            key={uuid()}
            label={element.label}
        >
            {defineFieldType()}
        </Form.Item>
    )
})