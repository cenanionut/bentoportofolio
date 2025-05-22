function FavMusic() {
  return (
    <a
      href="https://music.youtube.com/watch?v=K9N3NWtk9VY&si=AOoKTVlMABujWXkt"
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-1/2 bg-white flex flex-col py-8 px-6 rounded-3xl shadow-lg overflow-hidden group hover:bg-gray-50 transition-all duration-300"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="mt-4">
          <img
            src="../assets/youtube.png"
            alt="Youtube"
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </div>

        <div className="flex flex-col mb-4">
          <span className="text-xs md:text-sm text-[#FF0000] font-medium tracking-wide">
            Ionut Top Playlist
          </span>
          <h2 className="text-lg md:text-md font-bold text-gray-900 line-clamp-1 font-sans m-0">
            The Beautiful & Damned
          </h2>
          <span className="text-sm md:text-base text-gray-600">G-Eazy</span>
        </div>
      </div>
    </a>
  );
}

export default FavMusic;
