import React from 'react';

const Blogs = () => {

    return (
        <div className='container my-5'>
            <div className="card">
                <div className="card-body">
                    <h1>
                        What is context api?
                    </h1>
                    <p className='card-text'>
                        In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.
                    </p>
                    <h1>
                        What is semantic tag in html?
                    </h1>
                    <p className='card-text'>
                        A semantic element clearly describes its meaning to both the browser and the developer.
                        <br />
                        Example:
                        <br />
                        1. article
                        <br />
                        2. aside
                        <br />
                        3. details
                        <br />
                        4. figcaption
                        <br />
                        5. figure
                        <br />
                        6. footer
                        <br />
                        7. header
                        <br />
                        8. main
                        <br />
                        9. mark
                        <br />
                        10. nav
                        <br />
                        11. section
                        <br />
                        12. summary
                        <br />
                        13. time
                    </p>
                    <h1>Inline block vs Inline Block Element?</h1>
                    <p className="card-text">
                        Inline Block:
                        <br />
                        This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects.
                        <br />
                        block property:
                        <br />
                        . span
                        . a
                        . img
                        <br />
                        <br />
                        Block Element:
                        <br />
                        Displays an element as an inline-level block container. You CAN set height and width values.
                        <br />
                        Here are a few elements that have a default block property:
                        <br />
                        . div
                        . h1
                        . p
                        . li
                        . section
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;