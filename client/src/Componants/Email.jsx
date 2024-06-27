import React from "react";
import { ListItem, Checkbox, Typography, Box, styled } from "@mui/material";
import { StarBorder, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../Service/api.url";
import { routes } from "../routes/route";
import useApifetch from "../Hooks/useApifetch";

const Wrapper = styled(ListItem)`
  padding: 0 0 0 10px;
  background: #f2f6fc;
  cursor: pointer;
  & > div {
    display: flex;
    width: 100%;
  }
  & > div > p {
    font-size: 14px;
  }
`;

const Indicator = styled(Typography)`
  font-size: 12px !important;
  background: #ddd;
  color: #222;
  border-radius: 4px;
  margin-right: 6px;
  padding: 0 4px;
`;

const Date = styled(Typography)({
  margin : "auto",
  marginRight : 546 ,

  fontSize: 12,
  color: "#5F6368",
});

const Email = ({
  email,
  selectedEmails,
  setSelectedEmails,
  setStarredEmail,
}) => {
  const toggleStarredEmailService = useApifetch(API_URLS.toggleStarredEmail);

  const navigate = useNavigate();

  const toggleStarredEmail = () => {
      toggleStarredEmailService.call({ id: email._id, value: !email.starred });
      setStarredEmail(prevState => !prevState);
  }

  const handleChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id !== email._id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };

  return (
    <Wrapper>
      <Checkbox
        size="small"
        checked={selectedEmails.includes(email._id)}
        onChange={() => handleChange()}
      />
      {email.starred ? (
        <Star
          
          fontSize="small"
          style={{ marginRight: 10 , color : "#F4B400" }}
          onClick={() => toggleStarredEmail()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: 10 ,  }}
          onClick={() => toggleStarredEmail()}
        />
      )}
      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        <Typography style={{ width: 200 }}>
          To:{email.to.split("@")[0]}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date className="">
          {new window.Date(email.date).getDate()}&nbsp;
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
