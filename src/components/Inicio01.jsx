import AnuncioServices from "../services/AnuncioServices";
import { useState,useEffect } from "react";



const Inicio01 = () => {

    const [anuncios,setAnuncios] = useState([])
 
  
    useEffect(()=>{
      AnuncioServices.getAnuncio().then(response =>{
        setAnuncios(response.data);
        console.log(response.data)
      }).catch(error=>{
        console.log(error);
      })
    },[])
    
    return (
        <section class="text-gray-600 body-font flex">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Siempre estamos cerca de ti...</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores recusandae dicta quas minus expedita natus rerum dolorem nisi maxime molestias qui, dignissimos reprehenderit amet magnam sit blanditiis veniam voluptate.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    {anuncios.map((anuncio)=>(
                    <div class="xl:w-1/4 md:w-1/2 p-4 ">
                        <div class="bg-gray-100 p-6 rounded-lg">
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Propietario 01</h3>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{anuncio.titulo}</h2>
                        <p class="leading-relaxed text-base">{anuncio.descripcion}</p>
                        </div>
                    </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Inicio01;
