import React from 'react'
import { NavLink } from 'react-router-dom'
const BlogsDetails = ({post}) => {
  return (
    <div className='mt-[50px]'>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p>
            By 
            <span>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "_")}`}>
              <span>{post.category}</span>
            </NavLink>
        </p>
        <p> Posted on {post.data}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag, index) =>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "_")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default BlogsDetails