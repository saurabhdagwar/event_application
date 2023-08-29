import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 ">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center relative bottom-[15px]">
        © 2023{"   "}
        <a href="https://facebook.com/" className="hover:underline">
          Saurabh™
        </a>
        . Event apps Display.
      </span>
    </footer>
  );
};

export default Footer;
