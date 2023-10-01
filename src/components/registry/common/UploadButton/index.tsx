import TextField from '@mui/material/TextField'
import { fetchCEPÌnformationAndFill, maskCEPNumber, unmaskCEPNumber } from './hooks';
import { ActionType } from '../../../context/FormReducer';
import { HOCBaseProps } from '../types';
import { useEffect } from 'react';
import { HOCUploadButton } from './types';
import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';



export default function HocUploadButton(props: HOCUploadButton) {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    function imageChanged(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                    props.dispatch({
                        type: props.actionType,
                        payload: event.target.result as string,
                    });
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    }

    return (
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Clique para subir documento
            <VisuallyHiddenInput onChange={imageChanged} type="file" />
        </Button>
    )
}