import { Box, Button, Input, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { getShortLink } from '@containers/App/actions';
import { connect, useDispatch } from 'react-redux';
import { selectShortLinks } from '@containers/App/selectors';
import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import componentClass from './url.module.scss';

const Shorten = ({ shortLinks }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [errorInput, setErrorInput] = useState(false);

  const dispatch = useDispatch();
  const CustomButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '1.0625rem',
    backgroundColor: 'hsl(180, 66%, 49%)',
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 40%)',
    },
    textTransform: 'none',
    padding: '.3125rem',
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
    if (inputUrl === '') {
      return setErrorInput(true);
    }
    if (event.keyCode === 13) {
      const checkUrl = isValidHttpUrl(inputUrl);
      if (checkUrl) {
        // setErrorInput(false);
        // await navigator.clipboard.writeText('aa');
        // const findOne = dispatch(getShortLink(inputUrl));
        if (shortLinks.length > 0) {
          const findOne = shortLinks.find((short) => short.url.toLowerCase() === inputUrl.toLowerCase());
          if (findOne) {
            return alert('sudah ada');
          }
        }
        dispatch(getShortLink(inputUrl));
        setInputUrl('');
        return alert('yes');
      }
      alert('url not valid');
      // setErrorInput(true);
    }
  }
  async function handleSubmitButton(event) {
    if (inputUrl === '') {
      return setErrorInput(true);
    }

    const checkUrl = isValidHttpUrl(inputUrl);
    if (checkUrl) {
      // setErrorInput(false);
      // await navigator.clipboard.writeText('aa');
      // const findOne = dispatch(getShortLink(inputUrl));
      if (shortLinks.length > 0) {
        const findOne = shortLinks.find((short) => short.url.toLowerCase() === inputUrl.toLowerCase());
        if (findOne) {
          return alert('sudah ada');
        }
      }
      dispatch(getShortLink(inputUrl));
      setInputUrl('');
      return alert('yes');
    }
    alert('url not valid');
    // setErrorInput(true);
  }

  function handleInput(e) {
    if (e.target.value.length > 0) {
      setErrorInput(false);
      setInputUrl(e.target.value);
    }
    setInputUrl(e.target.value);
  }

  useEffect(() => {
    console.log('short', shortLinks);
  }, []);

  return (
    <Box className={componentClass.shorten}>
      <Box className={componentClass.flexInput}>
        <Input
          placeholder="Shorten a link here..."
          className={errorInput ? componentClass.error : componentClass.input}
          value={inputUrl}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleSubmit(e)}
        />
        {errorInput && (
          <span
            style={{
              fontSize: '.75rem',
              color: 'hsl(0, 87%, 67%)',
              marginTop: '.25rem',
              position: 'absolute',
              top: 45,
            }}
            className={componentClass.errorDesktop}
          >
            <i>Please add a link</i>
          </span>
        )}
        {errorInput && (
          <span
            style={{
              fontSize: '.75rem',
              color: 'hsl(0, 87%, 67%)',
              // marginTop: '.25rem',
              // position: 'absolute',
              // top: 45,
            }}
            className={componentClass.errorMobile}
          >
            <i>Please add a link</i>
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
