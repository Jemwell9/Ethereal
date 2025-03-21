import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
  // Explicitly typing the videoRef as HTMLVideoElement or null
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setTimeout(() => {
      // Ensure the videoRef is available and then call pause()
      if (videoRef.current) {
        videoRef.current.pause(); // Pause the video after 4 seconds
      }
    }, 3500); // 4000 milliseconds = 4 seconds
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated diagonal light streaks */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.1)_50%,transparent_75%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(0,255,0,0.05)_50%,transparent_75%)] animate-pulse delay-75"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_25%,rgba(0,255,0,0.03)_50%,transparent_75%)] animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8 relative">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="flex flex-col items-center justify-center min-h-[60vh] text-white">
            <div className="text-[60px] md:text-[80px] font-[horizon] font-bold leading-[1] mb-4 tracking-wide text-[#00bf63]">
              <span className="block leading-none">PRINTING <span className="text-white">YOUR</span></span>
            </div>
            <div className="text-[60px] md:text-[80px] font-[horizon] font-bold leading-[1] mb-4 tracking-wide text-white">
              <span className="block leading-none">IDEAS TO</span>
            </div>
            {/* Replacing LIFE text with image and adjusting the margin */}
            <img 
              src="https://jemwell9.github.io/Ethereal/Life-Banner-1.png" // Reference the image from the public folder
              alt="Life Banner"
              className="w-[1200px] h-[700px] object-contain mx-auto mt-[-250px]" // Adjusted margin-top to reduce the space between "IDEAS TO" and the image
            />
          </h1>
        </motion.div>

        {/* Stage Design Below LIFE */}
        <div className="relative mt-2">
          <div className="w-full max-w-6xl mx-auto mt-[-250px]">
            <video
              ref={videoRef} // Attach the video reference
              width="100%" 
              height="500px" 
              autoPlay
              muted
              className="object-cover w-full h-full"
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              onPlay={handlePlay} // Set the play event handler
            >
              <source src="https://jemwell9.github.io/Ethereal/Jemwell-Project.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 5 Columns: 3D PRINTING, AUTOCAD, etc. */}
        <div className="text-center mt-4"> {/* Reduced top margin here */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h3 className="text-xl font-bold">3D PRINTING</h3>
              <p className="text-[#00FF00]">ALL MATERIALS</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">AUTOCAD</h3>
              <p className="text-[#00FF00]">MODELING</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">PHD LEVEL</h3>
              <p className="text-[#00FF00]">EXPERTISE</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">3D PEN</h3>
              <p className="text-[#00FF00]">ART WORKSHOP</p>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">3D PRINTING</h3>
              <p className="text-[#00FF00]">CUSTOM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
