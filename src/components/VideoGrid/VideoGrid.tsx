// VideoGrid.tsx
import React from 'react'
import { Video } from '../../data/mockVideos'
import { VideoCard } from '../VideoCard/VideoCard'
import { SkeletonGrid } from '../SkeletonGrid/SkeletonGrid'
import styles from './VideoGrid.module.css'

// Responsive grid of video cards
export const VideoGrid: React.FC<{ videos?: Video[] }> = ({ videos }) => {
  if (!videos) return <SkeletonGrid />
  return (
    <div className={styles.gridRoot}>
      {videos.map(v => <VideoCard key={v.id} video={v} />)}
    </div>
  )
}
