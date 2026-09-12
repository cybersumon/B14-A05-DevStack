import banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <section className="bg-white">
            <div className=" mx-auto grid min-h-130 max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
                {/* left side contant */}
                <div>
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Build Your Ideal <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Development Stack</span> </h1>
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">Explore frontend,backend,database and tooling options.
                        Compare them side by side and put togather the stack
                        thats fits your next project  </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#technologies" className="rounded-md bg-linear-to-r from-orange-500 via-pink-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white ">Explrar Technologies</a>
                        <a href="#contact" className=" rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 ">Learn More</a>


                    </div>

                </div>
                {/* right side contant */}


                <div>
                    <img src={banner} alt="Development Technology Stack" />
                </div>


            </div>
        </section>
    );
};

export default Hero;