function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-1/2 bg-[#0A66C2] flex items-center justify-center rounded-3xl shadow-lg overflow-hidden group hover:bg-[#004182] transition-all duration-300 relative"
    >
      <img
        src="../assets/linkedin-w.png"
        alt="LinkedIn"
        className="w-24 h-24 md:w-24 md:h-24 text-white"
      />
      <div className="absolute bottom-3 left-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-white opacity-80"
        >
          <path
            fillRule="evenodd"
            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </a>
  );
}

export default LinkedIn;
