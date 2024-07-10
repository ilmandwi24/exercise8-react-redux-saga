import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import classesComponent from './url.module.scss';

const Footer = () => (
  <Box className={classesComponent.footer}>
    <h1>Shortly</h1>
    <Box>
      <h3>Features</h3>
      <ul>
        <li>Link shortening</li>
        <li>Branded links</li>
        <li>Analytics</li>
      </ul>
    </Box>
    <Box>
      <h3>Resources</h3>
      <ul>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
    </Box>
    <Box>
      <h3>Company</h3>
      <ul>
        <li> About</li>
        <li>Our Team</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </Box>
    {/* ICON */}
    <Box className={classesComponent.icon}>
      <IconButton>
        <FacebookIcon sx={{ color: 'white' }} fontSize="large" />
      </IconButton>
      <IconButton>
        <TwitterIcon sx={{ color: 'white' }} fontSize="large" />
      </IconButton>
      <IconButton>
        <PinterestIcon sx={{ color: 'white' }} fontSize="large" />
      </IconButton>
      <IconButton>
        <InstagramIcon sx={{ color: 'white' }} fontSize="large" />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
