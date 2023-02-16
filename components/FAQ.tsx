import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import faqData from '@/lib/FAQ';

type Props = {};
type FAQ = {
  question: string;
  answer: string;
};

const FAQ = (props: Props) => {
  const FAQCard = ({ faq }: { faq: FAQ }) => {
    const { answer, question } = faq;
    return (
      <details>
        <summary className="py-2 outline-none text-xl font-bold cursor-pointer focus:underline">
          {question}
        </summary>
        <div className="px-4 pb-4">
          <p>{answer}</p>
        </div>
      </details>
    );
  };

  return (
    <main className="w-full h-screen relative text-white p-10 px-20">
      <Image
        src="/assets/background/FAQ.gif"
        className="-z-10"
        alt="FAQ BG"
        fill
      />

      <div className="flex justify-between items-center">
        <div className="w-1/2 flex flex-col h-screen">
          <h1 className="heading">Frequently</h1>
          <h3 className="text-5xl">Asked Questions</h3>
        </div>

        <div className="w-1/2 flex flex-col h-screen">
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            {faqData.map((faq, idx) => {
              return <FAQCard faq={faq} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
