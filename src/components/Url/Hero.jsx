import { Box } from '@mui/material';
import illustartion from '@static/images/illustration-working.svg';
import componentClass from './url.module.scss';
import ButtonPrimary from './ButtonPrimary';

const Hero = () => (
  <Box className={componentClass.hero}>
    <Box className={componentClass.illustration}>
      <img src={illustartion} alt="naru" />
    </Box>
    <Box className={componentClass.content}>
      <h1>More than just shorter link</h1>
      <p>Build your brand&lsquo;s recognition and get detailed insights on how your links are performing</p>
      <ButtonPrimary />
    </Box>
  </Box>
);

export default Hero;
