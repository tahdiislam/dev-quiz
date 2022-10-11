import React from 'react';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const blogData = [
        {id: 1, question: "What is the purpose of React-Router?", ans: "React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route."},
        {id: 2, question: "How does context api work?", ans: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'props drilling' or moving props from grandparent to child to parent, and so on."},
        {id: 3, question: "Explain the useRef hook.", ans: "Essentially, useRef is like a 'box' that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes."}
    ];
    return (
        <div className='mx-2'>
          <h1 className="text-4xl font-semibold my-4 text-indigo-600">3 Questions you need to know..</h1> 
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                blogData.map(blog => <SingleBlog key={blog.id} blog={blog}/>)
            }
          </div>
        </div>
    );
};

export default Blog;