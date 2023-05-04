/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";

const Blogs = () => {

  const ref = useRef();

    const options = {
        orientation: "landscape",
    };

    // eslint-disable-next-line no-unused-vars
    const downloadPdf = () => {
        if (typeof window !== "undefined") {
            const pdf = new window.JSPDF("l", "mm", "a4");
            pdf.addHTML(ref.current, options, () => {
                pdf.save("questions.pdf");
            });
        }
    };
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto divide-y-2 divide-gray-200">
        <div className="flex items-center justify-between lg:flex-row flex-col">
        <h2 className="text-3xl font-serif font-extrabold text-gray-900 sm:text-4xl font-serif">
          Frequently asked questions
        </h2>
        <ReactToPdf targetRef={ref} filename="questions.pdf">
                    {({ toPdf }) =>
                        <button onClick={toPdf} className="d-btn">
                            Download PDF
                        </button>}
          </ReactToPdf>
        </div>
        <dl ref={ref} className="mt-6 space-y-6 divide-y divide-gray-200">
          <div className="pt-6 card bg-white shadow-lg px-6 lg:px-12 py-8">
            <dt className="text-2xl font-semibold text-gray-900">
              1. Tell us the differences between uncontrolled and controlled
              components.?
            </dt>
            <dd className="mt-2 text-lg text-gray-500">
              In one sentence I can say that All that components which are
              controlled by react this are the controlled components and All
              that components which react can not control by himself it is
              controlled by the DOM(Document Object Modal) React simply reads it
              when necessary. In an uncontrolled component, you typically use
              the `ref` attribute to get the value of the input element.
            </dd>
          </div>
          <div className="pt-6 card bg-white shadow-lg px-6 lg:px-12 py-8">
            <dt className="text-2xl font-semibold text-gray-900">
              2. How to validate React props using PropTypes.?
            </dt>
            <dd className="mt-2 text-lg text-gray-500">
              In react propTypes is a method that ensure that the props we are
              receiving are of the correct datatype. Props allow us to send data
              to any component. In many ways we can validate react props using
              ProTypes. they are:{" "}
              <p>
                {" "}
                <span className="text-xl font-semibold">
                  PropTypes.string:
                </span>{" "}
                Validates that the prop is a string
              </p>
              <p>
                {" "}
                <span className="text-xl font-semibold">
                  PropTypes.number:
                </span>{" "}
                Validates that the prop is a number,
              </p>
              <p>
                {" "}
                <span className="text-xl font-semibold">
                  PropTypes.bool:
                </span>{" "}
                Validates that the prop is a boolean,
              </p>
              <p>
                {" "}
                <span className="text-xl font-semibold">
                  PropTypes.object:
                </span>{" "}
                Validates that the prop is an object
              </p>
              <p>
                {" "}
                <span className="text-xl font-semibold">
                  PropTypes.array:
                </span>{" "}
                Validates that the prop is an array.
              </p>
              etc...{" "}
            </dd>
          </div>
          <div className="pt-6 card bg-white shadow-lg px-6 lg:px-12 py-8">
            <dt className="text-2xl font-semibold text-gray-900">
              3. Tell us the difference between nodejs and express js?
            </dt>
            <dd className="mt-2 text-lg text-gray-500">
              Node.js (Node) is an open source, cross-platform runtime
              environment for executing JavaScript code. On the other hand  express is a web application framework that is built on top of Node.js. Node.js does not provide in tools features out of the box functionalities. On the other hand express makes developers life easier it provides may kinds of tools and features to the developers.
            </dd>
          </div>
          <div className="pt-6 card bg-white shadow-lg px-6 lg:px-12 py-8">
            <dt className="text-2xl font-semibold text-gray-900">
              4. What is a custom hook, and why will you create a custom hook?
            </dt>
            <dd className="mt-2 text-lg text-gray-500">
              A hook that may call other hooks and its name starts with use that what we call custom hooks. we can create custom hooks in many purpose one of them are reusability you can reuse a custom hook anywhere you want. Testing purpose with custom hooks you can test your applications and you can find your bugs easily. Maintainability you can maintain it how ever you want. So,custom hook is makes our life easier. 
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Blogs;
