import TextField from '@mui/material/TextField'
import { HOCCommonProps } from './types';

export default function HocCommonField(props: HOCCommonProps) {
    function textChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.dispatch({
            type: props.actionType,
            payload: event.target.value,
        });
    }
    
    return (
        <TextField
            fullWidth
            id=""
            label={props.label}
            onChange={textChanged}
            value={props.value}
        />
    )
}