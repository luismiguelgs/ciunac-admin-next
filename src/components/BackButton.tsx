import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {
	fullWidth?: boolean
}

const BackButton = ({fullWidth=false}:Props) => {
  const router = useRouter();

  // Función para navegar atrás
  const handleBack = () => {
    router.back();
  };

  return (
    <Button 
		fullWidth={fullWidth}
      	sx={{mr:1}} 
		onClick={handleBack} 
		variant="contained" 
		color="secondary" 
		startIcon={<ArrowBackIcon />}
	>
        Atras
    </Button>
  );
};

export default BackButton;