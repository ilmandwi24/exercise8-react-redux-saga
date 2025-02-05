import { Button, styled } from '@mui/material';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ value }) => {
  const ColorButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '17px',
    backgroundColor: 'hsl(180, 66%, 49%)',
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 40%)',
    },
    textTransform: 'none',
    padding: '12px 36px',
    borderRadius: 50,
    // m: 0,
    // width: 200,
    // height: 65,
  }));
  return <ColorButton>{value}</ColorButton>;
};

ButtonPrimary.propTypes = {
  value: PropTypes.string,
};
export default ButtonPrimary;
