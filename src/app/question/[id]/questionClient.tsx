'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Question {
  id: number;
  question: string;
  answer: string;
  language: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const questionClient = ({ languageId }: { languageId: string }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [difficulty, setDifficulty] = useState("all")

  useEffect(() => {
    const loadQuestion = async () => {
      setLoading(true);
      setError("");
      try {
        if (languageId) {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/questions/?difficulty=${difficulty}&language=${languageId}`)
          setQuestions(res.data)
          console.log("Languages loaded:", res.data);
        }
      }
      catch (err) {
        console.log(err);
        setError('Server error Please try again later.');
      } finally {
        setLoading(false);
        console.log("Loading End...");
      }
    };
    loadQuestion()
  }, [languageId, difficulty]);
  return (
    <section className="py-0 justify-items-center">
      <div className="container">
        <div className="text-center justify-items-center">
          <h1 className="mt-4 text-4xl font-semibold">Interview Questions & Answers</h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can serve your needs.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col w-full max-w-xs gap-y-3">
            <label htmlFor="">Question Filter by Difficulty Leval</label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by Difficulty" defaultValue={"all"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {questions.length === 0 ? (
          <p className="text-center text-2xl mt-3 text-muted-foreground">
            No questions available for this subject.
          </p>
        ) : ""}

        <div className="mx-auto mt-14 max-w-sm sm:max-w-5xl">
          {loading ? (
            <>
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
                <p className="ml-4 text-gray-600">Loading...</p>
              </div>
            </>
          ) : error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : (
            questions.map((faq, index) => (
              <div key={index} className="mb-8 flex gap-2 sm:gap-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                  {index + 1}
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
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default questionClient;
