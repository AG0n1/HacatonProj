/// <reference types="vite/client" />
declare global {
    interface String {
        join: () => string;
    }
}
export {};
