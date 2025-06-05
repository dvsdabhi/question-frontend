"use client";

import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Question {
  id: number;
  question: string;
  answer: string;
  language: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const questionClient = ({ languageId }: { languageId: string }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const filterInView = useInView(filterRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      setError("");
      try {
        if (languageId) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/questions/?difficulty=${difficulty}&language=${languageId}&page=${page}`
          );
          setTotalPages(res.data.total_page)
          setQuestions(res.data.results);
        }
      } catch (err) {
        console.error(err);
        setError("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadQuestion();
  }, [languageId, difficulty, page]);

  return (
    <section className="py-0 justify-items-center">
      <div className="container">
        {/* Title + Description */}
        <motion.div
          ref={titleRef}
          variants={fadeUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center justify-items-center"
        >
          <h1 className="mt-4 text-4xl font-semibold">
            Interview Questions & Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can serve your needs.
          </p>
        </motion.div>

        {/* Filter Select Box */}
        <motion.div
          ref={filterRef}
          variants={fadeUp}
          initial="hidden"
          animate={filterInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <div className="flex flex-col w-full max-w-xs gap-y-3">
            <label>Filter by Difficulty</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Empty message */}
        {questions && questions.length === 0 && !loading && !error && (
          <p className="text-center text-2xl mt-3 text-muted-foreground">
            No questions available for this subject.
          </p>
        )}

        {/* Questions */}
        <div className="mx-auto mt-14 max-w-sm sm:max-w-5xl">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
              <p className="ml-4 text-gray-600">Loading...</p>
            </div>
          ) : error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : (
            <AnimatePresence>
              {questions.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="mb-8 flex gap-2 sm:gap-4"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                    {faq.difficulty === 'easy' ? '🟢' : faq.difficulty === 'medium' ? '🟡' : '🔴'}
                  </span>
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">{faq.question}</h3>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <pre className="whitespace-pre-wrap text-sm font-mono">
                        <code className="text-[16px]">{faq.answer}</code>
                      </pre>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
        {questions.length > 0 && totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <Pagination>
              <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage((prev) => Math.max(prev - 1, 1));
                    }}
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {/* Page Numbers with Ellipsis */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((pg) => {
                    // Always show first, last, current, and neighbors
                    return (
                      pg === 1 ||
                      pg === totalPages ||
                      (pg >= page - 1 && pg <= page + 1)
                    );
                  })
                  .map((pg, i, arr) => {
                    const prevPg = arr[i - 1];
                    const showEllipsis = prevPg && pg - prevPg > 1;
                    return (
                      <React.Fragment key={pg}>
                        {showEllipsis && (
                          <PaginationItem key={`ellipsis-${pg}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            isActive={pg === page}
                            onClick={(e) => {
                              e.preventDefault();
                              setPage(pg);
                            }}
                          >
                            {pg}
                          </PaginationLink>
                        </PaginationItem>
                      </React.Fragment>
                    );
                  })}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage((prev) => Math.min(prev + 1, totalPages));
                    }}
                    className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}


      </div>
    </section>
  );
};

export default questionClient;
