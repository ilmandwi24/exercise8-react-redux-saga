import { Box, Button, Input, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { getShortLink } from '@containers/App/actions';
import { connect, useDispatch } from 'react-redux';
import { selectShortLinks } from '@containers/App/selectors';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import componentClass from './url.module.scss';

const Shorten = ({ shortLinks }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [errorInput, setErrorInput] = useState({
    status: false,
    message: '',
  });

  const dispatch = useDispatch();
  const CustomButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '17px',
    backgroundColor: 'hsl(180, 66%, 49%)',
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 40%)',
    },
    textTransform: 'none',
    padding: '10px',
    // m: 0,
    // width: 200,
    // height: 65,
  }));
  function isValidHttpUrl(str) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
  }

  async function handleSubmit(event) {
    if (event.keyCode === 13) {
      if (inputUrl === '') {
        return setErrorInput({ status: true, message: <FormattedMessage id="app_error_blank" /> });
      }
      const checkUrl = isValidHttpUrl(inputUrl);
      if (checkUrl) {
        // setErrorInput(false);
        // await navigator.clipboard.writeText('aa');
        // const findOne = dispatch(getShortLink(inputUrl));
        if (shortLinks.length > 0) {
          const findOne = shortLinks.find((short) => short.url.toLowerCase() === inputUrl.toLowerCase());
          if (findOne) {
            // setErrorInput({ status: true, message: 'Please add a link' });
            return setErrorInput({ status: true, message: <FormattedMessage id="app_error_already" /> });
          }
        }
        dispatch(getShortLink(inputUrl));
        setInputUrl('');
        return setErrorInput({ status: false, message: '' });
        // return alert('yes');
      }
      return setErrorInput({ status: true, message: <FormattedMessage id="app_error_invalid" /> });
      // setErrorInput(true);
    }
  }
  async function handleSubmitButton() {
    if (inputUrl === '') {
      return setErrorInput({ status: true, message: <FormattedMessage id="app_error_blank" /> });
    }

    const checkUrl = isValidHttpUrl(inputUrl);
    if (checkUrl) {
      // setErrorInput(false);
      // await navigator.clipboard.writeText('aa');
      // const findOne = dispatch(getShortLink(inputUrl));
      if (shortLinks.length > 0) {
        const findOne = shortLinks.find((short) => short.url.toLowerCase() === inputUrl.toLowerCase());
        if (findOne) {
          return setErrorInput({ status: true, message: <FormattedMessage id="app_error_already" /> });
        }
      }
      dispatch(getShortLink(inputUrl));
      setInputUrl('');
      return setErrorInput({ status: false, message: '' });
    }
    return setErrorInput({ status: true, message: <FormattedMessage id="app_error_already" /> });
    // setErrorInput(true);
  }

  function handleInput(event) {
    if (event.target.value.length > 0) {
      setErrorInput({ status: false, message: '' });
      setInputUrl(event.target.value);
    }

    setInputUrl(event.target.value);
  }

  useEffect(() => {
    console.log('short', shortLinks);
  }, []);

  return (
    <Box className={componentClass.shorten}>
      <Box className={componentClass.flexInput}>
        <FormattedMessage id="app_input_placeholder" defaultMessage="Enter your link here">
          {(text) => (
            <Input
              placeholder={text}
              className={errorInput.status ? componentClass.error : componentClass.input}
              value={inputUrl}
              onChange={(e) => handleInput(e)}
              onKeyDown={(e) => handleSubmit(e)}
            />
          )}
        </FormattedMessage>

        {errorInput.status === true && (
          <span
            style={{
              fontSize: '12px',
              color: 'hsl(0, 87%, 67%)',
              marginTop: '4px',
              position: 'absolute',
              top: 45,
            }}
            className={componentClass.errorDesktop}
          >
            <i>{errorInput.message}</i>
          </span>
        )}
        {errorInput.status === true && (
          <span
            style={{
              fontSize: '12px',
              color: 'hsl(0, 87%, 67%)',
              // marginTop: '4px',
              // position: 'absolute',
              // top: 45,
            }}
            className={componentClass.errorMobile}
          >
            <i>{errorInput.message}</i>
          </span>
        )}
      </Box>

      <CustomButton onClick={(e) => handleSubmitButton(e)}>Shorten it!</CustomButton>
    </Box>
  );
};

Shorten.propTypes = {
  shortLinks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  shortLinks: selectShortLinks,
});
export default connect(mapStateToProps)(Shorten);
