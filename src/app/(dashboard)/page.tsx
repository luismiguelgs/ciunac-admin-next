import * as React from 'react';
import Grid from '@mui/material/Grid2';
import CardChart from './(components)/CardChart';
import MyPieChart from './(components)/MyPieChart';
import SolicitudesService from '@/services/solicitudes.service';
import MyLineChart from './(components)/MyLineChart';
import MyBarChart from './(components)/MyBarChart';
import { auth } from '@/auth';
import { Typography } from '@mui/material';

async function getData() {
    const res = await SolicitudesService.fetchItemsWODate();
    return res
}

export default async function Page() 
{
    const session = await auth();
    const data = await getData()

    return (
        <Grid container spacing={2}>
            <Grid size={{xs: 12}}>
                <Typography variant='subtitle2' gutterBottom>Bienvenido, {session?.user?.email}</Typography>
            </Grid>
            <Grid size={{xs: 12, sm: 6}}>
                <CardChart title='Solicitudes por Idioma'>
                    <MyPieChart data={data}/>
                </CardChart>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <CardChart title='Solicitudes por mes'>
                    <MyLineChart data={data}/>
                </CardChart>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <CardChart title='Solicitudes por facultad'>
                    <MyBarChart data={data} horizontal={true}/>
                </CardChart>
            </Grid>
            <Grid size={{xs:12, sm:6}}>
                <CardChart title='Solicitudes por estado'>
                    <MyBarChart data={data} horizontal={false}/>
                </CardChart>
            </Grid>
        </Grid>
    );
}