export default function HeroSection() {
  return (
    <div
      id="hero"
      className="w-full p-5 mt-5"
    >
      <section>
        <h1 className="w-full sm:w-1/2 text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-blue-600 ">Connect </span>
          <span className="text-green-600 "> Grow </span>
          <span className="text-orange-600 ">Inspire</span>
        </h1>
      </section>

      <section className="w-full sm:w-1/2  sm:text-xl md:text-2xl font-semibold mt-5">
        <h1>
          Unite with current students and alumni of Jagannath University’s CSE
          Department. Forge lifelong networks, share achievements, and drive
          innovation together.
        </h1>
      </section>
    </div>
  );
}
