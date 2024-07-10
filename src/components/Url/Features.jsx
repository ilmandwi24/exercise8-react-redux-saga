import { Box } from '@mui/material';
import icon1 from '@static/images/icon-brand-recognition.svg';
import icon2 from '@static/images/icon-detailed-records.svg';
import icon3 from '@static/images/icon-fully-customizable.svg';
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
          <h2 className={componentClasses.title}>Brand Recognition</h2>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, rem tenetur saepe quos dolorem molestiae!
          </p>
        </Box>
      </Box>
      <Box className={componentClasses.features}>
        <Box className={componentClasses.img}>
          <img src={icon2} alt="icon" />
        </Box>
        <Box>
          <h2 className={componentClasses.title}>Detailed Records</h2>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, rem tenetur saepe quos dolorem molestiae!
          </p>
        </Box>
      </Box>
      <Box className={componentClasses.features}>
        <Box className={componentClasses.img}>
          <img src={icon3} alt="icon" />
        </Box>
        <Box>
          <h2 className={componentClasses.title}>Fully Customizable</h2>
        </Box>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, rem tenetur saepe quos dolorem molestiae!
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
