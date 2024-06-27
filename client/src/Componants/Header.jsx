import React from "react";

import { AppBar, Toolbar, styled, Box, InputBase } from "@mui/material";
import {
  Menu as Menuicon,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
  Search,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { gmailLogo } from "../Constant/constant";

const StyleAppbar = styled(AppBar)({
  background: "#F6F8FC",
  boxShadow: "none",
});
const SearchWraper = styled(Box)`
  background: #eaf1fb;
  margin-left: 80px;
  border-radius: 100px;
  min-width: 690px;
  max-width: 720px;
  height: 48px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100%;
  }
`;

const OptionsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  & > svg {
    margin-left: 20px;
  }
`;

const Header = ({ toggleDrawer }) => {
  return (
    <StyleAppbar position="static">
      <Toolbar>
        <Menuicon color="action" className="cursor-pointer"  onClick={toggleDrawer} />
        <img src={gmailLogo} className="mx-[2vw]" alt="gmail logo" />

        <SearchWraper>
          <SearchIcon color="action" />
          <InputBase />
          <Tune color="action" />
        </SearchWraper>
        <OptionsWrapper>
          <HelpOutlineOutlined  color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyleAppbar>
  );
};

export default Header;
