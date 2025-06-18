import React, { useState, useRef } from 'react';
import { Video } from '../../data/mockVideos';
import styles from './VideoCard.module.css';

/**
 * Video card with Play & Submit overlays and optional extra metadata.
 */
export const VideoCard: React.FC<{
  video: Video & {
    score?: number;
    timestamp?: number;
    objects?: string[];
    text?: string[];
    dominantColors?: [number, number, number][];
  };
  /** Provide this to make the “Submit” button appear. */
  onSubmit?: (id: string | number, timestamp: number) => void;
}> = ({ video, onSubmit }) => {
  /* overlay visibility */
  const [showPlayer, setShowPlayer] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  /* editable timestamp inside submit overlay */
  const [ts, setTs] = useState(video.timestamp ?? 0);
  const submitVideoRef = useRef<HTMLVideoElement | null>(null);

  /* helpers */
  const closePlayer = () => setShowPlayer(false);
  const closeSubmit = () => {
    setTs(video.timestamp ?? 0);
    setShowSubmit(false);
  };

  return (
    <>
      {/* ────────── PLAYER OVERLAY ────────── */}
      {showPlayer && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={closePlayer}>
              ×
            </button>

            <video
              autoPlay
              controls
              onPlay={e => {
                if (video.timestamp != null) {
                  e.currentTarget.currentTime = video.timestamp - 0.5;
                }
              }}
              style={{ width: '100%', borderRadius: 8, background: '#000' }}
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* ────────── SUBMIT OVERLAY ────────── */}
      {showSubmit && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={closeSubmit}>
              ×
            </button>

            <video
              ref={submitVideoRef}
              autoPlay
              controls
              onPlay={e => {
                if (video.timestamp != null) {
                  e.currentTarget.currentTime = video.timestamp - 0.5;
                }
              }}
              style={{
                width: '100%',
                borderRadius: 8,
                background: '#000',
                marginBottom: 12,
              }}
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>

            <button
              className={styles.small}
              onClick={() =>
                setTs(submitVideoRef.current?.currentTime ?? ts)
              }
            >
              Update timestamp
            </button>

            <div className={styles.tsRow}>
              <span>Timestamp&nbsp;(s)</span>
              <input
                type="number"
                step="0.01"
                min="0"
                value={ts}
                onChange={e => {
                  const v = parseFloat(e.target.value);
                  submitVideoRef.current?.fastSeek?.(v);
                  setTs(v);
                }}
              />
            </div>

            <button
              className={styles.submitBtn}
              onClick={() => {
                onSubmit?.(video.id, ts);
                closeSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* ────────── CARD ────────── */}
      <div className={styles.card}>
        <video
          src={video.videoUrl}
          controls
          width="100%"
          style={{ borderRadius: 8, background: '#000' }}
        />

        <div className={styles.title}>{video.title}</div>

        {video.score !== undefined && (
          <p className={styles.meta}>Score : {video.score.toFixed(3)}</p>
        )}
        {video.timestamp !== undefined && (
          <p className={styles.meta}>
            Timestamp : {video.timestamp.toFixed(3)}&nbsp;s
          </p>
        )}
        {video.objects?.length && (
          <p className={styles.meta}>
            <strong>Objects:</strong> {video.objects.join(', ')}
          </p>
        )}
        {video.text?.length && (
          <p className={styles.meta}>
            <strong>Text:</strong> {video.text.join(', ')}
          </p>
        )}

        {video.dominantColors?.length && (
          <div className={styles.colorRow}>
            {video.dominantColors.map((c, i) => (
              <span
                key={i}
                className={styles.colorDot}
                title={`rgb(${c[0]}, ${c[1]}, ${c[2]})`}
                style={{ background: `rgb(${c[0]}, ${c[1]}, ${c[2]})` }}
              />
            ))}
          </div>
        )}

        <div className={styles.actionsRow}>
          <button className={styles.small} onClick={() => setShowPlayer(true)}>
            Play
          </button>
          {onSubmit && (
            <button
              className={styles.small}
              onClick={() => setShowSubmit(true)}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};
