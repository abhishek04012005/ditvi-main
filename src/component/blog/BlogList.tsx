'use client';

import Link from "next/link";
import Image from "next/image";
import { blogsContent } from "../../data/blog";
import styles from "./blog.module.css";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function BlogList() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <section className={styles.blogListSection}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Explore inspiring stories, resources, and tips to empower women and
          girls worldwide.
        </p>
      </div>

      <div className={styles.blogList}>
        {blogsContent.map((blog) => (
          <article 
            key={blog.id} 
            className={`${styles.blogCard} ${hoveredCard === blog.id ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredCard(blog.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className={styles.blogImage}
                priority
              />
              <button 
                className={styles.likeButton}
                onClick={(e) => handleLike(blog.id, e)}
                aria-label={likedPosts.has(blog.id) ? "Unlike post" : "Like post"}
              >
                {likedPosts.has(blog.id) ? 
                  <FavoriteIcon className={styles.likedIcon} /> : 
                  <FavoriteBorderIcon />
                }
              </button>
            </div>

            <Link href={`/blog/${blog.slug}`} className={styles.blogLink}>
              <div className={styles.blogContent}>
                <div className={styles.categoryTag}>
                  {blog.category || "Women Empowerment"}
                </div>
                
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>

                <div className={styles.blogMeta}>
                  <div className={styles.metaItem}>
                    <PersonIcon className={styles.metaIcon} />
                    <span>{blog.author || "Ditvi Foundation"}</span>
                  </div>
                  
                  <div className={styles.metaItem}>
                    <CalendarTodayIcon className={styles.metaIcon} />
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>

                  <div className={styles.metaItem}>
                    <AccessTimeIcon className={styles.metaIcon} />
                    <span>{calculateReadTime(blog.content)} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
