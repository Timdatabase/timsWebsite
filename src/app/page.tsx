import Image from "next/image";
import selfie from "/Users/timsdatabase/Pictures/Photos Library.photoslibrary/resources/derivatives/A/AE693C2B-849D-4C05-84FD-5EE3FD4777EE_1_105_c.jpeg"; // replace with your actual image path

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full">
        {/* Avatar Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
          <Image
            src =  {selfie}
            alt= "selfie"
            className="rounded-full"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-8 text-black">Hi, my name is Tim</h1>
          <p className="text-black leading-relaxed">
          My full name is Oluwasemilore Timothy Adeyemi but you can call me Tim. I am a sophmore at Cornell Univeristy 
          studying Computer Science in the College of Engineering. I am interesrted in backend development and learning how to 
          leverage AI as the world becomes intertwined with it. I want to use technology to provide opportunities in underdeveloped communities.
       
          </p>
        </div>
      </div>
    </main>
  );
}

// import Image from "next/image";
// import next_svg from "../../public/next.svg";
// import vercel_svg from "../../public/vercel.svg";

// export default function Home() {
//   return (
//     <main
//       className="flex min-h-screen flex-col items-center justify-between p-24"
//     >
//       <div
//         className="z-10 w-full max-w-5xl items-center justify-between font-mono
//           text-sm lg:flex"
//       >
//         <p
//           className="fixed left-0 top-0 flex w-full justify-center border-b
//             border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8
//             backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border
//             lg:bg-gray-200 lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30
//             dark:from-inherit lg:dark:bg-zinc-800/30"
//         >
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div
//           className="fixed bottom-0 left-0 flex h-48 w-full items-end
//             justify-center bg-gradient-to-t from-white via-white lg:static
//             lg:size-auto lg:bg-none dark:from-black dark:via-black"
//         >
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8
//               lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src={vercel_svg}
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div
//         className="relative z-[-1] flex place-items-center before:absolute
//           before:h-[300px] before:w-full before:-translate-x-1/2
//           before:rounded-full before:bg-gradient-radial before:from-white
//           before:to-transparent before:blur-2xl before:content-['']
//           after:absolute after:-z-20 after:h-[180px] after:w-full
//           after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200
//           after:via-blue-200 after:blur-2xl after:content-['']
//           sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]
//           before:dark:bg-gradient-to-br before:dark:from-transparent
//           before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900
//           after:dark:via-[#0141ff] after:dark:opacity-40"
//       >
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]
//             dark:invert"
//           src={next_svg}
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div
//         className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl
//           lg:grid-cols-4 lg:text-left"
//       >
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4
//             transition-colors hover:border-gray-300 hover:bg-gray-100
//             hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span
//               className="inline-block transition-transform
//                 group-hover:translate-x-1 motion-reduce:transform-none"
//             >
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4
//             transition-colors hover:border-gray-300 hover:bg-gray-100
//             hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span
//               className="inline-block transition-transform
//                 group-hover:translate-x-1 motion-reduce:transform-none"
//             >
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4
//             transition-colors hover:border-gray-300 hover:bg-gray-100
//             hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span
//               className="inline-block transition-transform
//                 group-hover:translate-x-1 motion-reduce:transform-none"
//             >
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4
//             transition-colors hover:border-gray-300 hover:bg-gray-100
//             hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span
//               className="inline-block transition-transform
//                 group-hover:translate-x-1 motion-reduce:transform-none"
//             >
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
