// "use client"

// import React, { useEffect, useState } from 'react'
// import { useRouter } from "next/navigation";
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { Input } from "@/components/ui/input"

// const questionPage = () => {
//   const [languages, setLanguages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     const loadLanguages = async () => {
//       console.log("Loading Start...");
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get('http://localhost:8000/api/languages/');
//         setLanguages(res.data);
//         console.log("Languages loaded:", res.data);
//       } catch (err) {
//         console.log(err);
//         setError('Server error. Please try again later.');
//       } finally {
//         setLoading(false);
//         console.log("Loading End...");
//       }
//     };
//     loadLanguages();
//   }, []);

//   const handleClick = (id: number) => {
//     router.push(`/question/${id}`);
//   };

//   const filteredLanguages = languages.filter((lang: any) =>
//     lang.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col gap-5 text-center max-w-xl mx-auto mx">
//         <b className="text-center text-muted-foreground font-semibold text-base">
//           We&apos;re helping!
//         </b>
//         <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
//           See Question & Answer
//         </h2>
//         <p className="text-base sm:text-lg">
//           Our mission is simple — curate real-world interview questions, provide expert insights, and help you confidently crack top tech interviews.
//         </p>
//         <div className='mt-4'>
//           <Input placeholder="Search language" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
//         </div>
//       </div>
//       <div className="mt-20 w-full min-h-[200px] flex justify-center items-center max-w-screen-lg mx-auto">
//         {loading ? (
//           <>
//             <div className="flex justify-center items-center">
//               <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
//               <p className="ml-4 text-gray-600">Loading...</p>
//             </div>
//           </>
//         ) : error ? (
//           <p className="text-lg text-red-500">{error}</p>
//         ) : (<>
//           <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
//             {filteredLanguages.map((language: any, index) => (
//               <div key={language?.id} className="text-center cursor-pointer" onClick={() => handleClick(language.id)}>
//                 <motion.div
//                   key={language?.id}
//                   className="text-center cursor-pointer"
//                   onClick={() => handleClick(language.id)}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <img
//                     src={`http://127.0.0.1:8000${language.icon}`}
//                     alt={language.name}
//                     className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
//                     width={120}
//                     height={120}
//                   />
//                   <h3 className="mt-4 text-lg font-semibold">{(language.name).toUpperCase()}</h3>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default questionPage;


"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head"; // SEO માટે import
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const QuestionPage = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  useEffect(() => {
    const loadLanguages = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("http://localhost:8000/api/languages/");
        setLanguages(res.data);
      } catch (err) {
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadLanguages();
  }, []);

  const handleClick = (id: number) => {
    router.push(`/question/${id}`);
  };

  const filteredLanguages = languages.filter((lang: any) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Programming Languages - Interview Questions | YourSiteName</title>
        <meta
          name="description"
          content="Explore interview questions categorized by programming languages. Prepare for your next tech interview with curated questions and answers."
        />
        <meta
          name="keywords"
          content="interview questions, programming languages, tech interview, coding interview questions, software developer interview"
        />
        <meta name="author" content="Your Name or Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Programming Languages - Interview Questions | YourSiteName" />
        <meta property="og:description" content="Explore interview questions categorized by programming languages. Prepare for your next tech interview with curated questions and answers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/question-page" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.png" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Programming Languages - Interview Questions | YourSiteName" />
        <meta name="twitter:description" content="Explore interview questions categorized by programming languages. Prepare for your next tech interview with curated questions and answers." />
        <meta name="twitter:image" content="https://yourwebsite.com/og-image.png" />
      </Head>

      <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 text-center max-w-xl mx-auto">
          <b className="text-center text-muted-foreground font-semibold text-base">
            We&apos;re helping!
          </b>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            See Question & Answer
          </h2>
          <p className="text-base sm:text-lg">
            Our mission is simple — curate real-world interview questions,
            provide expert insights, and help you confidently crack top tech
            interviews.
          </p>
          <div className="mt-4">
            <Input
              placeholder="Search language"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-20 w-full min-h-[200px] flex justify-center items-center max-w-screen-lg mx-auto">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
              <p className="ml-4 text-gray-600">Loading...</p>
            </div>
          ) : error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : (
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
              {filteredLanguages.map((language: any, index) => (
                <div
                  key={language?.id}
                  className="text-center cursor-pointer"
                  onClick={() => handleClick(language.id)}
                >
                  <motion.div
                    key={language?.id}
                    className="text-center cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img
                      src={`http://127.0.0.1:8000${language.icon}`}
                      alt={language.name}
                      className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
                      width={120}
                      height={120}
                    />
                    <h3 className="mt-4 text-lg font-semibold">
                      {language.name.toUpperCase()}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
