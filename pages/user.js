import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useState } from "react";

import AddPost from "../components/AddPost";

export default function User({ setMode }) {
  const [newPostOpen, setNewPostOpen] = useState(false);

  return (
    <Box bgcolor="background.default" color="text.primary">
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar setMode={setMode} />
        <Feed setNewPostOpen={setNewPostOpen} />
        <Rightbar />
      </Stack>
      <AddPost newPostOpen={newPostOpen} setNewPostOpen={setNewPostOpen} />
    </Box>
  );
}
