import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';

type Props = {
    text: string,
    url?: string
}

const NewButton = ({text, url='./nuevo'}:Props) => {
    return (
        <Link href={url}>
            <Button 
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