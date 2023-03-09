import { useState, useRef, useEffect } from "react";
import React from "react";

function Card({ audioSrc, image, glow, barFrom, barTo }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`card md:aspect-[5/4] aspect-square cursor-pointer transition-all duration-300 relative rounded-3xl ${
        isPlaying ? "scale-105" : ""
      }`}
      onClick={() => {
        togglePlay();
      }}
    >
      <audio loop ref={audioRef} src={audioSrc}></audio>
      {isPlaying ? (
        <div
          className={`w-full h-full flex items-center rounded-3xl overflow-hidden shadow-xl ${glow}`}
        >
          <img className="saturate-150" src={image} alt="" />
        </div>
      ) : (
        <div className="w-full h-full flex items-center rounded-3xl overflow-hidden">
          <img className="saturate-150" src={image} alt="" />
        </div>
      )}

      {isPlaying && (
        <div className="w-full">
          <input
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[70%] appearance-none rounded-full bg-gradient-to-r ${barFrom} ${barTo} [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:h-2 
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-translate-y-1/3 [&::-webkit-slider-thumb]:translate-x-0 [&::-webkit-slider-thumb]:transition-all`}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolume}
            onClick={handleInputClick}
          />
        </div>
      )}
    </div>
  );
}
export default Card;
