import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import icon from "../assets/images/icons/Icon.png";
import mail from "../assets/images/icons/mail.png";
import person from "../assets/images/icons/person.png";
import pin from "../assets/images/icons/pin.png";
import img2 from "../assets/images/Img2.png"


function About() {
  const { t } = useTranslation();

  return (
    <div className="flex lg:h-screen justify-center lg:overflow-hidden overflow-auto">
      <motion.div
        className="flex h-full lg:ml-[260px] justify-center items-center"
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
          <div className="flex flex-col lg:flex-row items-center justify-center mt-16 lg:mt-0 w-full">
            <div className="lg:w-1/2 text-center lg:text-left flex flex-col">
              <p className="font-ibmPlex text-lg italic font-semibold">
                {t("about.greeting")}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold mt-4 font-ibmPlex">
                {t("about.welcome")}
              </h1>
              <div className="mt-8">
                <img
                  src={img2}
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

            <div className="lg:w-1/2 mt-12 p-4 lg:p-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:text-sm xl:text-lg font-ibmPlex font-bold italic">
                <div className="flex items-center space-x-3">
                  <img src={icon} alt="phone" />
                  <span>+55 16 99466-4262</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={person} alt="age" />
                  <span>{t("about.age")}</span>
                </div>
                <div className="flex items-center space-x-3">
                <img src={mail} alt="mail" />
                  <span>guiriibeiro52@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={pin} alt="locate" />
                  <span>{t("about.city")}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="font-ibmPlex">
                  <div className="flex gap-3 items-center text-ju">
                    <p className="text-5xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">
                      10+
                    </p>
                    <p className="text-lg lg:text-sm xl:text-lg font-bold italic xl:leading-none">
                      {t("about.years")}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700 text-justify">{t("about.description")}</p>
                </div>
                <div className="font-ibmPlex">
                  <div className="flex gap-3 items-center">
                    <p className="text-5xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">
                      14+
                    </p>
                    <p className="text-lg lg:text-sm xl:text-lg font-bold italic xl:leading-none">
                      {t("about.clients")}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-700 text-justify">
                    {t("about.clientsDescription")}
                  </p>
                </div>
              </div>

              <div className="bg-black text-white p-6 my-10">
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
