"use client";

import tipsData from "./tipData/tips.json";

const TipsList = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-8">Interview & Resume Tips</h1>

      {/* Resume Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Resume Tips</h2>
        <ul className="space-y-3 bg-green-50 rounded-lg p-4">
          {tipsData.resumeTips.map((tip, i) => (
            <li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Interview Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Interview Tips</h2>
        <ul className="space-y-3 bg-blue-50 rounded-lg p-4">
          {tipsData.interviewTips.map((tip, i) => (
            <li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* HR Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">HR Tips</h2>
        <ul className="space-y-3 bg-yellow-50 rounded-lg p-4">
          {tipsData.hrTips.map((tip, i) => (
            <li
              key={i}
              className="text-lg bg-white p-3 rounded shadow-sm hover:shadow-md transition cursor-default"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TipsList;