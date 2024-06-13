
const About = () => {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto mt-[10%]">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 text-white">Programador de videojuegos</h1>

                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-white">Habilidades</h2>
                            <ul className="text-white bg-blue">
                                <li>Liderazgo</li>
                                <li>Resolución de Problemas</li>
                                <li>Gestión de tiempo</li>
                                <li>Trabajo en equipo</li>
                                <li>Adaptibilidad</li>
                                <li>Pensamiento lógico y crítico</li>
                            </ul>
                        </div>

                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-white">Estudios</h2>
                            <p className="leading-relaxed text-base text-white text-center" >Técnico Superior
                                Instituto Superior Tecsup
                                2021-2024</p>

                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Conocimientos</h2>
                            <ul className="text-white bg-blue">
                                <li> Ingles Intermedio</li>
                                <li>Unity
                                    Unreal Engine,
                                    Maya,
                                    Ofimática</li>
                                <li>Lenguajes de Programación:</li>
                                <li>C#
                                    C++
                                    Python
                                    SQL</li>

                            </ul>
                        </div>
                    </div>
                
                </div>

            </div>
        </section>
    )
};

export default About