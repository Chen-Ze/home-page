import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface FrontUiSongGameSongListDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function FrontUiSongGameSongListDrawer(
  props: PropsWithChildren<FrontUiSongGameSongListDrawerProps>
) {
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
      {props.children}
    </Drawer>
  );
}

export default FrontUiSongGameSongListDrawer;
