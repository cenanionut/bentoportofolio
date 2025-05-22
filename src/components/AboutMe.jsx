function AboutMe() {
  return (
    <div
      id="1"
      className="h-1/3 w-full bg-white flex flex-col justify-center p-6 rounded-xl md:rounded-2xl shadow-lg overflow-hidden group hover:bg-gray-50 transition-all duration-300"
    >
      <img
        src="../assets/avatar.png"
        alt="Memoji Avatar"
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-3 self-start"
      />
      <p className="text-base md:text-lg text-gray-600 font-normal">
        I'm{" "}
        <span className="text-xl md:text-2xl font-bold text-gray-800">
          ionut
        </span>
        , a developer and tech enthusiast from Romania. I'm interested in React,
        Node, Python, AI, Game Development and Music.
      </p>
    </div>
  );
}

export default AboutMe;
