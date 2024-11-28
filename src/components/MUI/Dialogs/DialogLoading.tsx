import React from 'react';
import { Dialog, DialogContent,  Typography, Box } from '@mui/material';
import loading from '@/assets/loading.webp';

type LoadingDialogProps = {
  open: boolean;
  message: string;
};

const LoadingDialog: React.FC<LoadingDialogProps> = ({ open, message }) => {
  return (
    <Dialog open={open} fullWidth maxWidth="sm">
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
        <Box sx={{ marginBottom: 0 }}>
          {/* Image displayed above the CircularProgress */}
          <img src={loading.src} alt="Loading" style={{ width: 150, height: 150 }} />
        </Box>
        <Typography variant="h5">{message}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;