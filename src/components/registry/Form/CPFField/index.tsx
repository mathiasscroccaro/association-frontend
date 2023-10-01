import TextField from '@mui/material/TextField'
import { maskCPFNumber, unmaskCPFNumber } from './hooks';
import { ActionType } from '../../../context/FormReducer';
import { HOCBaseProps } from '../types';

export default function HocCpfField(props: HOCBaseProps) {
    const maskedValue = maskCPFNumber(props.value);

    function textChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.dispatch({
            type: ActionType.updateCpf,
            payload: unmaskCPFNumber(event.target.value),
        });
    }
    
    return (
        <TextField
            fullWidth
            id=""
            label="CPF"
            onChange={textChanged}
            value={maskedValue}
        />
    )
}