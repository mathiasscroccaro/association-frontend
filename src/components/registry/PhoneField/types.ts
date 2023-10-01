import { Dispatch } from "react";
import { Action } from "../../context/FormReducer";

export type HOCPhoneFieldProps = {
    value: string;
    dispatch: Dispatch<Action>;
}