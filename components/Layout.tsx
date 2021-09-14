import { Box } from '@mui/system';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <>
    <Sidebar />
    <Box
      component="main"
      sx={{
        flex: '1 1 auto',
      }}
    >
      {children}
    </Box>
  </>
);

export default Layout;
