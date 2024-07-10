import { Box, Typography } from '@mui/material';
import classComponent from './url.module.scss';
import ButtonPrimary from './ButtonPrimary';

const Action = () => (
  <Box className={classComponent.action}>
    <Typography component="h1" sx={{ fontWeight: 700, margin: 0 }}>
      Boost your links today
    </Typography>
    <ButtonPrimary style={{ transform: 'scaleY(3)' }} />
    {/* <Button variant="outlined">Get Started</Button> */}
  </Box>
);

export default Action;
