import axios from "axios";

const ANUNCIO_REGISTER_REST_API_URL = "http://localhost:8091/api/anuncios/store";
const ANUNCIO_GET_REST_API_URL = "http://localhost:8091/api/anuncios/getAll";
const ETIQUETA_ANUNCIO_ADD_REST_API_URL = "http://localhost:8091/api/anuncioEtiquetas/associate";
const IMAGEN_REGISTER_REST_API_URL = "http://localhost:8091/api/imagenes/upload";

class AnuncioServices {
  getAnuncio() {
    return axios.get(ANUNCIO_GET_REST_API_URL);
  }

  createAnuncio(anuncio) {
    const token = localStorage.getItem('auth_token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return axios.post(ANUNCIO_REGISTER_REST_API_URL, anuncio, { headers });
  }

  associateEtiquetas(etiquetas) {
    const token = localStorage.getItem('auth_token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return axios.post(ETIQUETA_ANUNCIO_ADD_REST_API_URL, etiquetas, { headers });
  }

/*   associateImagenes(imagenes) {
    const token = localStorage.getItem('auth_token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return axios.post(IMAGEN_REGISTER_REST_API_URL, imagenes, { headers });
  } */
}

export default new AnuncioServices();
    