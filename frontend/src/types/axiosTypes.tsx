export interface IActionsFormat<T> {
    data: T | null;
    ok: boolean;
}

export interface INestErrorMessage {
    message?: string[];
    statusCode: number;
}