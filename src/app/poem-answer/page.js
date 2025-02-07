'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PoemAnswer() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <Image
        src="/valentines/fly.gif"
        alt="fly"
        width={200}
        height={100} 
        className="pb-4"
      />
      <h1 className="text-xl text-black">Roses are red,</h1>
      <h1 className="text-xl text-black">Violets are blue,</h1>
      <h1 className="text-xl text-black">However long the flight,</h1>
      <h1 className="text-xl text-black pb-10">I'll be next to you.</h1>
      <div className="flex gap-28">
        <button
          className="rounded-full border border-solid border-black bg-white text-m h-10 w-32 px-4"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-m h-10 w-32 px-4"
          onClick={() => router.push('/end')}
        >
          Finish
        </button>
      </div>
    </div>
  );
}