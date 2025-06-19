import './App.css'
import { FaXTwitter } from 'react-icons/fa6'

function App() {
  return (
    <>
   
    <div className="min-h-screen w-screen bg-black flex items-center justify-center font-helvetica-neue">
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center relative">
        <div className="content mb-[65px]">
          <h2>DEEPFi</h2>
          <h2>DEEPFi</h2>
        </div>
        <h2 className="text-[#D0D0D0] text-[45px] font-[400] mb-[61px] mt-[0px] tracking-wide">COMING JULY 2025</h2>
        <p className="text-white text-[32px] font-normal mb-[60px] mt-[0px] leading-[30px] max-w-[860px]">
          The first Solana-based site featuring original games that
          reward you in $SOL, even if you lose.
        </p>
        <a href="https://x.com/deepfinews" target="_blank" rel="noopener noreferrer">
          <button className="border-[2px] border-white rounded-[24px] px-[24px] py-[21px] text-white text-[18px] font-bold mb-[60px] mt-0 hover:bg-white hover:text-black transition-colors duration-200 flex items-center gap-[12px]">
            <FaXTwitter className="text-[20px]" /> FOLLOW US
          </button>
        </a>
        <p className="text-white text-[24px] mb-20 mt-[0px]">Powered through the magic of <span className="font-[700]">$DRIP</span></p>
        <footer className="text-white text-[16px] fixed bottom-[0px] flex items-center justify-center gap-[12px] font-[700] py-[16px] left-0 right-0 w-full text-center tracking-wide">
          <p>©2025 DeepDex.</p>
          <p>a DeepFi Project.</p>
          <p>©All Rights Reserved.</p>   
        </footer>
      </div>
    </div>
    
    </>
  )
}

export default App
