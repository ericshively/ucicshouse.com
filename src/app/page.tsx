import RotatingBorder from "@/components/RotatingBorder";
import Meteors from "@/components/ui/meteors";

export default function RootPage() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={300} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        ICS HOUSE!!!
      </span>
      <div className="m-32">
        <a href="https://github.com/ericshively/ucicshouse.com">
          <RotatingBorder />
        </a>
      </div>
    </div>
  );
}
