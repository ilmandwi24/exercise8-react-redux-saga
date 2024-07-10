import { Box, Button, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import styled from '@emotion/styled';
import ButtonPrimary from './ButtonPrimary';
import componentClass from './url.module.scss';

const Header = () => {
  const ColorButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '18px',
    backgroundColor: 'hsl(180, 66%, 49%)',
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 40%)',
    },
    textTransform: 'none',
    padding: '0px 36px',
    borderRadius: 50,
    // m: 0,
    // width: 200,
    // height: 65,
  }));
  return (
    <Box className={componentClass.header}>
      <h1>Shortly</h1>
      <Box sx={{ flexBasis: 2 }} className={componentClass.menuDesktop}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <span>Features</span>
          <span>Pricing</span>
          <span>Resource</span>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button sx={{ mt: 0.2, color: 'hsl(255, 11%, 22%)' }}>Sign Up</Button>
          <ColorButton>Login</ColorButton>
        </Box>
      </Box>
      <Box sx={{ padding: '0 !important', margin: 0, alignItems: 'center' }} className={componentClass.iconMobile}>
        <IconButton sx={{ margin: 0, padding: 1 }}>
          <MenuRoundedIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        className={componentClass.menuMobile}
        sx={{
          position: 'absolute',
          // bottom: -175,
          top: 75,
          right: 40,
          left: 30,
          background: 'hsl(257, 27%, 26%)',
          zIndex: 1,
          borderRadius: '10px',
          textAlign: 'center',
          py: 5,
          fontWeight: 700,
          fontSize: 18,
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            pb: 3,
            mb: 3,
            borderBottom: '1px solid hsl(257, 7%, 63%)',
            mx: 3,
          }}
        >
          <span>Features</span> <span>Pricing</span> <span>Resources</span>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', mx: 5, borderRadius: '10px', gap: 2 }}>
          <ButtonPrimary>Sign Up</ButtonPrimary>
          {/* <Button variant="contained">Sign Up</Button> */}
          <ButtonPrimary>Belajar</ButtonPrimary>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
