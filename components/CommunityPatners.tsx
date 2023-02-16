import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

const CommunityPatners = (props: Props) => {
  return (
    <main className="w-full text-white h-screen relative p-10">
      <Image
        src="/assets/background/CommunityPartner.gif"
        alt="Community Partner BG"
        className="-z-10"
        fill
      />

      <motion.h1
        whileInView={{ y: [50, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
        }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        Community Partners
      </motion.h1>

      <div className="p-10">
        <div className="grid grid-cols-4 gap-4 h-96 px-8 overflow-y-auto">
          {Array.from(Array(40).keys()).map((i) => {
            return (
              <div
                className="max-w-xs h-40 relative rounded-2xl overflow-hidden bg-white bg-opacity-70"
                key={i}
              >
                <Image
                  src={`/assets/community/Partner (${i + 1}).png`}
                  alt={`Partner ${i}`}
                  loading="lazy"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CommunityPatners;
