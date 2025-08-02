import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="w-full p-5 mt-20"
    >
      <section>
        <h1 className="w-full sm:w-1/2 text-3xl sm:text-4xl md:text-4xl font-bold">
          <span className="text-blue-600 ">Connect, </span>
          <span className="text-green-600 ">Grow, </span>
          <span className="text-orange-600 ">Inspire</span>
        </h1>
      </section>

      <section className="w-full sm:w-1/2  sm:text-xl  mt-5">
        <h1 className="text-zinc-600">
          Unite with current students and alumni of{" "}
          <span className="block bg-gradient-to-r from-[#AC1F25] to-[#3B4D61] bg-clip-text text-transparent">
            Jagannath University’s
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#0973be] to-[#38513b]">
            CSE
          </span>{" "}
          Department. Forge lifelong networks, share achievements, and drive
          innovation together.
        </h1>
      </section>
    </div>
  );
}
