export default function Home() {
  return (
    <>
      <div className="flex items-center gap-2 justify-center h-full text-[#a688fa]">
        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-checkbox">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11l3 3l8 -8" />
          <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
        </svg>
        <h1 className="text-4xl lg:text-5xl">Task APP</h1>
      </div>
    </>
  );
}
