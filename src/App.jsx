import { React, useRef, useState } from "react";
import PixelBirthday from "./Components/PixelBirthday";
import { ConfettiButton } from "./Components/ui/confetti";
import { AnimatePresence, motion } from "motion/react";
import { PixelImage } from "./Components/ui/pixel-image";
import img1 from "./assets/img1.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";
import video from "./assets/v1.MOV";

function App() {
  const buttonRef = useRef(null);
  const handleEntryComplete = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const changeScene = (newScene) => {
    setTimeout(() => {
      setScene(newScene);
    }, 500);
  };

  const [scene, setScene] = useState("intro");
  return (
    <div className="max-w-2xl mx-auto px-3 min-h-screen flex flex-col items-center justify-center">
      {/* confetti button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onAnimationComplete={handleEntryComplete}
        transition={{
          delay: 2,
          duration: 0.5,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}>
        <ConfettiButton
          ref={buttonRef}
          className="bg-transparent border-none p-0 m-0 shadow-none outline-none focus:outline-none active:scale-95 transition-transform"
          options={{
            particleCount: 150,
            spread: 360,
            colors: ["#FFD700", "#FF007F", "#00E5FF", "#7FFF00", "#FF4500"],
            shapes: ["square"],
            scalar: 2,
            gravity: 0.7,
            origin: { x: 0.5, y: 0.5 },
          }}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ imageRendering: "pixelated" }}
            className="scale-[3]">
            <path
              d="M9 2h2v1H9V2zm-1 1h4v1H8V3zm-1 1h6v1H7V4zm-1 1h8v1H6V5z"
              fill="#FF2056"
            />

            <path
              d="M10 3h1v1h-1V3zM8 5h1v1H8V5zm3 0h1v1h-1V5z"
              fill="#fde68a"
            />

            <path d="M5 6h10v10H5V6z" fill="#FFF8E7" />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5h12v12H4V5zm1 1h10v10H5V6z"
              fill="#4C0519"
            />

            <path d="M7 8h2v2H7V8zm4 0h2v2h-2V8z" fill="#4C0519" />

            <path d="M7 12h6v3H7v-3z" fill="#4C0519" />
            <path d="M8 13h4v1H8v-1z" fill="#FF2056" />

            <path
              d="M2 4h1v1H2V4zm15 2h1v1h-1V6zM3 10h1v1H3v-1zm14 5h1v1h-1v-1zM2 14h1v1H2v-1zM17 9h1v1h-1V9z"
              fill="#FFD700"
            />
            <path
              d="M3 2h1v1H3V2zm14 12h1v1h-1v-1zM1 8h1v1H1V8zm16-6h1v1h-1V2z"
              fill="#00E5FF"
            />
            <path
              d="M4 17h1v1H4v-1zm12 0h1v1h-1v-1zM2 7h1v1H2V7z"
              fill="#7FFF00"
            />
          </svg>
        </ConfettiButton>
      </motion.div>

      <div className="max-w-2xl mx-auto px-3 min-h-screen flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {scene === "intro" ? (
            <motion.div
              key="intro"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="flex flex-col items-center">
              <PixelBirthday />

              <div className="mt-20 w-[80%] fixed bottom-32 left-1/2 -translate-x-1/2 flex justify-end">
                <button onClick={() => changeScene("page1")} className="button">
                  Start
                </button>
              </div>
            </motion.div>
          ) : scene === "page1" ? (
            <motion.div
              key="page1"
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <div className="container bg-rose-400 border-x-4 border-y-4 border-rose-950 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] p-4 md:p-8 w-full flex flex-col items-center">
                {/* Wrapper to control size */}
                <div className="w-full max-w-[280px] md:max-w-[350px] border-4 border-rose-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                  <PixelImage src={img1} grid="8x8" pixelFadeInDuration={800} />
                </div>

                <h2 className="text-amber-200 font-bold doto-font text-sm md:text-xl text-center font-pixel mt-6 [text-shadow:2px_2px_0px_#4c0519]">
                  Happy Birthday to my one and only Arushi "Rani" 👑 <br />
                  Another year older, and yet somehow you’re still the exact
                  same beautifully irritating person I fell for. Honestly, don’t
                  ever change—your chaos is my favorite part of the day. Thank
                  you for loving me with such a wild, selfless heart; tum jaise
                  ho, sach mein best ho.
                </h2>
              </div>

              <div className="fixed bottom-15 w-[80%] left-1/2 -translate-x-1/2 flex justify-between">
                <button onClick={() => changeScene("intro")} className="button">
                  Back
                </button>
                <button className="button" onClick={() => changeScene("page2")}>
                  Next
                </button>
              </div>
            </motion.div>
          ) : scene === "page2" ? (
            <motion.div
              key="page2"
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <div className="container bg-rose-400 border-x-4 border-y-4 border-rose-950 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] p-4 md:p-8 w-full flex flex-col items-center">
                {/* Wrapper to control size */}
                <div className="w-full max-w-[280px] md:max-w-[350px] border-4 border-rose-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                  <PixelImage src={img4} grid="8x8" pixelFadeInDuration={800} />
                </div>

                <h2 className="text-amber-200 font-bold doto-font text-sm md:text-xl text-center font-pixel mt-6 [text-shadow:2px_2px_0px_#4c0519]">
                  It’s a celebration of you—the person who has this magic
                  ability to make my heaviest days feel light and my loudest
                  thoughts feel calm. You’ve become my favourite person without
                  even trying, and my safe space without needing a single
                  promise.
                </h2>
              </div>

              <div className="fixed bottom-15 w-[80%] left-1/2 -translate-x-1/2 flex justify-between">
                <button onClick={() => changeScene("page2")} className="button">
                  Back
                </button>
                <button className="button" onClick={() => changeScene("page3")}>
                  Next
                </button>
              </div>
            </motion.div>
          ) : scene === "page3" ? (
            <motion.div
              key="page3"
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <div className="container bg-rose-400 border-x-4 border-y-4 border-rose-950 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] p-4 md:p-8 w-full flex flex-col items-center">
                {/* Wrapper to control size */}
                <div className="w-full max-w-[280px] md:max-w-[350px] border-4 border-rose-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                  <PixelImage src={img5} grid="8x8" pixelFadeInDuration={800} />
                </div>

                <h2 className="text-amber-200 font-bold doto-font text-sm md:text-xl text-center font-pixel mt-6 [text-shadow:2px_2px_0px_#4c0519]">
                  I struggle to put into words what you truly mean to me, but I
                  want you to know this. Thank you for holding my hand through
                  the highs and for being the reason I smile when I have no
                  reason to. From the laughter we share to that quiet, silent
                  support you give when I need it most—every small moment with
                  you has become my everything. <br />
                  Being with you feels as natural as kya hi bolu chhodho jaane
                  do😂
                </h2>
              </div>

              <div className="fixed bottom-15 w-[80%] left-1/2 -translate-x-1/2 flex justify-between">
                <button onClick={() => changeScene("page3")} className="button">
                  Back
                </button>
                <button className="button" onClick={() => changeScene("page4")}>
                  Next
                </button>
              </div>
            </motion.div>
          ) : scene === "page4" ? (
            <motion.div
              key="page4"
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <div className="container bg-rose-400 border-x-4 border-y-4 border-rose-950 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] p-4 md:p-8 w-full flex flex-col items-center">
                {/* Wrapper to control size */}
                <div className="w-full max-w-[280px] md:max-w-[350px] border-4 border-rose-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]">
                  <PixelImage src={img3} grid="8x8" pixelFadeInDuration={800} />
                </div>

                <h2 className="text-amber-200 font-bold doto-font text-sm md:text-xl text-center font-pixel mt-6 [text-shadow:2px_2px_0px_#4c0519]">
                  On your birthday, Arushi, I wish you endless happiness, a
                  heart that stays at peace, and wild success in every single
                  dream you chase. <br />
                  <br /> I’ll be right here cheering the loudest for you,
                  always. <br />
                  <br /> Happy Birthday, beautiful! 💖
                </h2>
              </div>

              <div className="fixed bottom-15 w-[80%] left-1/2 -translate-x-1/2 flex justify-between">
                <button onClick={() => changeScene("page4")} className="button">
                  Back
                </button>
                <button className="button" onClick={() => changeScene("page5")}>
                  Next
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="page4"
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}>
              <div className="container bg-rose-400 border-x-4 border-y-4 border-rose-950 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] p-4 md:p-8 w-full flex flex-col items-center">
                <div className="w-full max-w-[280px] md:max-w-[350px] border-4 border-rose-900 shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] bg-rose-200 overflow-hidden">
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                <h2 className="text-amber-200 font-bold doto-font text-sm md:text-xl text-center font-pixel mt-6 [text-shadow:2px_2px_0px_#4c0519]">
                  I hope I make you as happy as you make me 🌸
                  <br />
                  <br />
                  Enjoy your day!
                </h2>
              </div>

              <div className="fixed bottom-15 w-[80%] left-1/2 -translate-x-1/2 flex justify-start">
                <button className="button" onClick={() => changeScene("intro")}>
                  HOME
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
