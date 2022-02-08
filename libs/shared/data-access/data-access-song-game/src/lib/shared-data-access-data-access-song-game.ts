export interface LyricsLine {
  content?: string;
}

export interface Artist {
  id: string;
  name: string;
}

export interface Song {
  id: string;
  title: string;
  artists: Artist[];
  lyrics: LyricsLine[];
}

export function sharedDataAccessDataAccessSongGame(): string {
  return 'shared-data-access-data-access-song-game';
}
