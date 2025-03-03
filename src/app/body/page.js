'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BodyAnswer() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <Image
        src="/valentines/body.gif"
        alt="body"
        width={200}
        height={100} 
        className="pb-3"
      />
      <h1 className="text-xl text-black pb-10">What's my favorite body part of yours?</h1>
      <div className="flex gap-28">
        <button
          className="rounded-full border border-solid border-black bg-white text-m h-10 w-32 px-4"
          onClick={() => router.back()}
        >
          Back
        </button>
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-m h-10 w-32 px-4"
          onClick={() => router.push('/body-answer')}
        >
          Next
        </button>
      </div>
    </div>
  );
}