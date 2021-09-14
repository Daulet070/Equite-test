import { Box, Typography } from '@mui/material';

import { FirstIllustration, SecondIllustration } from './illustrations';
import ModalForm from './ModalForm';

const button = <ModalForm />;

const Section = ({ id, title = 'Title', subtitle = 'sub', elem, row }) => (
  <>
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: row,
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          '@media(min-width: 768px)': {
            maxWidth: 'calc(345px - 1rem)',
          },
          '@media(min-width: 992px)': {
            maxWidth: 'calc(407px - 1rem)',
          },
          '@media(min-width: 1140px)': {
            maxWidth: 'calc(550px - 1rem)',
          },
          '@media(min-width: 1200px)': {
            maxWidth: 'calc(570px - 1rem)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.9rem',
          }}
        >
          <Typography
            component={id === 'firstScreen' ? 'h1' : 'h2'}
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'calc(1.4em + 16 * ((100vw - 320px) / (1920 - 320)))',
              fontWeight: '600',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
            }}
          >
            {subtitle}
          </Typography>

          {elem === true ? button : null}
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          '@media(min-width: 768px)': {
            maxWidth: 'calc(407px - 1rem)',
          },
          '@media(min-width: 992px)': {
            maxWidth: 'calc(474px - 1rem)',
          },
          '@media(min-width: 1140px)': {
            maxWidth: 'calc(550px - 1rem)',
          },
          '@media(min-width: 1200px)': {
            maxWidth: 'calc(570px - 1rem)',
          },
        }}
      >
        <Box sx={{ zIndex: '-1' }}>
          {id === 'firstScreen' ? (
            <FirstIllustration />
          ) : (
            <SecondIllustration />
          )}
        </Box>
      </Box>
    </Box>
  </>
);

export default Section;
