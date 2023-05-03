import React from 'react';
import { ArrowDownTrayIcon} from '@heroicons/react/24/solid';
import html2pdf from 'html2pdf.js';

/**please install: npm install html2pdf.js */

const Blog = () => {

    const downloadAsPdf = () =>{
        const element = document.getElementById('blog');
        const options = {
          margin: 0.5,
          filename: 'blog.pdf',
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
      };
    return (
        <div className='py-10'>
            <div className='flex justify-around items-center'>
            <p className='text-center my-5 font-blog-qst-font-family font-extrabold text-6xl'>Q&A</p>
            <button onClick={downloadAsPdf}><ArrowDownTrayIcon className='h-8 w-8'/></button>
            </div>
            <div id='blog' >
        {/* Question : 1 section */}
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 1</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Tell us the differences between uncontrolled and controlled components. </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                In React, components can handle user input in two ways: controlled or uncontrolled. They are:
            </p>
            <ol>
                <li>Controlled components use React state to manage the input's value. This gives us more control over the input's behavior and allow us to perform additional validation or manipulation of the input's value.</li>
                <li>Uncontrolled components let the browser handle the input's value. They are simpler to use and require less code, but offer less control and flexibility.</li>
            </ol>
            <p>The choice between the two depends on our specific needs and requirements.</p>
        </div>
        <br />
        {/* Question : 2 section */}
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 2 </span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>How to validate React props using PropTypes? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                React PropTypes is a tool that help us check if the data (props) we are passing into a component is the correct type and format. It's like a spell-checker that prevents us from making mistakes. By using PropTypes, we can catch errors and bugs early in the development process, which can save us time and effort in the long run.
            </p>
        </div>
        <br />
        {/* Question : 3 section */}
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 3</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Tell us the difference between nodejs and express js. </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                Node.js is the underlying technology that allows you to run JavaScript code on the server, while Express.js is a framework that sits on top of Node.js and provides a set of tools and features for building web applications and APIs. Here are some key differences between Node.js and Express.js:
            </p>
            <ol>
                <li>Node.js is a runtime environment for JavaScript, while Express.js is a web application framework built on top of Node.js.</li>
                <li>Node.js provides core features for building server-side applications, while Express.js provides additional features for building web applications and APIs</li>
                <li>Node.js can be used to build a wide range of server-side applications, while Express.js is primarily used for building web applications and APIs.</li>
              
            </ol>
                
        </div>
        <br />
        {/* Question : 4 section */}
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 4</span>
                <br /> 
                <span className='font-blog-qus-font-family font-extrabold text-xl'>What is a custom hook, and why will you create a custom hook? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer: </span>
                <br />
                A custom hook is a function in React that allows us to reuse stateful logic between components, making it easier to create reusable and composable code. It's a way to extract and reuse common code that manages stateful logic and side effects, by leveraging existing React hooks.Its very important that we use in time of need. 

                <br />

               I will create a custom hook for tasting and share components. Creating a custom hook in React can help me to improve reusability, organization, abstraction, and testing of my code. It allow me to encapsulate complex logic and state management into a reusable function, which can be easily shared across components and projects.
            </p>
        </div>
            </div>

    </div>
    );
};

export default Blog;