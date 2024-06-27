import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, List, Checkbox } from "@mui/material";
import { API_URLS } from "../Service/api.url";
import useApifetch from "../Hooks/useApifetch";
import Email from "../Componants/Email";
import { DeleteOutline } from "@mui/icons-material";
import NoEmail from "./NoEmail";
import { EMPTY_TABS } from "../Constant/constant";

const Emails = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [starredEmail, setStarredEmail] = useState(false);

  const { openDrawer } = useOutletContext();

  const { type } = useParams();

  const getemailService = useApifetch(API_URLS.getEmailFromType);
  const moveEmailsToBin = useApifetch(API_URLS.moveEmailsToBin);
  const deleteEmailsService = useApifetch(API_URLS.deleteEmails);

  useEffect(() => {
    getemailService.call({}, type);
  }, [type, starredEmail]);

  useEffect(() => {
    console.log("Fetched emails:", getemailService.response);
  }, [getemailService.response]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getemailService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = () => {
    if (type === "bin") {
      deleteEmailsService.call(selectedEmails);
    } else {
      moveEmailsToBin.call(selectedEmails);
    }
    setStarredEmail((prevState) => !prevState);
  };

  return (
    <Box
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />

        <DeleteOutline onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getemailService?.response?.map((email) => (
          <Email
            email={email}
            key={email._id}
            selectedEmails={selectedEmails}
            setSelectedEmails={setSelectedEmails}
            setStarredEmail={setStarredEmail}
          />
        ))}
      </List>
      {getemailService?.response?.length === 0 && (
        <NoEmail message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
};

export default Emails;
