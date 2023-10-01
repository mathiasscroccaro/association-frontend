import { Card, CardMedia, Button, Paper, IconButton } from '@mui/material';
import { HOCImagePreviewProps } from './types';
import CloseIcon from '@mui/icons-material/Close';

export function HocImageCard(props: HOCImagePreviewProps) {
    function removeImage() {
        props.dispatch({
            type: props.actionType,
            payload: props.base64Image,
        })
    }

    return (
        <Paper elevation={3} sx={{ m: 5 }}>
            <CardMedia
                component="img"
                alt="Base64 Image"
                sx={{ height: "300px", objectFit: 'contain' }}
                image={props.base64Image}
            />
            <IconButton color="inherit" onClick={removeImage}>
                <CloseIcon />
            </IconButton>
        </Paper>
    );
}