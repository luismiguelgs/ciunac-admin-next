import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';

type Props = {
    text: string,
    url?: string,
    onClick?:()=>void,
    link?:boolean
}

const NewButton = ({text, url='./nuevo', onClick, link=true}:Props) => 
{
    return (
        <>{
            link ? (
                <Link href={url}>
                    <Button
                        sx={{mr:1}} 
                        variant="contained" 
                        color="primary"
                        startIcon={<AddBoxIcon />}>
                        {text}
                    </Button>
                </Link>
            ): (
                <Button 
                    onClick={onClick}
                    sx={{mr:1}} 
                    variant="contained" 
                    color="primary"
                    startIcon={<AddBoxIcon />}>
                    {text}
                </Button>
            )
        }</>
    );
};

export default NewButton;