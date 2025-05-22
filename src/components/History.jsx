function History() {
  return (
    <div className="h-1/3 w-full bg-white p-10 rounded-3xl shadow-lg overflow-hidden group hover:bg-gray-50 transition-all duration-300">
      <div className="flex flex-col justify-center h-full gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
            How it started vs. how it's going
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-normal">
            A short personal history as it relates to design and development,
            and how I've found value in the cross-section between both
            disciplines.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>

          <span className="text-sm text-gray-400 font-normal">May 5, 2021</span>
        </div>
      </div>
    </div>
  );
}

export default History;
