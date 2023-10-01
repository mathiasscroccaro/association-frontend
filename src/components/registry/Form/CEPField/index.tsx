import TextField from '@mui/material/TextField'
import { fetchCEPÌnformationAndFill, maskCEPNumber, unmaskCEPNumber } from './hooks';
import { ActionType } from '../../../context/FormReducer';
import { HOCBaseProps } from '../types';
import { useEffect } from 'react';

export default function HocCepField(props: HOCBaseProps) {
    useEffect(() => {
        async function fetchData() {
            await fetchCEPÌnformationAndFill(props.value, props.dispatch)
        }
        fetchData();
    }, [props.value])

    const maskedValue = maskCEPNumber(props.value);

    function textChanged(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        props.dispatch({
            type: ActionType.updateCep,
            payload: unmaskCEPNumber(event.target.value),
        });
    }
    
    return (
        <TextField
            fullWidth
            id=""
            label="CEP"
            onChange={textChanged}
            value={maskedValue}
        />
    )
}