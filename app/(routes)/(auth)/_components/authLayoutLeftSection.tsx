import Image from "next/image";
import React from "react";
import AuthPage from '../../../../public/vectorIllustrations/AuthPage.svg'
const AuthLayoutLeftSection = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <div className="max-w-[80%] text-center">
        <h1 className="text-6xl font-serif font-semibold mb-2">JOBS HUNT</h1>
        <h3 className="text-lg">
          An organized way for candidates to manage their job hunt and for
          companies to discover, connect, and hire the right talent.
        </h3>
    
        <Image src={AuthPage} alt="Auth Page Svg" height={300} width={300} className="mx-auto mt-8"/>
       
      </div>
    </div>
  );
};

export default AuthLayoutLeftSection;
