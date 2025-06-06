"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";  // head import કરવો
import Image from "next/image";
import { motion } from "framer-motion";

interface Advice {
  id: number;
  title: string;
  description: string;
  category?: string;
  order: number;
  image?: string | null;
}

const CareerAdvicePage = () => {
  const [adviceList, setAdviceList] = useState<Advice[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/advices/`);
        setAdviceList(res.data);
      } catch (err) {
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAdvice();
  }, []);

  return (
    <>
      <Head>
        <title>Career Advice | Professional Tips to Grow Your Career</title>
        <meta name="description" content="Get expert career advice, resume tips, interview strategies and guidance to advance your professional journey." />
        <meta name="keywords" content="career advice, resume tips, interview tips, job advice, professional growth" />
        <meta name="author" content="Your Company or Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Career Advice | Professional Tips to Grow Your Career" />
        <meta property="og:description" content="Get expert career advice, resume tips, interview strategies and guidance to advance your professional journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/career-advice" />
        <meta property="og:image" content="https://yourwebsite.com/images/career-advice-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Advice | Professional Tips to Grow Your Career" />
        <meta name="twitter:description" content="Get expert career advice, resume tips, interview strategies and guidance to advance your professional journey." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/career-advice-og.png" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-800">Career Advice</h1>
            <p className="mt-3 text-gray-600 text-lg">
              Expert tips to guide your career forward.
            </p>
          </motion.div>
        </div>
        {/* </motion.div> */}

        {loading && (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            <p className="ml-4 text-gray-600">Loading...</p>
          </div>
        )}

        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {!loading &&
            !error &&
            adviceList
              .sort((a, b) => a.order - b.order)
              .map((advice, index) => (
                <motion.div
                  key={advice.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  <div
                    key={advice.id}
                    className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
                  >

                    {advice.image && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_URL}/${advice.image}`}
                        alt={advice.title}
                        className="w-full h-48 object-cover"
                        width={500}
                        height={300}
                      />
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {advice.title}
                      </h2>
                      <p className="text-gray-600">{advice.description}</p>
                      {advice.category && (
                        <span className="inline-block mt-4 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                          {advice.category}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CareerAdvicePage;
