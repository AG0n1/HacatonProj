import {JSX} from "react";
import {IOptions} from "./commonTypes.tsx";

const fieldTypeNames = ['input', 'select', 'button'] as const;
type FieldTypeNamesType = (typeof fieldTypeNames)[number];

export interface IRoutesGenerator {
    path: string;
    element: JSX.Element;
    child?: IRoutesGenerator[];
}

export interface IAuthFieldsGenerator {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    type: FieldTypeNamesType;
    options?: IOptions;
    action?: () => any | Promise<any>,
    className?: string,
}