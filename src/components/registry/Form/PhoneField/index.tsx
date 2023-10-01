import TextField from '@mui/material/TextField'
import { maskPhoneNumber, unmaskPhoneNumber } from './hooks';
import { ActionType } from '../../../context/FormReducer';
import { HOCBaseProps } from '../types';

export default function HOCPhoneField(props: HOCBaseProps) {
    const maskedValue = maskPhoneNumber(props.value);

    function textChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.dispatch({
            type: ActionType.updatePhoneNumber,
            payload: unmaskPhoneNumber(event.target.value),
        });
    }
    return (
        <TextField
            fullWidth
            id=""
            label="Telefone celular"
            onChange={textChanged}
            value={maskedValue}
        />
    )

}