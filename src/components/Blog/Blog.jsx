import React, { useRef } from 'react';
import './Blog.css'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

import Pdf from "react-to-pdf";
import useTitle from '../../hooks/useTitle';
const ref = React.createRef();
const options = {
     orientation: 'portrait',
     unit: 'in',
     format: [9, 16]
};

const Blog = () => {
     useTitle('Blog');

     return (
          <div className='mt-5 pt-5 container'>

               <Pdf targetRef={ref} options={options} x={0.5} y={0.8} scale={0.6}
                    filename="code-example.pdf">
                    {({ toPdf }) => <div className=' position-relative'>
                         <div className=' position-absolute pdfBtn mb-5'>
                              <button onClick={toPdf} className='btn btn-success'> GENERATE PDF <span className=' fs-5'><BsFillArrowDownCircleFill /></span></button>
                         </div>
                    </div>}
               </Pdf>

               <h1 className='py-5 text-center'>Question Answer</h1>
               <div ref={ref}>
                    <div className='row'>
                         <div className='col-lg-6'>
                              <div className="card">
                                   <div className="card-header">
                                        <h5 className="card-title">Tell us the differences between uncontrolled and controlled components?</h5>
                                   </div>
                                   <div className="card-body">

                                        <p className="card-text">   <strong>In software engineering </strong>
                                             the terms "uncontrolled components" and "controlled components" refer to two different approaches for building software components that can be reused across different parts of an application.
                                             Uncontrolled components are those that do not have any defined interface or contract with the other parts of the application that use them. This means that any part of the application can modify the state of the uncontrolled component at any time, without any restrictions or guarantees. This can make the behavior of the component difficult to predict, and can lead to bugs and unexpected behavior.
                                             One common example of a controlled component in web development is a form input element. By using controlled components like form inputs, developers can ensure that the behavior of the component is predictable and that it integrates well with the rest of the application.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='col-lg-6'>
                              <div className="card">
                                   <div className="card-header">
                                        <h5 className="card-title"> How to validate React props using PropTypes?</h5>
                                   </div>
                                   <div className="card-body">
                                        <p className="card-text"><strong>PropTypes is the </strong>
                                             React provides a built-in utility called "PropTypes" that allows developers to validate the type and shape of the props passed to a component. This can help catch bugs early in the development process and ensure that the component is used correctly throughout the application.

                                             In this example, we're using the propTypes property of the component to define the expected types of the title and description props. The PropTypes.string validator ensures that the prop is a string, and the .isRequired modifier ensures that the prop is passed to the component.
                                             Here are some other PropTypes validators that you can use:

                                             PropTypes.number, PropTypes.bool, PropTypes.func, PropTypes.array,    PropTypes.object
                                             By using PropTypes to validate props, you can catch errors early and ensure that your components are being used correctly throughout your application.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='row  my-4'>
                         <div className='col-lg-6'>
                              <div className="card">
                                   <div className="card-header">
                                        <h5 className="card-title">Tell us the difference between nodejs and express js?</h5>
                                   </div>
                                   <div className="card-body">

                                        <p className="card-text"><strong>nodejs and express js:  </strong>
                                             Node.js is a server-side JavaScript runtime environment, while Express.js is a web application framework for Node.js. Node.js provides a platform for executing JavaScript code outside of the browser, while Express.js provides a set of tools and abstractions for building web applications on top of Node.js.

                                             Node.js allows developers to write server-side JavaScript code using the same language they use for client-side programming, enabling full-stack JavaScript development.

                                             Express.js, on the other hand, is a lightweight and flexible web application framework that sits on top of Node.js. It simplifies the process of building web applications by providing a range of features and tools, including routing, middleware, and template engines.

                                             In summary, Node.js is a JavaScript runtime environment that allows developers to write server-side code in JavaScript, while Express.js is a web application framework that provides a range of tools and abstractions for building web applications on top of Node.js.</p>
                                   </div>
                              </div>
                         </div>
                         <div className='col-lg-6'>
                              <div className="card">
                                   <div className="card-header">
                                        <h5 className="card-title">What is a custom hook, and why will you create a custom hook?</h5>
                                   </div>
                                   <div className="card-body">

                                        <p className="card-text"><strong>custom hook:  </strong>
                                             In React, a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks enable developers to extract and reuse common stateful logic from components, reducing the amount of code duplication and making it easier to maintain and test components.

                                             To create a custom hook, you start by defining a regular JavaScript function that encapsulates the stateful logic you want to reuse. The function should use React's built-in useState and useEffect hooks, and can optionally use other hooks as well. Once you've defined the custom hook, you can use it in any number of components in your application, just like you would use any other hook.

                                             a custom hook is a reusable function that encapsulates stateful logic in React. Custom hooks can help reduce code duplication, improve code organization, and make it easier to maintain and test components. You might create a custom hook when you find yourself repeating the same stateful logic across multiple components in your application.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Blog;