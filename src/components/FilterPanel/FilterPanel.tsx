import React, { useEffect, useRef, useState } from 'react'
import { Search, RotateCw } from 'lucide-react' 
import styles from './FilterPanel.module.css'

export interface FilterCriteria {
  text?: string
  color?: string
  file?: File | null
}

export const FilterPanel: React.FC<{ onChange: (c: FilterCriteria) => void }> = ({ onChange }) => {
  // Toggle states
  const [enableText, setEnableText] = useState(true)
  const [enableColor, setEnableColor] = useState(false)
  const [enableFile, setEnableFile] = useState(false)
  // Values
  const [text, setText] = useState('')
  const [color, setColor] = useState('#0ea5e9')
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const criteria: FilterCriteria = {}
    if (enableText && text.trim()) criteria.text = text
    if (enableColor && color) criteria.color = color
    if (enableFile && file) criteria.file = file
    onChange(criteria)
  }, [enableText, enableColor, enableFile, text, color, file, onChange])

  // File input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    setFile(f)
  }
  // Drag and drop
  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragActive(true) }
  const handleDragLeave = () => setDragActive(false)
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragActive(false)
    if (e.dataTransfer.files.length > 0) setFile(e.dataTransfer.files[0])
    setEnableFile(true)
  }

    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onChange({ text, color, file }) 
  }

  const handleReset = () => {
    setText('')
    setColor('#0ea5e9')
    setFile(null)
    setEnableText(true)
    setEnableColor(false)
    setEnableFile(false)
  }

  return (
    <div className={styles.panelRoot}>
      {/* Text Filter */}
      <div className={styles.filterRow}>
        <label>
          <input type="checkbox" checked={enableText} onChange={() => setEnableText(v => !v)} />
          <span style={{marginLeft: 8, fontWeight: 600}}>Enable Text Query</span>
        </label>
        {enableText && (
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            className={styles.textInput}
            placeholder="Type to Query…"
            rows={3} 
            style={{marginTop: 8, resize: "vertical"}}
          />

        )}
      </div>
      {/* Color Filter */}
      <div className={styles.filterRow}>
        <label>
          <input type="checkbox" checked={enableColor} onChange={() => setEnableColor(v => !v)} />
          <span style={{marginLeft: 8, fontWeight: 600}}>Enable Color Query</span>
        </label>
        {enableColor && (
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className={styles.colorInput}
          />
        )}
      </div>
      {/* File/Photo/Video Filter */}
      <div className={styles.filterRow}>
        <label>
          <input type="checkbox" checked={enableFile} onChange={() => setEnableFile(v => !v)} />
          <span style={{marginLeft: 8, fontWeight: 600}}>Enable Media Query</span>
        </label>
        {enableFile && (
          <div className={styles.fileRow}>
            <input
              type="file"
              accept="video/*,image/*"
              id="file-upload"
              ref={fileInputRef}
              onChange={handleFileChange}
              className={styles.fileInput}
            />
            <label htmlFor="file-upload" className={styles.fileLabel}>Upload Video/Photo</label>
            {file && <span className={styles.fileName}>{file.name}</span>}
          </div>
        )}
        {enableFile && (
          <div
            className={`${styles.dragZone} ${dragActive ? styles.dragZoneActive : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            tabIndex={0}
          >
            {dragActive ? "Drop your video/photo here!" : "Or drag & drop a video or photo here"}
          </div>
        )}
      </div>

      <div className={styles.filterActions}>

        <button
          type="button"
          className={styles.btnReset}
          onClick={handleReset}
        >
          <RotateCw size={18} style={{marginRight: 8}} />
          Reset
        </button>

        <button
          type="submit"
          className={styles.btnSearch}
        >
          <Search size={18} style={{marginRight: 8}} />
          Search
        </button>


      </div>
    </div>
  )
}
