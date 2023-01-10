import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

function UserDropDown({ profileMenuOpen, setProfileMenuOpen }) {
  return (
    <Menu
      open={profileMenuOpen}
      onClose={(e) => setProfileMenuOpen(false)}
      onClick={(e) => setProfileMenuOpen(false)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 6,
          ml: -2.5,
          width: "250px",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 22,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      anchorOrigin={{ horizontal: "right", vertical: "top " }}
    >
      <MenuItem>
        <ListItemIcon>
          <Avatar />
        </ListItemIcon>
        Profile
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default UserDropDown;
