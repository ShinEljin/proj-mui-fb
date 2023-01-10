//MUI COMPONENTS
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

//MUI ICONS
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

//MUI STYLED
import styled from "@mui/system/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

export default function AddPost({ newPostOpen, setNewPostOpen }) {
  return (
    <StyledModal open={newPostOpen} onClose={(e) => setNewPostOpen(false)}>
      <Box
        width={550}
        height={360}
        p="20px 25px"
        borderRadius={5}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Typography variant="h5" color="gray" textAlign="center" mb={1}>
          Create post
        </Typography>
        <UserBox>
          <Avatar src="https://scontent.fmnl6-2.fna.fbcdn.net/v/t39.30808-6/293210518_774537387256658_690953967510167150_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEI75fBelGI8pcdosv3Jqk6-erH9xF9KHL56sf3EX0ocpBSfvcZtRJLlMg98Lns2OtlxnSTd9Sk7kUEXmaKQ0vQ&_nc_ohc=qf5W-yAEBGoAX_DjvDW&_nc_ht=scontent.fmnl6-2.fna&oh=00_AfBZb0eUyDB_XkU7V4uYWInvJd9zCZpSZhXWrSPmHoTIJQ&oe=63C1A52F" />
          <Typography>Raphael Enciso</Typography>
        </UserBox>
        <TextField
          variant="standard"
          multiline
          rows={4}
          placeholder="What's on your mind?"
          sx={{ width: "100%" }}
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color="primary" />
          <ImageIcon color="secondary" />
          <VideoCameraBackIcon color="success" />
          <PersonAddIcon color="error" />
        </Stack>

        <Button variant="contained" size="large" fullWidth>
          Post
        </Button>
      </Box>
    </StyledModal>
  );
}
