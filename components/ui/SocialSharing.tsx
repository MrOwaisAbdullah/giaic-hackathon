"use client";

import React from "react";
import {
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialSharingProps {
  productUrl: string;
  productTitle: string;
}

const SocialSharing: React.FC<SocialSharingProps> = ({ productUrl, productTitle }) => {
  const shareMessage = `Check out this product: ${productTitle}`;

  // Manual Facebook sharing URL
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Facebook */}
      <button onClick={shareOnFacebook} aria-label="Share on Facebook">
        <FaFacebook size={32} className="text-blue-600 hover:text-blue-700" />
      </button>

      {/* Twitter (X) */}
      <TwitterShareButton url={productUrl} title={shareMessage}>
        <FaTwitter size={32} className="text-blue-400 hover:text-blue-500" />
      </TwitterShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={productUrl} title={shareMessage}>
        <FaWhatsapp size={32} className="text-green-500 hover:text-green-600" />
      </WhatsappShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton url={productUrl} title={shareMessage}>
        <FaLinkedin size={32} className="text-blue-700 hover:text-blue-800" />
      </LinkedinShareButton>

      {/* Email */}
      <EmailShareButton url={productUrl} subject={productTitle} body={shareMessage}>
        <FaEnvelope size={32} className="text-gray-600 hover:text-gray-700" />
      </EmailShareButton>
    </div>
  );
};

export default SocialSharing;