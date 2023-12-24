import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="flex justify-center items-center flex-col md:p-16">
      <div className="bg-lightest w-4/5 h-auto rounded-2xl shadow py-4">
        <div className="pt-6 ">
          <h1 className="text-5xl font-extralight font-newsreader text-center md:text-right mr-4">
            <span className="text-primary">Adopt</span> <br />
            Don't Shop
          </h1>
        </div>
        <div className="w-1/6 mt-6 border-t border-primary mx-auto border-gray-300 md:hidden"></div>
        <p className="mt-4 text-sm text-center md:text-right mr-4">
          48 The Concourse, Henderson, <br />
          Auckland 0610, New Zealand
        </p>
        <p className="mt-4 text-sm text-center md:text-right mr-4">
          Phone: +64 9 836 7777
        </p>
        <div className="flex  justify-end space-x-4 mr-4 mt-4">
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
