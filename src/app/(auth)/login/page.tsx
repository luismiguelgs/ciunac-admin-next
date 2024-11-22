import { VERSION } from '@/lib/constants';
import { Avatar, Box, Paper, Typography, TypographyProps } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Image from 'next/image';
import LoginForm from './LoginForm';

function Copyright(props: TypographyProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://ciunac.unac.edu.pe/">
                CIUNAC
            </Link>
            {` ${new Date().getFullYear()}. version: ${VERSION}`}
        </Typography>
    );
}

export default function LoginPage() 
{
    return (
        <Grid container component='main' sx={{
            height: '100vh',
            width: '100%',
            backgroundImage: 'url(unsplash.jpg)',
            backgroundRepeat: 'no-repeat',
            
        }}>
            <Grid size={{xs: 12, sm: 8, md:5}} component={Paper} elevation={6} square sx={{
                margin: { xs: '0 auto', md: '0' }, // Center on mobile
                marginLeft: { md: '5%' },
                marginTop: {md: '2%'},
                marginBottom: {md: '2%'}, // Float to the left on larger screens
                width: { xs: '90%', sm: '70%', md: '40%' }, // Responsive width
            }}>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Image src='/logo-ciunac.jpg' alt="Logo CIUNAC" width={360} height={100} />
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingresar
                    </Typography>
                    {/**FORM */}
                    <LoginForm />
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Grid>
        </Grid>
    )
}

