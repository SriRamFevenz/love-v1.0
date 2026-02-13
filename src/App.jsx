export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-pink">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-2 border-valentine-red/20">
        <h1 className="text-5xl font-bold text-valentine-red mb-4">
          Valentine's Love
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Project Initialized Successfully ❤️
        </p>
        <div className="space-x-4">
          <button className="bg-valentine-red text-white px-6 py-2 rounded-full hover:bg-deep-pink transition-colors">
            Get Started
          </button>
          <button className="px-6 py-2 rounded-full border border-valentine-red text-valentine-red hover:bg-valentine-red/5 transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </div>
  )
}
