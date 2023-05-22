import React from 'react'
import Link from 'next/link';
import idx from '../styles/index.module.css';

export const Blog = () => {
  return (
    <div>
    
    <Link href='/blogpost/Learn'><h1 className={idx.blg}>A BLOG FOR CODING ENTHUSIAST</h1></Link>
    
    
    
    
    </div>
  )
}

export default Blog;
