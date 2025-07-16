// Template for future global state
export type initialStateType = unknown;
export type Action = unknown;
export interface StoreContextType {
    state: initialStateType;
    dispatch: (action: Action) => void;
}