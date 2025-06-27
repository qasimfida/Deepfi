import './App.css'
import { FaXTwitter } from 'react-icons/fa6'
import GamesAnimation from './assets/Games Animation.gif'

function App() {
  return (
    <>
   
    <div className="flex items-center justify-center w-screen min-h-screen px-5 bg-black font-helvetica-neue">
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen text-center">
        <div className="flex items-center content">
        <h2 className="font-bold deep-text">DeepFi</h2>
        <img 
          src={GamesAnimation} 
          alt="Games Animation" 
          className="w-[420px] mt-2" 
        />
        </div>
        
        <h2 className="text-white md:text-[45px] text-3xl font-normal mb-8  tracking-wide">COMING JULY 2025</h2>
        <p className="text-white md:text-2xl text-xl font-normal md:mb-19 mb-10 mt-0 max-w-[640px]">
          The first Solana-based site featuring original games that reward you in $SOL, even if you lose.</p>
        <a href="https://x.com/deepfinews" target="_blank" rel="noopener noreferrer">
          <button className="border-2 border-white rounded-[24px] px-6 h-14 text-white text-lg font-bold mb-7 mt-0 hover:bg-white hover:text-black transition-colors duration-200 flex items-center gap-[12px]">
            <FaXTwitter className="text-xl" /> FOLLOW US
          </button>
        </a>
        <p className="mt-0 mb-20 text-base text-white">Powered through the magic of <b>$DRIP</b></p>
        <footer className="fixed bottom-0 left-0 right-0 flex flex-wrap items-center justify-center w-full gap-3 py-4 text-base font-bold tracking-wide text-center text-white md:flex-nowrap md:flex">
          <p>©2025 DeepFi Games, a DeepFi Project.</p>
          <p>All Rights Reserved.</p>   
        </footer>
      </div>
    </div>
    
    </>
  )
}

export default App
