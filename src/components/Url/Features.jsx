import { Box } from '@mui/material';
import icon1 from '@static/images/icon-brand-recognition.svg';
import icon2 from '@static/images/icon-detailed-records.svg';
import icon3 from '@static/images/icon-fully-customizable.svg';
import { FormattedMessage } from 'react-intl';
import componentClasses from './url.module.scss';

const Features = () => (
  <Box sx={{ mt: 10, position: 'relative' }}>
    {/* Card */}

    <Box className={componentClasses.listFeatures}>
      <Box className={componentClasses.features}>
        <Box className={componentClasses.img}>
          <img src={icon1} alt="icon" />
        </Box>
        <Box>
          <h2 className={componentClasses.title}>
            <FormattedMessage id="app_brand_recognition" />
          </h2>
        </Box>
        <Box>
          <p>
            <FormattedMessage id="app_brand_recognition_p" />
          </p>
        </Box>
      </Box>
      <Box className={componentClasses.features}>
        <Box className={componentClasses.img}>
          <img src={icon2} alt="icon" />
        </Box>
        <Box>
          <h2 className={componentClasses.title}>
            <FormattedMessage id="app_detail_records" />
          </h2>
        </Box>
        <Box>
          <p>
            <FormattedMessage id="app_detail_records_p" />
          </p>
        </Box>
      </Box>
      <Box className={componentClasses.features}>
        <Box className={componentClasses.img}>
          <img src={icon3} alt="icon" />
        </Box>
        <Box>
          <h2 className={componentClasses.title}>
            <FormattedMessage id="app_fully_customizable" />
          </h2>
        </Box>
        <Box>
          <p>
            <FormattedMessage id="app_fully_customizable_p" />
          </p>
        </Box>
      </Box>
    </Box>

    {/* Line */}
    <Box
      sx={{
        position: 'absolute',
        minHeight: 500,
        // backgroundColor: 'aqua',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Box className={componentClasses.lineFeatures} />
    </Box>
  </Box>
);

export default Features;
