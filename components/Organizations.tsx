import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import organizations from '@/lib/organizations';

type Props = {};

const Organizations = (props: Props) => {
  return (
    <main className="w-full h-screen flex relative px-10">
      <Image
        src="/assets/background/OrganizationBG.gif"
        className="-z-10"
        alt="Organizations BG"
        fill
      />

      <div className="flex w-full text-white justify-between">
        <div className="w-1/2 flex flex-col space-y-10 items-center justify-center">
          <motion.h1
            whileInView={{ y: [50, 0] }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
            }}
            viewport={{ once: true }}
            className="heading text-center"
          >
            Organizations
          </motion.h1>

          <div className="font-semibold text-xl px-10 space-x-2">
            <span>
              Our love for Open Source drove us to impact the community through
              Winter of Code 3.0.
            </span>
            <Link
              href="https://drive.google.com/file/d/1MfoVIZaS_Wd53HmsxJ0ziKZRBEjbjA6I/view"
              target="_blank"
              rel="noreffer"
              className="link"
            >
              Participate in Winter of Code 3.0 as an organisation?
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-y-8 gap-x-16">
            {organizations.map((organization, idx) => {
              const { name, image } = organization;
              return (
                <motion.div
                  whileInView={{ y: [50, 0] }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  key={idx}
                  className=""
                >
                  <Image src={image} alt={name} width={80} height={80} />
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/assets/creatures/fish.png"
            alt="Fish"
            className="absolute animate-up-down-fish z-30"
            height={743}
            width={643}
          />
          <Image
            src="/assets/creatures/fishBgLeafs.png"
            alt="Fish Leafs"
            className="absolute z-20"
            height={743}
            width={643}
          />
        </div>
      </div>
    </main>
  );
};

export default Organizations;
