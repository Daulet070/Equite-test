import { useState } from 'react';
import { Fade, Modal, Box, Backdrop, Button } from '@mui/material';

const modal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalContent = {
  bgcolor: 'white',
  color: 'black',
  padding: '1.5rem',
  zIndex: '1',
};

const ModalForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: 'white',
          bgcolor: '#3F51B5',
          borderRadius: '6px',
          padding: '.8rem 1.6rem',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#4256c5',
          },
        }}
      >
        Начать работу
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalContent}>
            <Box>
              <h2 id="transition-modal-title">Добро пожадовать!</h2>
            </Box>
            <Box>
                
            </Box>
            <Box>

            </Box>
            <p id="transition-modal-description">animates me.</p>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalForm;
