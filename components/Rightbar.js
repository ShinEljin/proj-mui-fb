import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

//MUI STYLED
import styled from "@mui/system/styled";

import { useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Rightbar = () => {
  const [images, setImages] = useState([
    "https://mui.com/static/images/avatar/1.jpg",
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    "https://mui.com/static/images/avatar/4.jpg",
    "https://mui.com/static/images/avatar/5.jpg",
    "https://mui.com/static/images/avatar/6.jpg",
    "https://mui.com/static/images/avatar/7.jpg",
  ]);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300} mb={1}>
          Online Friends
        </Typography>
        <Box>
          {images.map((image, index) => {
            return (
              <StyledBadge
                key={index}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={image} />
              </StyledBadge>
            );
          })}
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={300} mt={1}>
            Latest Photos
          </Typography>
          <ImageList
            sx={{ width: "100%", maxHeight: 105 }}
            cols={4}
            rowHeight={100}
          >
            {images.map((image, index) => (
              <ImageListItem key={index}>
                <img src={`${image}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight={300} mt={1}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Rightbar;
