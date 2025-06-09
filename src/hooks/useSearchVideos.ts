import { mockVideos, Video } from '../data/mockVideos'
import { FilterCriteria }   from '../components/FilterPanel/FilterPanel'

// Fake hook: filters mockVideos in memory
export function useSearchVideos(criteria: FilterCriteria): Video[] {
  if (!criteria.text) return mockVideos
  const q = criteria.text.toLowerCase()
  return mockVideos.filter(v => v.title.toLowerCase().includes(q))
}
