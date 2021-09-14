import { useState } from 'react';
import { Drawer, List, Box, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import NavLink from './NavLink';

const linkItems = [
  { href: '/', text: 'Главная', color: 'white', width: '100%' },
  { href: '/blog', text: 'Блог', color: 'white', width: '100%' },
  { href: '/raiting', text: 'Рейтинг', color: 'white', width: '100%' },
];

const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto', padding: '1rem' }}
      >
        <MenuIcon fontSize="large" sx={{ color: 'white' }} />
      </IconButton>
      <Drawer
        anchor="right"
        onClose={() => setOpenDrawer(true)}
        open={!openDrawer}
      >
        <Box component="nav" sx={{ width: '250px' }}>
          <List
            sx={{
              paddingLeft: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              gap: '1.2rem',
            }}
          >
            {linkItems.map((link, i) => (
              <ListItem
                key={i}
                sx={{
                  width: 'auto',
                  padding: '0',
                  '&:hover': {
                    backgroundColor: 'hsl(0deg 0% 100% / 10%)',
                  },
                }}
              >
                <NavLink {...link} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
