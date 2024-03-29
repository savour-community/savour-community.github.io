import React from 'react';
import Circles from '@site/src/components/circles';
import Link from '@docusaurus/Link';

export default function Quickstart() {
  return (
    <section className="relative flex justify-end bg-blue-400 mb-0 pb-10 sm:-mb-[100px] lg:-mb-[270px]">
      <div className="relative max-w-7xl m-auto">
        <div className="relative flex justify-end">

          <div className="absolute bottom-0 sm:top-1/2 right-0">
            <Circles color="blue" animate="animate-circle-delay-1" />
          </div>

          <div className="relative w-[320px] sm:absolute sm:left-16 sm:-top-5 sm:w-[62%] p-5 sm:p-2">

            <h2 className="font-bold text-3xl font-black text-white w-full mb-5 sm:mb-10">
              Web3 tech solutions
              <span className="hidden sm:block w-full sm:w-auto text-sm font-normal text-blue-800 ml-3">We provide Layer3 technology solution services.</span>
            </h2>

            <div>
              <Link
                className="transition-all ease-in hover:bg-green-700 hover:text-white hover:text text-md text-white font-bold py-3 px-4 rounded bg-green-500 shadow-lg shadow-blue-500/50"
                to="/docs/Documents/intro"
              >
                For Details
                <span className="ml-3">🎢</span>
              </Link>
            </div>

            <p className="mb-10" />

            <h2 className="font-bold text-3xl font-black text-white w-full mb-5 sm:mb-10">
              Dapp Incubation
              <span className="hidden sm:block w-full sm:w-auto text-sm font-normal text-blue-800 ml-3">We are looking for dapps that can be incubated.</span>
            </h2>
            <div>
              <Link
                className="transition-all ease-in hover:bg-green-700 hover:text-white hover:text text-md text-white font-bold py-3 px-4 rounded bg-green-500 shadow-lg shadow-blue-500/50"
                to="/docs/Documents/intro"
              >
                For Details
                <span className="ml-3">📦</span>
              </Link>
            </div>
            <p className="mb-10" />
            <h2 className="font-bold text-3xl font-black text-white w-full mb-5 sm:mb-10">
              Web3 hackthon and tech share
              <span className="hidden sm:block w-full sm:w-auto text-sm font-normal text-blue-800 ml-3">Host web3 community events and tech share</span>
            </h2>
            <div>
              <Link
                className="transition-all ease-in hover:bg-green-700 hover:text-white hover:text text-md text-white font-bold py-3 px-4 rounded bg-green-500 shadow-lg shadow-blue-500/50"
                to="/docs/Documents/intro"
              >
                For Details
                <span className="ml-3">⛓️</span>
              </Link>
            </div>
          </div>

          <img
            className="pointer-events-none hidden dark:block object-contain absolute -top-6 w-[400px] sm:relative dark:sm:block sm:w-3/4 sm:left-3 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/logo.png"
            alt="phone"
          />
          <img
            className="dark:hidden pointer-events-none object-contain absolute -top-6 w-[400px] sm:relative sm:block sm:w-3/4 md:w-[70%] 2xl:w-[85%] lg:w-2/3 mr-0 translate-x-[27%] md:translate-x-[20%] lg:translate-x-[15%] 2xl:translate-x-[28%] -translate-y-[43%]"
            src="./img/logo.png"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
}
