import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function RotatingBorder() {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-center">
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
        <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-600 p-2">
          <span className="relative z-50 flex items-center rounded-lg border border-slate-800 bg-slate-900 px-8 py-3 text-center text-md text-white shadow-2xl transition duration-200 hover:bg-slate-800">
            <GitHubLogoIcon className="h-8 w-8 mr-4" />
            GitHub to contribute
          </span>
        </div>
      </div>
    </div>
  );
}
