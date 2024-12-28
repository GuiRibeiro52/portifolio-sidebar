function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-8 py-16">
      
      <div className="lg:w-1/2 text-center lg:text-left flex flex-col">
        <p className="font-ibmPlex text-lg italic font-semibold">Nice to meet you!</p>
        <h1 className="text-5xl lg:text-6xl font-bold mt-4 font-ibmPlex">
          WELCOME TO...
        </h1>
        <div className="mt-8">
          <img
            src="src/assets/images/Image.png"
            alt="Guilherme Ribeiro"
            className="mx-auto w-auto h-auto rounded-full lg:mx-0"
          />          
        </div>
        <div className="text-center">
          <p className="font-ibmPlex italic font-bold text-2xl">Front-End Developer <span className="font-normal not-italic">based in</span> Brazil</p>
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
                <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">10+</p>
                <p className="text-lg font-bold italic leading-none">Years <br />experience...</p>
            </div>           
            <p className="mt-2 text-gray-700">
              Hello there! My name is Guilherme Ribeiro. I am a Front-End developer, and I’m very passionate and dedicated to my work.
            </p>
          </div>
          <div className="font-ibmPlex">
            <div className="flex gap-3 items-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text inline-block w-fit">14</p>
              <p className="text-lg font-bold italic leading-none">Clients <br />Worldwide...</p>
            </div>            
            <p className="mt-2 text-gray-700">
              With 10+ years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
            </p>
          </div>
        </div>

        {/* Citação */}
        <div className="bg-black text-white p-6 mt-10 rounded-lg">
          <p className="italic text-lg">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
