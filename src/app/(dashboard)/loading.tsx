'use client';
import { IBaseData, Icertificado } from '@/interfaces/types.interface';
import { Collection, OpcionesService } from '@/services/opciones.service';
import {useDocumentsStore, useFacultiesStore, useSubjectsStore} from '@/store/types.stores';
import { CircularProgress, Box, Typography } from '@mui/material';
import React from 'react';

export default function Loading() 
{
    React.useEffect(() => {
        const types = async () => {
            const docs = await OpcionesService.fetchItems<Icertificado>(Collection.Certificados);
            useDocumentsStore.getState().setDocuments(docs);
            const facs = await OpcionesService.fetchItems<IBaseData>(Collection.Facultades);
            useFacultiesStore.getState().setFaculties(facs);
            const subs = await OpcionesService.fetchItems<IBaseData>(Collection.Cursos);
            useSubjectsStore.getState().setSubjects(subs);
        }   
        types(); 
    },[]);
    

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
        >
            <CircularProgress size={60} />
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Cargando...
            </Typography>
        </Box>
    );
}