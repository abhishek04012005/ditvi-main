// BlogDetail.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogDetail.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Blog } from '../../data/blog';

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <article className={styles.blogDetail}>
      <div className={styles.headerSection}>
        <Link href="/blog" className={styles.backLink}>
          <ArrowBackIcon /> Back to Blogs
        </Link>
        <div className={styles.categoryTag}>{blog.category || "Women Empowerment"}</div>
      </div>

      <h1 className={styles.title}>{blog.title}</h1>

      <div className={styles.metaInfo}>
        <div className={styles.authorInfo}>
          <PersonIcon />
          <span>{blog.author}</span>
        </div>
        <div className={styles.dateInfo}>
          <CalendarTodayIcon />
          <time dateTime={blog.date}>
            {new Date(blog.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>
        <div className={styles.readTime}>
          <AccessTimeIcon />
          <span>{calculateReadTime(blog.content)} min read</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          priority
          className={styles.featuredImage}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {blog.content}
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.actionButton} ${isLiked ? styles.liked : ''}`}
            onClick={handleLike}
            aria-label={isLiked ? "Unlike post" : "Like post"}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            <span>Like</span>
          </button>

          <button
            className={`${styles.actionButton} ${isShared ? styles.shared : ''}`}
            onClick={handleShare}
            aria-label="Share post"
          >
            <ShareIcon />
            <span>{isShared ? 'Copied!' : 'Share'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
