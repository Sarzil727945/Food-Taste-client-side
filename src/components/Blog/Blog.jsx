import React from 'react';

const Blog = () => {
     return (
          <div className='mt-5 pt-5'>
               <h1 className='py-lg-5 text-center'>Question Answer</h1>
               <div className='my-5 container'>
                    <div className="accordion" id="accordionExample">
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Tell us the differences between uncontrolled and controlled components?                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>In software engineering </strong>
                                        the terms "uncontrolled components" and "controlled components" refer to two different approaches for building software components that can be reused across different parts of an application.
                                        Uncontrolled components are those that do not have any defined interface or contract with the other parts of the application that use them. This means that any part of the application can modify the state of the uncontrolled component at any time, without any restrictions or guarantees. This can make the behavior of the component difficult to predict, and can lead to bugs and unexpected behavior.
                                        One common example of a controlled component in web development is a form input element. The input element has a well-defined interface (the input value) and a set of rules that govern how it can be used (e.g. data validation, event handlers for user input, etc.). By using controlled components like form inputs, developers can ensure that the behavior of the component is predictable and that it integrates well with the rest of the application.
                                        <br />
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How to validate React props using PropTypes?
                                   </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>PropTypes is the </strong>
                                        React provides a built-in utility called "PropTypes" that allows developers to validate the type and shape of the props passed to a component. This can help catch bugs early in the development process and ensure that the component is used correctly throughout the application.

                                        In this example, we're using the propTypes property of the component to define the expected types of the title and description props. The PropTypes.string validator ensures that the prop is a string, and the .isRequired modifier ensures that the prop is passed to the component.
                                        Here are some other PropTypes validators that you can use:

                                        PropTypes.number, PropTypes.bool, PropTypes.func, PropTypes.array,    PropTypes.object
                                        By using PropTypes to validate props, you can catch errors early and ensure that your components are being used correctly throughout your application.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Tell us the difference between nodejs and express js?
                                   </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>nodejs and express js:  </strong>
                                        Node.js provides a platform for executing JavaScript code on the server side, while Express.js is a framework built on top of Node.js that provides a set of tools and libraries for creating web applications and APIs. Node.js is more general-purpose, while Express.js is focused specifically on web development. Many web developers use Express.js as their preferred framework for building web applications and APIs with Node.js, but there are other Node.js-based frameworks available as well.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is a custom hook, and why will you create a custom hook?
                                   </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <strong>custom hook:  </strong>
                                        In React, a custom hook is a JavaScript function that allows you to reuse stateful logic across multiple components. Custom hooks enable developers to extract and reuse common stateful logic from components, reducing the amount of code duplication and making it easier to maintain and test components.

                                        To create a custom hook, you start by defining a regular JavaScript function that encapsulates the stateful logic you want to reuse. The function should use React's built-in useState and useEffect hooks, and can optionally use other hooks as well. Once you've defined the custom hook, you can use it in any number of components in your application, just like you would use any other hook.

                                        a custom hook is a reusable function that encapsulates stateful logic in React. Custom hooks can help reduce code duplication, improve code organization, and make it easier to maintain and test components. You might create a custom hook when you find yourself repeating the same stateful logic across multiple components in your application.
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Blog;