import React from "react";
import Divider from "@/components/Divider";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden mt-32 text-center mb-4" >
      <Divider width="80%" />

      <p className="text-base leading-7 opacity-70 font-normal">
        info@iolokis.com
        <br />
        All rights reserved © 2025
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <a href="https://www.instagram.com/iolokis/" target="_blank" rel="noopener noreferrer">
          <img
            src="instagram.svg"
            alt="Instagram Logo"
            className="w-6 h-6 filter invert"
          />
        </a>
        <a href="https://www.linkedin.com/company/iolokis/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <img
            src="linkedin.svg"
            alt="LinkedIn Logo"
            className="w-6 h-6 filter invert"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
