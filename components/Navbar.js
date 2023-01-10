import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";

import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

//MUI STYLED
import styled from "@mui/system/styled";

import { useState } from "react";

import UserDropDown from "./UserDropDown";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  padding: "0 12px",
  borderRadius: "50px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const shapeCircleStyles = {
  borderRadius: "50%",
  bgcolor: "primary.light",
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Navbar = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          fakebook
        </Typography>
        <FacebookIcon
          fontSize="large"
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />

        <Search>
          <SearchIcon sx={{ fontSize: "25px" }} color="primary" />
          <InputBase
            placeholder="Search…"
            fullWidth
            color="primary"
            sx={{ paddingY: "5px" }}
          />
        </Search>
        <Icons>
          <Badge
            color="error"
            overlap="circular"
            badgeContent="1"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                ...shapeCircleStyles,
                "&:hover": { opacity: "0.7" },
              }}
            >
              <EmailIcon
                fontSize="medium"
                sx={{ color: "primary.contrastText" }}
              />
            </Box>
          </Badge>
          <Badge
            color="error"
            overlap="circular"
            badgeContent="4"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                ...shapeCircleStyles,
                "&:hover": { opacity: "0.7" },
              }}
            >
              <NotificationsIcon
                fontSize="medium"
                sx={{ color: "primary.contrastText" }}
              />
            </Box>
          </Badge>
          <Avatar
            sx={{
              width: 45,
              height: 45,
              "&:hover": {
                cursor: "pointer",
                opacity: "0.7",
              },
            }}
            onClick={(e) => setProfileMenuOpen(true)}
            src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-6/293210518_774537387256658_690953967510167150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEI75fBelGI8pcdosv3Jqk6-erH9xF9KHL56sf3EX0ocpBSfvcZtRJLlMg98Lns2OtlxnSTd9Sk7kUEXmaKQ0vQ&_nc_ohc=tlDwkHQ0dU4AX98_HW0&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfCfat3beL3JljU4psyaWSNkq3uPvEM5y24gygnnamEXOA&oe=63C1A52F"
          />

          <UserDropDown
            profileMenuOpen={profileMenuOpen}
            setProfileMenuOpen={setProfileMenuOpen}
          />
        </Icons>
        <UserBox
          onClick={(e) => setProfileMenuOpen(true)}
          sx={{
            "&:hover": {
              cursor: "pointer",
              opacity: "0.7",
            },
          }}
        >
          <Avatar
            sx={{
              width: 45,
              height: 45,
            }}
            src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-6/293210518_774537387256658_690953967510167150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEI75fBelGI8pcdosv3Jqk6-erH9xF9KHL56sf3EX0ocpBSfvcZtRJLlMg98Lns2OtlxnSTd9Sk7kUEXmaKQ0vQ&_nc_ohc=tlDwkHQ0dU4AX98_HW0&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfCfat3beL3JljU4psyaWSNkq3uPvEM5y24gygnnamEXOA&oe=63C1A52F"
          />
          <Typography>Raphael</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
