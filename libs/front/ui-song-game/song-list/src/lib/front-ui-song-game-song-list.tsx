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

interface Song {
  id: string;
  title: string;
  artists: string[];
}

/* eslint-disable-next-line */
export interface FrontUiSongGameSongListProps {
  open: boolean;
  onClose: () => void;
  songList: Song[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function FrontUiSongGameSongList(props: FrontUiSongGameSongListProps) {
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
            selected={songEntry.id === props.selectedId}
            key={songEntry.id}
            onClick={() => {
              props.onSelect(songEntry.id);
              props.onClose();
            }}
          >
            {songEntry.id === props.selectedId && (
              <ListItemIcon>
                <GraphicEqIcon />
              </ListItemIcon>
            )}
            <ListItemText
              primary={
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
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
                    sx={{
                      display: 'inline',
                    }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {songEntry.artists.join(' / ')}
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

export default FrontUiSongGameSongList;
