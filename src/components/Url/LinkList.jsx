import { Box, Button, Grid, styled } from '@mui/material';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectShortLinks } from '@containers/App/selectors';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FormattedMessage } from 'react-intl';
import classComponent from './url.module.scss';

const LinkList = ({ shortLinks }) => {
  const [dataSort, setDataSort] = useState([]);
  const CustomButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '14px',
    backgroundColor: 'hsl(180, 66%, 49%)',
    '&:hover': {
      backgroundColor: 'hsl(180, 66%, 40%)',
    },
    textTransform: 'none',
    margin: '0 1rem',
    borderRadius: 5,
  }));
  const CopiedButton = styled(Button)(() => ({
    color: 'white',
    fontSize: '14px',
    backgroundColor: 'hsl(257, 27%, 26%)',
    '&:hover': {
      backgroundColor: 'hsl(257, 27%, 22%)',
    },
    textTransform: 'none',
    margin: '0 1rem',
    fontWeight: 700,
    borderRadius: 5,
  }));
  useEffect(() => {
    console.log(shortLinks);
    const dataShort = [...shortLinks].sort(
      (a, b) => b.date - a.date
      // console.log(a.date);
      // console.log(b.date);
    );
    setDataSort(dataShort);
  }, [shortLinks]);
  const handleCopy = (url) => {
    const updatedItems = dataSort.map((item) => {
      if (item.url === url) {
        // Return a new object with the updated name
        return { ...item, copied: true };
      }
      return item; // Leave other items unchanged
    });
    setDataSort(updatedItems);
  };
  return (
    <Box sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        {dataSort.length > 0 &&
          dataSort.map((link) => (
            <Grid item xs={12}>
              <Box className={classComponent.linkCard} key={classComponent.date}>
                <Box>{link.url}</Box>
                <Box>{link.shrtlnk}</Box>
                <CopyToClipboard text={link.shrtlnk} onCopy={() => handleCopy(link.url)}>
                  {link.copied ? (
                    <CopiedButton>
                      <FormattedMessage id="app_copied" />!
                    </CopiedButton>
                  ) : (
                    <CustomButton>
                      <FormattedMessage id="app_copy" />
                    </CustomButton>
                  )}
                </CopyToClipboard>
                {/* <CustomButton>Copy</CustomButton> */}
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

LinkList.propTypes = {
  shortLinks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  shortLinks: selectShortLinks,
});
export default connect(mapStateToProps)(LinkList);
