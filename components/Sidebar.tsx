import Image from 'next/image';

import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import NavLink from './NavLink';
import MobileMenu from './MobileMenu';

import logo from '../public/logo-white.png';

const linkItems = [
  { href: '/', text: 'Главная', color: 'white', width: 'fit-content' },
  { href: '/blog', text: 'Блог', color: 'white', width: 'fit-content' },
  { href: '/raiting', text: 'Рейтинг', color: 'white', width: 'fit-content' },
];

const Sidebar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      sx={{
        position: 'static',
        bgcolor: 'transparent',
        boxShadow: 'none',
        padding: '2.5rem 0',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '0',
            '@media (min-width: 600px)': {
              padding: '0',
            },
          }}
        >
          <Image src={logo} alt="Logo" width={50} height={50} />
          {isMatch ? (
            <MobileMenu />
          ) : (
            <>
              <Box component="nav">
                <List
                  sx={{
                    paddingLeft: '2.5rem',
                    display: 'flex',
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
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginLeft: 'auto',
                  zIndex: '1',
                }}
              >
                <NavLink
                  href="/pro"
                  text="Pro"
                  color="inherit"
                  width="conent=fit"
                />
                <NavLink
                  href="/en"
                  text="EN"
                  color="inherit"
                  width="conent=fit"
                />
                <NavLink
                  href="/auth"
                  text="Войти"
                  color="inherit"
                  width="conent=fit"
                />
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    border: '1px solid rgb(255 255 255 / 50%)',
                    padding: '.5rem 1.9rem',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#6A7CE0',
                    },
                  }}
                >
                  Зарегистрироваться
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Sidebar;
