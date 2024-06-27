import { useState } from "react";

import {
  Dialog,
  styled,
  Typography,
  Box,
  InputBase,
  TextField,
  Button,
} from "@mui/material";
import { Close, DeleteOutline, Subject } from "@mui/icons-material";
import useApifetch from "../Hooks/useApifetch";
import { API_URLS } from "../Service/api.url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #f2f6fc;
  & > p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const RecipientWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  & > div {
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
    margin-top: 10px;
  }
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const SendButton = styled(Button)`
  background: #0b57d0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`;

const ComposeMail = ({ open, setOpenDrawer }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApifetch(API_URLS.saveEmail);
  const saveDraftService = useApifetch(API_URLS.saveDraftEmails);
  

  const config = {
    Username: "adityakamble9245@gmail.com",
    Password: "0E01F6BC147D6A15D247BA8667A3D52B03F4",
    // Username: process.env.REACT_APP_USERNAME,
    // Password: process.env.REACT_APP_PASSWORD,
    Host: "smtp.elasticemail.com",
    Port: 2525,
  };

  // const onValueChange = (e) => {
  //     setData({ ...data, [e.target.name]: e.target.value })
  // }

  const sendEmail =  (e) => {
    e.preventDefault()

    if(window.Email){
        window.Email.send({
            ...config,
            To : data.to,
            From : "adityakamble9245@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
            massage => alert(`${massage} Mail send succesfully`)
        )
    }
   

    setOpenDrawer(false);

    const payload = {
        to : data.to,
        from : "adityakamble9245@gmail.com",
        subject : data.subject,
        body : data.body,
        date: new Date(),
        image: '',
        name: 'Aditya kamble',
        starred: false,
        type: 'sent'
    }

    sentEmailService.call(payload);

    if (!sentEmailService.error) {
        setOpenDrawer(false);
        setData({});
    } else {

    }


    



  };

  const closeComposeMail = (e) => {
      e.preventDefault();

     

      const payload = {
          to : data.to,
          from : "adityakamble9245@gmail.com",
          subject : data.subject,
          body : data.body,
          date: new Date(),
          image: '',
          name: 'Aditya Kamble',
          starred: false,
          type: 'drafts'
      }

      saveDraftService.call(payload);

      if (!saveDraftService.error) {
          setOpenDrawer(false);
          setData({});
      } else {

      }
  }

  const onValueChange = (e) => {
    e.preventDefault();
    setData({...data , [e.target.name]: e.target.value})


   



  };

  return (
    <Dialog open={open} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick = {(e) => closeComposeMail(e)} />
      </Header>
      <RecipientWrapper>
        <InputBase placeholder="Recipients" name="to" onChange={(e) => onValueChange(e)}
        value={data.to} />
        <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)}
        value={data.subject} />
      </RecipientWrapper>
      <TextField
        multiline
        rows={14}
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
        name="body"
        onChange={(e) => onValueChange(e)}
        value={data.body}
      />
      {/* onClick={() => onComposeClick()} */}
      <Footer>
        <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
        <DeleteOutline onClick={() => setOpenDrawer(false)} />
      </Footer>
      
    </Dialog>
  );
};

export default ComposeMail;
