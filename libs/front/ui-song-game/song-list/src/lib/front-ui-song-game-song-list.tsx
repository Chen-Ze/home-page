import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { useEffect, useRef } from 'react';

interface Song {
  id: string;
  title: string;
  artists: string[];
}

/* eslint-disable-next-line */
export interface FrontUiSongGameSongListProps {
  songList: Song[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function FrontUiSongGameSongList(props: FrontUiSongGameSongListProps) {
  const theme = useTheme();
  const selectedSongItemRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    console.log(selectedSongItemRef.current);
    selectedSongItemRef.current?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }, [selectedSongItemRef, props.selectedId, props.songList]);

  return (
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
      {props.songList.map((song) => (
        <ListItem
          ref={song.id === props.selectedId ? selectedSongItemRef : null}
          selected={song.id === props.selectedId}
          key={song.id}
          onClick={() => {
            props.onSelect(song.id);
          }}
          disablePadding
        >
          <ListItemButton>
            {song.id === props.selectedId && (
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
                  {song.title}
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
                    {song.artists.join(' / ')}
                  </Typography>
                </Box>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default FrontUiSongGameSongList;
