import blogs from "../../database/blogs.js";
import users from "../../database/users.js";

export const getBlogResolver = (parent, args, context, info) => {
  const { blogId } = args;

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return {
      errors: ["Blog not found"],
      blog: null,
    };
  }

  return {
    errors: [],
    blog: blog,
  };
};

export const getBlogsResolver = (parent, args, context, info) => {
  return {
    errors: [],
    blogs: blogs,
  };
};

export const createBlogResolver = (parent, args, context, info) => {
  const { userId, title, description } = args;

  const user = users.find((user) => user.id === parseInt(userId));

  if (!user) {
    return {
      errors: ["User not found"],
      blog: null,
    };
  }

  const newBlogId = blogs[blogs.length - 1].id + 1;

  const newBlog = {
    id: newBlogId,
    title,
    description,
    completed: false,
    ownerId: userId,
  };

  blogs.push(newBlog);

  return {
    errors: [],
    id: newBlogId,
  };
};
