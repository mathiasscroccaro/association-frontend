import { Dispatch } from "react"
import { Action, ActionType } from "../../../context/FormReducer"

export type HOCUploadButton = {
    dispatch: Dispatch<Action>,
    actionType: ActionType,
}