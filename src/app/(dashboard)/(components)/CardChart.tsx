import { Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CardChart(props:{children: React.ReactNode, title: string}) 
{
    return (
        <Card sx={{
            p:2, 
            minWidth: 450,
            //backgroundColor: '#f9f9f9'
        }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                {props.children}
            </CardContent>
            <CardActions>
                {/*<Button size="small">Learn More</Button>*/}
            </CardActions>
        </Card>
    )
}
