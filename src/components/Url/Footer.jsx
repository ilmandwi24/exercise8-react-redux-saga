import { Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FormattedMessage } from 'react-intl';
import classesComponent from './url.module.scss';

const Footer = () => (
  <Box className={classesComponent.footer}>
    <h1>Shortly</h1>
    <Box>
      <h3>
        <FormattedMessage id="app_header_menu_features" />
      </h3>
      <ul>
        <li>Link shortening</li>
        <li>Branded links</li>
        <li>Analytics</li>
      </ul>
    </Box>
    <Box>
      <h3>
        <FormattedMessage id="app_header_menu_resources" />
      </h3>
      <ul>
        <li>
          <FormattedMessage id="app_resources_blog" />
        </li>
        <li>
          <FormattedMessage id="app_resource_developers" />
        </li>
        <li>
          <FormattedMessage id="app_resource_support" />
        </li>
      </ul>
    </Box>
    <Box>
      <h3>
        <FormattedMessage id="app_company" />
      </h3>
      <ul>
        <li>
          <FormattedMessage id="app_company_about" />
        </li>
        <li>
          <FormattedMessage id="app_company_ourteam" />
        </li>
        <li>
          <FormattedMessage id="app_company_careers" />
        </li>
        <li>
          <FormattedMessage id="app_company_contact" />
        </li>
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
