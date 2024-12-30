import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex h-screen justify-center overflow-hidden">
      <motion.div
        className="flex-1 flex items-center ml-[260px] justify-center overflow-hidden p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <div
          className="w-full h-full max-w-6xl mx-auto"
          style={{
            transform: "scale(calc(100vh / (1080px)))",
            transformOrigin: "top center",
          }}
        >          
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full">
           
            <div className="lg:w-1/2 text-center lg:text-left flex flex-col">
              <p className="font-ibmPlex text-lg italic font-semibold">
                Nice to meet you!
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mt-4 font-ibmPlex">
                WELCOME TO...
              </h1>
              <div className="mt-8">
                <img
                  src="src/assets/images/Img2.png"
                  alt="Guilherme Ribeiro"
                  className="mx-auto w-[420px] h-420px] rounded-full"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-ibmPlex italic font-bold text-2xl">
                  Front-End Developer{" "}
                  <span className="font-normal not-italic">based in</span>{" "}
                  Brazil
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg font-ibmPlex font-bold italic">
                <div className="flex items-center space-x-3">
                  <span>+55 16 99466-4262</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>35 yrs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>guiriibeiro52@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>Brazil, Franca</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="font-ibmPlex">
                  <div className="flex gap-3 items-center">
                    <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">
                      10+
                    </p>
                    <p className="text-lg font-bold italic leading-none">
                      Years <br />
                      experience...
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Hello there! My name is Guilherme Ribeiro. I am a Front-End
                    developer, and I’m very passionate and dedicated to my work.
                  </p>
                </div>
                <div className="font-ibmPlex">
                  <div className="flex gap-3 items-center">
                    <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">
                      14
                    </p>
                    <p className="text-lg font-bold italic leading-none">
                      Clients <br />
                      Worldwide...
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700">
                    With 10+ years experience as a professional graphic
                    designer, I have acquired the skills and knowledge necessary
                    to make your project a success.
                  </p>
                </div>
              </div>

              <div className="bg-black text-white p-6 mt-10 rounded-lg">
                <p className="italic text-lg">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus sed sit ultrices et sed metus sollicitudin.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
