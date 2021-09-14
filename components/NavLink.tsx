import { Box } from '@mui/system';
import Link from 'next/link';

const NavLink = ({ text, href, color, width }) => (
  // eslint-disable-next-line @next/next/link-passhref
  <Link href={href} passHref={true}>
    <Box
      component="a"
      sx={{
        color: color,
        cursor: 'pointer',
        padding: '0.7rem 0.5rem',
        textDecoration: 'none',
        width: width,
        '&:hover': {
          color: '#6A7CE0',
        },
      }}
    >
      {text}
    </Box>
  </Link>
);

export default NavLink;
