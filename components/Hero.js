// components/Hero.js
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-black text-white">
      <img
        src="/dev_avatar.png"
        alt="Devanand Avatar"
        className="w-32 h-32 rounded-full mb-6 border-4 border-cyan-400"
      />
      <h2 className="text-3xl font-bold mb-2">Hi, I'm Devanand Yadav</h2>
      <p className="text-lg max-w-xl">
        I'm a Computer Science graduate and aspiring space tech entrepreneur, passionate about AI, robotics, and exploring the cosmos through innovation.
      </p>
    </section>
  );
}