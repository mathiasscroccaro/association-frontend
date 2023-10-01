import { ActionType } from "../../../context/FormReducer";
import { HOCBaseProps } from "../types";

export type HOCCommonProps = HOCBaseProps & {
    actionType: ActionType,
    label: string,
}