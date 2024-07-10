import { Box } from '@mui/material';
import illustartion from '@static/images/illustration-working.svg';
import { FormattedMessage } from 'react-intl';
import componentClass from './url.module.scss';
import ButtonPrimary from './ButtonPrimary';

const Hero = () => (
  <Box className={componentClass.hero}>
    <Box className={componentClass.illustration}>
      <img src={illustartion} alt="naru" />
    </Box>
    <Box className={componentClass.content}>
      <h1>
        <FormattedMessage id="app_more_than" />
      </h1>
      <p>
        <FormattedMessage id="app_build_your" />
      </p>
      <ButtonPrimary value={<FormattedMessage id="app_button_get_started" />} />
    </Box>
  </Box>
);

export default Hero;
