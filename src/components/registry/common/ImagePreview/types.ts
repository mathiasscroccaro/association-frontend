import { Dispatch } from "react"
import { Action, ActionType } from "../../../context/FormReducer"

export type HOCImagePreviewProps = {
    base64Image: string,
    dispatch: Dispatch<Action>,
    actionType: ActionType,
}