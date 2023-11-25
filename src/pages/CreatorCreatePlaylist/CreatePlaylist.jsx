import { Box } from "@mui/material";
import PlaylistForm from "../../components/forms/playlistform/PlaylistForm";
import { PageTitle, WrapperBox } from "./CreatePlaylistStyle";
import FormPreview from "../../components/forms/playlistpreviewform/FormPreview";
import CreatorVideos from "../../components/templates/creatorvideos/CreatorVideos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCreatorVideo } from "../../redux/slices/creatorVideos";

const CreatePlaylist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreatorVideo(localStorage.getItem("userID")));
  }, []);
  return (
    <WrapperBox>
      <PageTitle>Create Playlist</PageTitle>
      <Box sx={{ display: "flex", mt: "1rem", justifyContent: "space-between",gap: "1rem" }}>
        <Box>
          <PlaylistForm />
          <FormPreview />
        </Box>
        <CreatorVideos />
      </Box>
    </WrapperBox>
  );
};

export default CreatePlaylist;
