import { timelineData } from '@/lib/constants';
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';

type Props = {
  date: Date;
};

type NodeData = {
  title: string;
  startDate: string;
  endDate?: string;
};
type NodeProps = {
  nodeData: NodeData;
  number: number;
  end: boolean;
};

const Timeline = (props: Props) => {
  const { date } = props;
  const TimelineNode = (props: NodeProps) => {
    const { nodeData, number, end } = props;
    const { startDate, endDate, title } = nodeData;

    const sd = moment(startDate).toDate();
    const ed = endDate ? moment(endDate).toDate() : null;
    const d = moment(date).toDate();

    const returnClass = () => {
      if (ed === null) {
        return d > sd ? 'ring-green-700' : 'ring-yellow-500';
      }

      if (d > sd && d < ed) {
        return 'ring-green-500 animate-pulse';
      }

      if (d > sd && d > ed) {
        return 'ring-green-700';
      }

      return 'ring-yellow-500';
    };

    return (
      <li className="relative">
        <div className="flex items-center">
          <div
            className={classNames(
              'z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full ring-0 sm:ring-8 shrink-0',
              returnClass()
            )}
          >
            {number}
          </div>
          {!end ? (
            <div className="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
          ) : null}
        </div>
        <div className="mt-3 sm:pr-8">
          <h3 className="text-lg font-semibold text-white whitespace-nowrap">
            {title}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-100">
            {moment(startDate).format('Do MMM YYYY')}
            {endDate ? (
              <span className="">
                {' '}
                <span>-</span> {moment(endDate).format('Do MMM YYYY')}
              </span>
            ) : null}
          </time>
        </div>
      </li>
    );
  };
  return (
    <main className="w-full h-screen text-white relative px-10 sm:p-28">
      <Image
        src="/assets/background/TimelineBG.gif"
        className="absolute -z-10"
        alt="Timeline BG"
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
        Timeline
      </motion.h1>
      <ol className="items-center sm:grid grid-cols-4 gap-y-16 sm:py-28">
        {timelineData.map((data, key) => {
          return (
            <TimelineNode
              nodeData={data}
              key={key}
              number={key + 1}
              end={key + 1 === timelineData.length}
            />
          );
        })}
      </ol>
    </main>
  );
};

export default Timeline;
