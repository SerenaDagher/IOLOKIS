import React from "react";
import { Clock, ShieldCheck, Users } from 'lucide-react';

const IconBenefits = ({ img, text }) => {
  const getIcon = () => {
    switch (img) {
      case 'clock':
        return <Clock className="opacity-50 w-12 h-12 sm:w-16 sm:h-16" />;
      case 'shield-check':
        return <ShieldCheck className="opacity-50 w-12 h-12 sm:w-16 sm:h-16" />;
      case 'universal-access-circle':
        return <Users className="opacity-50 w-12 h-12 sm:w-16 sm:h-16" />;
      default:
        return null;
    }
    
  };

  return (
    <div className="flex flex-col items-center gap-6 w-[18.4375rem] max-w-full md:gap-4">
      {getIcon()}
      
      <p className="text-md lg:text-lg md:text-lg font-normal text-center opacity-50 break-words w-full md:text-base">
        {text}
      </p>
    </div>
  );
};

export default IconBenefits;