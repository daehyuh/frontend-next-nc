import Image from "next/image";

export default function Home() {

  return (
<div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-7 py-11 w-full bg-black">
        <img
          loading="lazy"
          srcSet=""
          className="mt-1.5 aspect-square w-[150px]"
          src="logo.png"
        />
        <div className="mt-24 text-4xl font-bold text-white">
          N<span className="text-white ">EW</span>
          <br />C<span className="text-white ">REATE</span>
        </div>


        <div className="gradation">
          
        </div>
        <div className="mt-9 ml-1.5 text-xs font-light text-justify text-white">
          <span className="font-medium text-white">NC 학회</span>는 “NewCreate”의 약자로
          <br />
          다양하고 새로운 분야를 희망하는 학생들이 모여
          <br />
          2023년도에 설립된 한국외국어대학교 컴퓨터공학부 소속 학회입니다.
          <br />
          <br />
          우리 학회는 자유로운 분위기를 지향하며
          <br />
          학회원들은 웹 개발 · 앱 개발 같은 친숙한 분야부터,
          <br />
          창업/기획 · 게임개발 같은 분야까지 다양한 분야를 학습하고 연구하고
          있습니다.
          <br /><br />
          그리고 학습하는 것에서 멈추지 않고 배운 것을 통하여 프로젝트를 완성해
          <br />
          본인의 실력을 기를 기회를 만들고 있습니다.
          <br />
          또한 학회원간 공부 · 대외활동 · 정보공유 등 많은 활동을 진행하고
          있습니다.
        </div>
        
        <div className="fixed-button">
          <span className="font-bold text-white">NC학회 2기 지원하기</span>
        </div>


        <div className="self-start mt-20 ml-2.5 text-2xl font-bold text-justify text-white whitespace-nowrap">
          Team NC...
        </div>
        
        <div className="flex gap-5 justify-between px-6 py-2.5 mt-7 ml-2.5 text-lg text-justify text-white whitespace-nowrap rounded-3xl bg-slate-600">
          <div>FRONTEND</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b0065b4b9ae0de632c1f47726f571ff0ef572e497f0666a6fed4dfa60e34bf?"
            className="self-start aspect-[1.22] fill-zinc-300 w-[17px]"
          />
        </div>
        <div className="flex flex-col px-5 py-5 mt-4 ml-2.5 w-500 font-medium rounded-3xl bg-zinc-800">
          <div className="flex gap-1.5 justify-between text-sm text-gray-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f8210f381c06a83a4c72aaba27ee8a3b0e77374b6547ad74573e68c03b1b42d?"
              className="w-8 aspect-square"
            />
            <div className="flex-auto self-start mt-4">
              강대현 <span className="font-light">(1기, 23학번)</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-1.5 mt-1.5 text-xs text-zinc-600">
            <div>
              <span className="text-zinc-600">“ </span>
              <span className="font-light">한줄소개</span>
              <span className="text-zinc-600"> ”</span>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c8dd1d1279136109838d6a2cd0d42b415b474c481e6262f8eac28e47c43258f?"
              className="w-4 aspect-square fill-neutral-400"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 py-5 mt-3 ml-2.5 w-500 font-medium rounded-3xl bg-zinc-800">
          <div className="flex gap-1.5 justify-between text-sm text-gray-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f8210f381c06a83a4c72aaba27ee8a3b0e77374b6547ad74573e68c03b1b42d?"
              className="w-8 aspect-square"
            />
            <div className="flex-auto self-start mt-4">
              송수빈 <span className="font-light">(1기, 23학번)</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-1.5 mt-1.5 text-xs text-zinc-600">
            <div>
              <span className="text-zinc-600">“ </span>
              <span className="font-light">한줄소개</span>
              <span className="text-zinc-600"> ”</span>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c8dd1d1279136109838d6a2cd0d42b415b474c481e6262f8eac28e47c43258f?"
              className="w-4 aspect-square fill-neutral-400"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 py-5 mt-3 ml-2.5 w-full font-medium rounded-3xl bg-zinc-800">
          <div className="flex gap-1.5 justify-between text-sm text-gray-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/89467f2f111601a61833289827076107194ceb4e1ec9e761fa307ac0285cfc09?"
              className="w-8 aspect-square"
            />
            <div className="flex-auto self-start mt-4">
              김우진 <span className="font-light">(1기, 23학번)</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-1.5 mt-1.5 text-xs text-zinc-600">
            <div>
              <span className="text-zinc-600">“ </span>
              <span className="font-light">한줄소개</span>
              <span className="text-zinc-600"> ”</span>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c8dd1d1279136109838d6a2cd0d42b415b474c481e6262f8eac28e47c43258f?"
              className="w-4 aspect-square fill-neutral-400"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between px-6 py-2.5 mt-5 ml-2.5 text-lg text-justify text-white whitespace-nowrap rounded-3xl bg-blue-950">
          <div>BACKEND</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332f27133a53ae2703174eaed3bc1d7ac2a8ec3fceac7f816d8ce12dd5de829a?"
            className="aspect-[1.22] fill-zinc-300 w-[17px]"
          />
        </div>
        <div className="flex gap-5 justify-between px-6 py-2.5 mt-5 ml-2.5 text-lg text-justify text-white whitespace-nowrap bg-green-800 rounded-3xl">
          <div>MARKETER</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332f27133a53ae2703174eaed3bc1d7ac2a8ec3fceac7f816d8ce12dd5de829a?"
            className="aspect-[1.22] fill-zinc-300 w-[17px]"
          />
        </div>
        <div className="flex gap-5 justify-between px-6 py-2.5 mt-5 ml-2.5 text-lg text-justify text-white whitespace-nowrap bg-amber-900 rounded-3xl">
          <div>DESIGNER</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/332f27133a53ae2703174eaed3bc1d7ac2a8ec3fceac7f816d8ce12dd5de829a?"
            className="aspect-[1.22] fill-zinc-300 w-[17px]"
          />
        </div>
        <div className="self-start mt-20 ml-3 text-2xl font-bold text-justify text-white whitespace-nowrap">
          Main Activity
        </div>
        <div className="flex gap-5 justify-between self-start mt-5 ml-2.5 text-xs font-light text-justify text-white">
          <div>2022. 03. 31</div>
          <div>NC 학회 설립</div>
        </div>
        <div className="flex gap-5 justify-between self-start mt-2.5 ml-2.5 text-xs font-light text-justify text-white whitespace-nowrap">
          <div className="flex flex-col self-start basis-0">
            <div>2023. 04. 02</div>
            <div className="mt-3">2023. 06. 30</div>
          </div>
          <div className="flex flex-col flex-1">
            <div>소프트웨어 마에스트로 14기 합격 (강대현 1기, 23학번)</div>
            <div className="mt-2.5">[AI교육원] 제2회 HUFSummer Hackathon 3위</div>
          </div>
        </div>
        <div className="mb-20 flex gap-5 justify-between mt-20 text-xs text-neutral-600">
          <div className="flex flex-col">
            <div>
              Developed by 강대현
              <br />
              Designed by 김연주
              <br />
              <br />
              <br />
            </div>
            <img
              loading="lazy"
              src="logo.png"
              className="mt-5 aspect-square w-[38px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/634f5ae695cb6fdffcea2174185c3d603fcd22ecb6c3bd0d7ab357dbc0030cbb?"
            className="self-end mt-16 max-w-full aspect-[5] w-[113px]"
          />
        </div>
      </div>
    </div>
  );
}