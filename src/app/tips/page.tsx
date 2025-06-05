'use client';

import React from 'react';
import Head from 'next/head';
// import TipsList from '@/components/TipsList';
import dynamic from 'next/dynamic';

// ✅ Lazy load the component — no server-side rendering
const TipsList = dynamic(() => import('@/components/TipsList'), {
  ssr: false, // disable SSR for this component
});

export default function TipsPage() {
  return (
    <>
      <Head>
        <title>Career & Interview Tips - YourSiteName</title>
        <meta name="description" content="Explore expert career, resume, interview, and HR tips to help you succeed in your job search and crack interviews confidently." />
        <meta name="keywords" content="career tips, interview tips, resume tips, job interview, HR tips, career advice" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Career & Interview Tips - YourSiteName" />
        <meta property="og:description" content="Explore expert career, resume, interview, and HR tips to help you succeed in your job search and crack interviews confidently." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/tips" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career & Interview Tips - YourSiteName" />
        <meta name="twitter:description" content="Explore expert career, resume, interview, and HR tips to help you succeed in your job search and crack interviews confidently." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.png" />
      </Head>

      <TipsList />
    </>
  );
}
