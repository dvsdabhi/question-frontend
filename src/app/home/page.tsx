// "use client"

// import React from 'react'
// import FirstSection from './FirstSection';
// import SecondSection from './SecondSection';

// const page = () => {
//   return (
//     <div>
//       <FirstSection />
//       <SecondSection />
//     </div>
//   )
// }

// export default page


"use client";

import React from "react";
import Head from "next/head";  // SEO માટે import
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const Page = () => {
  return (
    <>
      <Head>
        <title>Interview Questions & Answers | Prepare for Your Dream Job</title>
        <meta
          name="description"
          content="Get ready for your interviews with comprehensive interview questions and answers. Boost your confidence and ace your job interview."
        />
        <meta
          name="keywords"
          content="interview questions, interview answers, job interview preparation, coding interview, HR interview tips"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Interview Questions & Answers | Prepare for Your Dream Job" />
        <meta property="og:description" content="Get ready for your interviews with comprehensive interview questions and answers. Boost your confidence and ace your job interview." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interview Questions & Answers | Prepare for Your Dream Job" />
        <meta name="twitter:description" content="Get ready for your interviews with comprehensive interview questions and answers. Boost your confidence and ace your job interview." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.png" />
      </Head>

      <div>
        <FirstSection />
        <SecondSection />
      </div>
    </>
  );
};

export default Page;
