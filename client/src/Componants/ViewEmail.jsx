import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useOutletContext, useLocation } from 'react-router-dom';
import { ArrowBack, Delete } from '@mui/icons-material';
import { emptyProfilePic } from '../Constant/constant';
import { format } from 'date-fns';
import { API_URLS } from '../Service/api.url';
import useApifetch from '../Hooks/useApifetch';

const IconWrapper = styled(Box)({
  padding: 15,
  display: 'flex',
  alignItems: 'center',
});

const Timehandle = styled(Box)({
   display : "flex",
   justifyContent : "space-between",
   alignItems : "center",
   paddingRight : "2vw"


})

const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex',
  alignItems: 'center',
});

const Indicator = styled(Box)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-left: 6px;
  padding: 2px 4px;
  align-self: center;
`;

const Image = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  margin: '5px 10px 0 10px',
  backgroundColor: '#cccccc'
});

const Container = styled(Box)({
  marginLeft: 15,
  width: '100%',
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    '& > p > span': {
      fontSize: 12,
      color: '#5E5E5E'
    }
  }
});

const EmailHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #ddd',
  marginBottom: 20,
});

const EmailBody = styled(Typography)({
  whiteSpace: 'pre-wrap',
});

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;

  const formattedDate = format(new Date(email.date), 'PPpp');

   const moveEmailsToBinService = useApifetch(API_URLS.deleteEmails)

  const DeletEmail = () =>{
    moveEmailsToBinService.call([email._id])
    window.history.back()
  }

  return (
    <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' }}>
      <IconWrapper>
        <ArrowBack fontSize='small' color="action" onClick={() => window.history.back()} />
        <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={DeletEmail} />
      </IconWrapper>
      <Subject>{email.subject} <Indicator component="span">Inbox</Indicator></Subject>
      <EmailHeader>
        <Image src={emptyProfilePic} alt="profile" />
        <Container>
          <Timehandle>
            <Typography>
              {email.to.split('@')[0]}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {formattedDate}
            </Typography>
          </Timehandle>
        </Container>
      </EmailHeader>
      <EmailBody className='pl-4'>
        {email.body}
      </EmailBody>
    </Box>
  );
}

export default ViewEmail;
