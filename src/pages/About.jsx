import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

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
                {t("about.greeting")}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mt-4 font-ibmPlex">
                {t("about.welcome")}
              </h1>
              <div className="mt-8">
                <img
                  src="src/assets/images/Img2.png"
                  alt={t("about.altText", { name: "Guilherme Ribeiro" })}
                  className="mx-auto w-[420px] h-420px] rounded-full"
                />
              </div>
              <div className="text-center mt-4">
                <p className="font-ibmPlex italic font-bold text-2xl">
                  {t("about.developer")} <spam className="font-normal">{t("about.based")}</spam> {t("about.country")}                
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
                      {t("about.years")}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700">{t("about.description")}</p>
                </div>
                <div className="font-ibmPlex">
                  <div className="flex gap-3 items-center">
                    <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">
                      14
                    </p>
                    <p className="text-lg font-bold italic leading-none">
                      {t("about.clients")}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700">
                    {t("about.clientsDescription")}
                  </p>
                </div>
              </div>

              <div className="bg-black text-white p-6 mt-10 rounded-lg">
                <p className="italic text-lg">
                  {t("about.quote")}
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
