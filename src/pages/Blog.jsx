import React from 'react';
import styled from 'styled-components';

const Blog = () => {
  return (
    <BlogWrapper>
      <h1>Blog</h1>
      <p>Coming Soon...</p>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
`;

export default Blog;