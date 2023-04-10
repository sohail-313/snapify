import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const VideoList: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-row items-center justify-center gap-12 px-4 py-16 text-white ">
          {[1, 2, 3].map((id) => (
            <VideoCard key={id} />
          ))}
        </div>
      </main>
    </>
  );
};

const VideoCard = () => {
  return (
    <div className="h-[220px] w-[250px] cursor-pointer overflow-hidden rounded-lg border border-[#3f3f46] text-sm font-normal">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="m-4 flex flex-col">
        <span className="font-bold">Are pings bad?</span>
        <span className="">12 days ago</span>
      </div>
    </div>
  );
};

export default VideoList;