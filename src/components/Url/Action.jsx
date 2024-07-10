import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import classComponent from './url.module.scss';
import ButtonPrimary from './ButtonPrimary';

const Action = () => (
  <Box className={classComponent.action}>
    <Typography component="h1" sx={{ fontWeight: 700, margin: 0 }}>
      <FormattedMessage id="app_boost" />
    </Typography>
    <ButtonPrimary value={<FormattedMessage id="app_button_get_started" />} style={{ transform: 'scaleY(3)' }} />
    {/* <Button variant="outlined">Get Started</Button> */}
  </Box>
);

export default Action;
