function Home() {
  return (
    <div className="flex  h-screen ml-[250px]">      
      <main className="flex-1 bg-white flex items-center justify-center px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">          
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="lg:text-8xl font-ibmPlex text-sm">
              MY NAME IS <span className="font-bold">GUILHERME <br />RIBEIRO</span>...
            </h1>
            <p className="text-3xl font-ibmPlex ">
              <span className="font-bold italic">Front-End Developer</span> based in Brazil
            </p>
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-4 font-ibmPlex font-bold italic text-lg">
              <p className="flex items-center space-x-2">                
                +55 16 99466-4262
              </p>
              <p className="space-x-2">                
                guiriibeiro52@gmail.com
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative">
              <img src="src/assets/images/Img.png" alt="Guilherme"/>              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
