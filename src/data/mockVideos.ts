// src/data/mockVideos.ts

export interface Video {
  id: string
  title: string
  videoUrl: string
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Big Buck Bunny (240p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/240/Big_Buck_Bunny_240_10s_1MB.mp4',
  },
  {
    id: '2',
    title: 'Sintel Trailer (240p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/240/Sintel_240_10s_1MB.mp4',
  },
  {
    id: '3',
    title: 'Tears of Steel (240p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/tears_of_steel/mp4/h264/240/Tears_of_Steel_240_10s_1MB.mp4',
  },
  {
    id: '4',
    title: 'Big Buck Bunny (480p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/480/Big_Buck_Bunny_480_10s_2MB.mp4',
  },
  {
    id: '5',
    title: 'Sintel Trailer (480p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/480/Sintel_480_10s_2MB.mp4',
  },
  {
    id: '6',
    title: 'Tears of Steel (480p, 10s)',
    videoUrl: 'https://test-videos.co.uk/vids/tears_of_steel/mp4/h264/480/Tears_of_Steel_480_10s_2MB.mp4',
  },
]
