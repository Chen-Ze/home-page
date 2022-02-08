import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { Song } from '@home-page/shared/data-access/data-access-song-game';

/* eslint-disable-next-line */
export interface FrontSongGameSongListProps {
  open: boolean;
  onClose: () => void;
  songList: Song[];
  currentSongId: string;
  onSelect: (songId: string) => void;
}

export function FrontSongGameSongList(props: FrontSongGameSongListProps) {
  const theme = useTheme();
  const wideScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Drawer
      anchor={wideScreen ? 'right' : 'bottom'}
      open={props.open}
      onClose={props.onClose}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List
        sx={{
          [theme.breakpoints.up('sm')]: {
            width: '360px',
            maxWidth: '100%',
          },
          [theme.breakpoints.down('sm')]: {
            maxHeight: '60vh',
          },
          '& .MuiListItemIcon-root': {
            minWidth: 0,
            marginRight: theme.spacing(1),
          },
        }}
      >
        {props.songList.map((songEntry) => (
          <ListItem
            button
            selected={songEntry.id === props.currentSongId}
            key={songEntry.id}
            onClick={() => {
              props.onSelect(songEntry.id);
              props.onClose();
            }}
          >
            {songEntry.id === props.currentSongId && (
              <ListItemIcon>
                <GraphicEqIcon />
              </ListItemIcon>
            )}
            <ListItemText
              primary={
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  {songEntry.title}
                  <Typography
                    sx={{ display: 'inline', paddingX: theme.spacing(1) }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    -
                  </Typography>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {songEntry.artists.map((artist) => artist.name).join(' / ')}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default FrontSongGameSongList;
