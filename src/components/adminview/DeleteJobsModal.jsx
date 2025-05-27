   import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

const DeleteJobsModal = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 600 }}>
        Are you sure to delete this job?
      </DialogTitle>

      <DialogContent>
        <Typography textAlign="center" color="text.secondary">
          This action cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Box display="flex" gap={2}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Confirm
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteJobsModal;
