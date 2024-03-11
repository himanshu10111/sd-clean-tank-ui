import React from 'react';
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
  <FooterTitle text="Contact" />
  <FooterLink text="SD Tank Water Cleaning Services," />
  <FooterLink text=" Service Center 440013" />
  <FooterLink text=" +91 8698651987" />
  <FooterLink text="SDWaterCelening@service.com" />
</StackColumn>

      <StackColumn>
        <FooterTitle text={'Our Services'} />
        <FooterLink text={'Tank Cleaning'} />
        <FooterLink text={'Maintenance'} />
        <FooterLink text={'Repair'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'About Us'} />
        <FooterLink text={'Our Mission'} />
        <FooterLink text={'Team'} />
        <FooterLink text={'Testimonials'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'SD Water cleaning '} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 Himanshu Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer;