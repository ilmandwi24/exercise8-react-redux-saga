import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import classes from './url.module.scss';

const Advanced = () => (
  <Box sx={{ textAlign: 'center', marginTop: 10 }} className={classes.advanced}>
    <h2>
      <FormattedMessage id="app_advanced" />
    </h2>
    <p>
      <FormattedMessage id="app_track" />
    </p>
  </Box>
);

export default Advanced;
