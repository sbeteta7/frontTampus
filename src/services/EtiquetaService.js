import axios from "axios";
const ETIQUETA_GET_REST_API_URL ="http://localhost:8091/api/etiquetas/getAll";

class EtiquetaServices{
    getAllEtiquetas(){
        const token = localStorage.getItem('auth_token');
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    
        return axios.get(ETIQUETA_GET_REST_API_URL, { headers })
    }
}
export default new EtiquetaServices();