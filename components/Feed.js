import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import Post from "./Post";

const Feed = ({ setNewPostOpen }) => {
  return (
    <Stack flex={4} py={2} alignItems="center">
      <Card
        sx={{
          marginBottom: "15px",
          width: "100%",
          maxWidth: { xs: "500px", xl: "700px" },
        }}
      >
        <CardContent>
          <Stack direction="row" alignItems="center" gap={1} mb={2}>
            <Avatar src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-6/293210518_774537387256658_690953967510167150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEI75fBelGI8pcdosv3Jqk6-erH9xF9KHL56sf3EX0ocpBSfvcZtRJLlMg98Lns2OtlxnSTd9Sk7kUEXmaKQ0vQ&_nc_ohc=qf5W-yAEBGoAX_DjvDW&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfBZb0eUyDB_XkU7V4uYWInvJd9zCZpSZhXWrSPmHoTIJQ&oe=63C1A52F" />

            <TextField
              variant="outlined"
              placeholder="What's on your mind?"
              size="small"
              sx={{ width: "100%" }}
              onClick={(e) => setNewPostOpen(true)}
            />
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="flex-start" gap={3} mt={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
        </CardContent>
      </Card>
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};
export default Feed;
