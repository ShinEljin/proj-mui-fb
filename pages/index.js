import Link from "../src/Link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { roboto } from "../src/theme";
import AddPost from "../components/AddPost";

export default function Index() {
  const [mode, setMode] = useState("light");
  const [newPostOpen, setNewPostOpen] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar setMode={setMode} />
          <Feed setNewPostOpen={setNewPostOpen} />
          <Rightbar />
        </Stack>
        <AddPost newPostOpen={newPostOpen} setNewPostOpen={setNewPostOpen} />
      </Box>
    </ThemeProvider>
  );
}
