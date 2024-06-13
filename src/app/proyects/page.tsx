import { Card } from "@/components/widgets/card";
import Link from "next/link";

 const Proyects = () => {

    const slides = [
        { id: 1, title:"ShooterRPC", description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra01.png", tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2'] },
        { id: 2, title:"TanquesRPC", description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra0102.png", tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2']},
        { id: 3, title:"vrRPC",description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra0203.png",tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2'] },
        { id: 4, title:"vrRPCField",description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra0202.png",tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2'] },
        { id: 5, title:"vrRPCSpace",description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra0301.png",tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2'] },
        { id: 6, title:"vrRPCCity",description:"Características Principales: Integración con Unity: Optimizado para trabajar con Unity, fácil de integrar en proyectos existentes. Facilidad de uso: Documentación completa y ejemplos claros. Matchmaking y lobbies: Gestión de jugadores y salas de juego. Sincronización de estados: Herramientas para sincronizar el estado del juego entre múltiples jugadores.Oculus Quest 2.", bgImage: "/imgs/muestra0302.png",tecnologias:['Unity 3D', 'Photon PUN', 'Oculus quest 2'] },
      
      ];

    
    return (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 ml-[10%] mt-[5%] md:grid grid-cols-2  lg:pl-[10%] pr-[10%] pt-20 sm:grid grid-cols-1">
            {slides.map((element)=>(
                <Card key={element.id} title={element.title} description={element.description} img={element.bgImage} tecnologias={element.tecnologias || ['test']}/>
            ))}
      </div>
      );
    };

    export default Proyects