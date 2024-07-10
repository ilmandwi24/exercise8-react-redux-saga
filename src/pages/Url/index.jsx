import Action from '@components/Url/Action';
import Advanced from '@components/Url/Advanced';
import Features from '@components/Url/Features';
import Footer from '@components/Url/Footer';
import Header from '@components/Url/Header';
import Hero from '@components/Url/Hero';
import Shorten from '@components/Url/Shorten';
import { Box } from '@mui/material';
import LinkList from '@components/Url/LinkList';
import classes from './url.module.scss';

const Url = () => (
  <Box className={classes.container}>
    <Box sx={{ background: 'white', paddingBottom: 15 }}>
      <Header />
      <Hero />
    </Box>
    <Box sx={{ background: 'hsl(230, 19%, 95%)', display: 'flex', flexDirection: 'column' }}>
      <Shorten />
      <LinkList />
      <Advanced />
      <Features />
    </Box>
    <Action />
    <Footer />
  </Box>
);

export default Url;
