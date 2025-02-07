'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [noPosition, setNoPosition] = useState({ top: '65%', left: '55%' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure that window is available only in the client-side environment
    }
  }, []);

  const moveNoButton = (event) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = 200; // Approximate button width
    const buttonHeight = 50; // Approximate button height

    let newTop = Math.random();
    if (newTop >= 0.5) {
      newTop = event.clientY + Math.random() * 100 - 30;
    } else {
      newTop = event.clientY - Math.random() * 100 - 30;
    }
    let newLeft = Math.random();
    if (newLeft >= 0.5) {
      newLeft = event.clientX + Math.random() * 100 - 30;
    } else {
      newLeft = event.clientX - Math.random() * 100 - 30;
    }

    // Ensure the button stays within bounds
    if (newTop < 0) newTop = 0;
    if (newLeft < 0) newLeft = 0;
    if (newTop > screenHeight - buttonHeight) newTop = screenHeight - (buttonHeight + 10);
    if (newLeft > screenWidth - buttonWidth) newLeft = screenWidth - (buttonWidth + 10);

    setNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 relative">
      <Image
        src="/valentines.git/bubu.gif"
        alt="bubu"
        width={200}
        height={100} 
        className="pb-4"
      />
      <h1 className="text-xl text-black mb-36 text-center">Sahil, will you be my valentine?</h1>
      <div>
        <button
          className="absolute top-[65%] left-[35%] rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-m h-10 w-32 px-4"
          onClick={() => router.push('/quiz')}
        >
          Yes
        </button>
        <button
          className="rounded-full border border-solid border-black transition-colors flex items-center justify-center bg-[#f2f2f2] hover:border-transparent text-m h-10 w-32 px-4"
          style={{ position: 'absolute', top: noPosition.top, left: noPosition.left }}
          onMouseMove={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
}
