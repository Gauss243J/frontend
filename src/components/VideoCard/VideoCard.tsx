import React from 'react'
import { Video } from '../../data/mockVideos'
import styles from './VideoCard.module.css'

export const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <div className={styles.card}>
    <video src={video.videoUrl} controls width="100%" style={{ borderRadius: 8, background: "#000" }} />
    <div className={styles.title}>{video.title}</div>
  </div>
)
