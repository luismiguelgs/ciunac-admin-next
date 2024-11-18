import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';

type Props = {
    text: string,
    url?: string,
    onClick?:()=>void
}

const NewButton = ({text, url='./nuevo', onClick}:Props) => {
    return (
        <Link href={url}>
            <Button 
                onClick={onClick}
                sx={{mr:1}} 
                variant="contained" 
                color="primary"
                startIcon={<AddBoxIcon />}>
                {text}
            </Button>
        </Link>
    );
};

export default NewButton;