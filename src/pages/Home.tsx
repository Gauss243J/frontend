import React, { useState } from 'react'
import { FilterPanel, FilterCriteria } from '../components/FilterPanel/FilterPanel'
import { VideoGrid } from '../components/VideoGrid/VideoGrid'
import { mockVideos } from '../data/mockVideos'
import styles from './Home.module.css'

export const Home: React.FC = () => {
  const [criteria, setCriteria] = useState<FilterCriteria>({})

  const filteredVideos = mockVideos.filter(video =>
    !criteria.text || video.title.toLowerCase().includes(criteria.text.toLowerCase())
  )

  return (
    <main className={styles.mainRoot}>
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <FilterPanel onChange={setCriteria} />
        </div>
        <div className={styles.content}>
          <VideoGrid videos={filteredVideos} />
        </div>
      </div>
    </main>
  )
}



