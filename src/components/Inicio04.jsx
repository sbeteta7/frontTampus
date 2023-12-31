import AnuncioServices from "../services/AnuncioServices";
import { useState, useEffect } from "react";
const Inicio04 = () => {
      
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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">Mis propiedades</h1>
            </div>
            <div className="flex flex-wrap -m-4">
            { anuncios.map((anuncio)=>(
                
                
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{anuncio.titulo}</h2>
                        <p className="mt-1">{anuncio.precio_min} - {anuncio.precio_max}</p> 
                        </div>
                    </div>
                
            ))
            }
            </div>
                

            </div>
        </section>
    );
};

export default Inicio04;