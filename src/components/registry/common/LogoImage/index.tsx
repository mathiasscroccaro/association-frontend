import logo from '../../../../assets/logo.png'
import CardMedia from '@mui/material/CardMedia'

export default function LogoImage() {
    return (
        <CardMedia
            component="img"
            alt="Base64 Image"
            sx={{ height: "150px", objectFit: 'contain' }}
            image={logo}
        />
    )
}