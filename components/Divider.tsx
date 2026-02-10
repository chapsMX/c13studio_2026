export default function Divider() {
  return (
    <section className="relative w-full h-96 bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/divider-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Quote */}
      <div className="relative z-10 text-center px-4">
        <blockquote className="text-3xl md:text-4xl font-bold text-white mb-4">
          "Innovation is the engine that drives us to the sky, to the stars, to the future."
        </blockquote>
        <p className="text-lg text-gray-300">— DJI</p>
      </div>
    </section>
  )
}
