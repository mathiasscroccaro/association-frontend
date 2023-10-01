import TextField from '@mui/material/TextField'
import { maskRGNumber, unmaskRGNumber } from './hooks';
import { ActionType } from '../../../context/FormReducer';
import { HOCBaseProps } from '../types';

export default function HocRgField(props: HOCBaseProps) {
    const maskedValue = maskRGNumber(props.value);

    function textChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.dispatch({
            type: ActionType.updateRg,
            payload: unmaskRGNumber(event.target.value),
        });
    }
    
    return (
        <TextField
            fullWidth
            id=""
            label="RG"
            onChange={textChanged}
            value={maskedValue}
        />
    )
}