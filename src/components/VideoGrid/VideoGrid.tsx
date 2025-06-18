import React from 'react';
import { Video } from '../../data/mockVideos';
import { VideoCard } from '../VideoCard/VideoCard';
import styles from './VideoGrid.module.css';

/** Responsive grid of cards */
export const VideoGrid: React.FC<{
  videos: Video[] | undefined;
  onSubmit?: (id: string | number, timestamp: number) => void;
}> = ({ videos, onSubmit }) => {
  if (!videos) return <p>Loading …</p>;          /* simple fallback */

  return (
    <div className={styles.gridRoot}>
      {videos.map(v => (
        <VideoCard key={v.id} video={v} onSubmit={onSubmit} />
      ))}
    </div>
  );
};
