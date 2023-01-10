import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";

import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ModeNight from "@mui/icons-material/ModeNight";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

//MUI STYLED
import styled from "@mui/system/styled";

import { useState } from "react";

const listItems = [
  {
    icon: <HomeIcon sx={{ fontSize: "25px" }} />,
    text: "Homepage",
  },
  {
    icon: <ArticleIcon sx={{ fontSize: "25px" }} />,
    text: "Pages",
  },
  {
    icon: <GroupIcon sx={{ fontSize: "25px" }} />,
    text: "Groups",
  },
  {
    icon: <StorefrontIcon sx={{ fontSize: "25px" }} />,
    text: "Marketplace",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: "25px" }} />,
    text: "Friends",
  },
  {
    icon: <SettingsIcon sx={{ fontSize: "25px" }} />,
    text: "Settings",
  },
  {
    icon: <AccountBoxIcon sx={{ fontSize: "25px" }} />,
    text: "Profile",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Sidebar = ({ setMode }) => {
  const [newPostOpen, setNewPostOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          flex: { xs: 0.75, lg: 2 },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Box
          position="fixed"
          sx={{ width: { xs: "50px", sm: "75px", md: "100px", lg: "300px" } }}
        >
          <List>
            {listItems.map((listItem) => {
              return (
                <ListItem disablePadding key={listItem.text}>
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: { xs: 0, md: 3 },
                      }}
                    >
                      {listItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={listItem.text}
                      sx={{ display: { xs: "none", lg: "block" } }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ display: { xs: "none", lg: "block" } }}>
                  <ModeNight />
                </ListItemIcon>
                <Switch
                  onChange={() =>
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    )
                  }
                  sx={{
                    minWidth: 0,
                    mr: { xs: 0, md: 3 },
                  }}
                  size="small"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};
export default Sidebar;
