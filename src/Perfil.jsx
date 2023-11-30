import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import habi from './img/habi.jpg';
import { decodeToken } from "./services/AuthenticateServices";


function Perfil() {
    /* // Obtén el usuario y la función para actualizarlo desde el contexto
    const { user: contextUser, updateUser } = useUser();
    // Usa el estado local para almacenar el usuario    
    const [user, setUser] = useState(contextUser);
    // useEffect se utiliza para realizar operaciones después de renderizar el componente
    useEffect(() => {
        // Intenta obtener el token del almacenamiento local
        try {
            const token = localStorage.getItem("token");
            // Verifica si hay un token y el usuario aún no está en el estado local
            if (token && !user) {
                // Decodifica el token para obtener los datos del usuario
                console.log(token)
                decodeToken(token).then((decodedUser) => {
                        // Puedes utilizarlo para realizar cambios antes de actualizar el estado
                        setUser(decodedUser); // Actualizar el contexto del usuario
                });
            }
        } catch (error) {
            console.log(error)
        }
    }, [user, setUser]);
 */
    return (
        <>
            <Header />
            <div>
                {/* Sección de perfil Y EDICION*/}
               
                <section>
                    <div>
                        <div>
                            <img src={habi} alt="" width={200} />
                        </div>
                        <div>
                        {/* Verifica si hay un usuario antes de mostrar la información */}
                    
                            <>
                            <div>
                                <p> (Nombre:)</p> 
                            </div>
                            <div>Apellido:</div>
                            <div>Email:</div>
                            <div>ROLE:</div>
                            </>
               
                        </div>
                    </div>
                </section>

                {/* Historial de perfil - publicaciones interesadas o INFO de cuarto actual */}
                <section></section>
            </div>
        </>
    );
}

export default Perfil;