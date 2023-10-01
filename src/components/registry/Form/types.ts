import { Dispatch } from "react";
import { Action } from "../../context/FormReducer";

export type HOCBaseProps = {
    value: string;
    dispatch: Dispatch<Action>;
}