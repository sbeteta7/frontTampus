import React, { useEffect, useState } from 'react';
import AnuncioServices from '../../services/AnuncioServices';
import EtiquetaServices from '../../services/EtiquetaService';
import { RadioGroup, FormControl,FormControlLabel,FormGroup,Checkbox,Card
,CardContent,TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import MinimumNumberInput from '../atoms/MinimumNumberInput';
import NumberInputBasic from '../atoms/NumberInputBasic';
import RangePublishForm from '../atoms/RangePublishForm';
import FormImg from '../atoms/FormImg';
import { Box } from '@mui/material';
import userService from '../../services/userService';
import { useAuth } from '../Context';



function PublishForm() {

  const Auth = useAuth()
  const id_usuario = Auth.getUser().data.id_user
  
  const [id_user,setId_user]=useState(id_usuario) 
  const [id_anuncio,setId_anuncio] = useState()
  const [titulo, setTitulo] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [precio_min, setPrecioMin] = useState();
  const [precio_max, setPrecioMax] = useState();

  const [tipo_espacio, setTipoEspacio] = useState('');
  const [num_hab, setNumHabitaciones] = useState();
  const [num_cama, setNumCamas] = useState();
  const [dimensiones, setDimensiones] = useState();
  const [etiquetas, setEtiquetas] = useState([]);
  const [postEtiquetas,setPostEtiquetas]=useState([])
  
/* useEffect(()=>{
  console.log("ESTE ES MI ID: "+ id_usuario)
  userService.findUserById(id_usuario).then(response=>{
    console.log("ESTE ES EL USUARIO: " + response.data)
    //setId_user(response.data)
  }).catch(error=>{})},[])
 */

useEffect(()=>{
  EtiquetaServices.getAllEtiquetas().then(response =>{
    setEtiquetas(response.data);

  }).catch(error=>{
    console.log(error);
  })
},[])


  const saveAnuncio = (e) => {
    e.preventDefault();
    
     console.log("ID USUARIO : " + id_user)
    const anuncio = {id_user,titulo,descripcion,precio_min,precio_max,tipo_espacio,num_hab,num_cama,dimensiones};
   
    console.log("La variable anuncio a procesar es :  "+anuncio)
    AnuncioServices.createAnuncio(anuncio)
  .then(response=>{
    console.log("La respuestas procesada es: " + response.data)
    const id=response.data.id_anuncio
    setId_anuncio(id)
    console.log("ID de anuncio = " + id + " TIPO DE DATO = " + typeof(response.data.id_anuncio))
    
    const selectedEtiquetas = etiquetas.filter((etiqueta) => postEtiquetas.includes(etiqueta.id_etiqueta));
    console.log("Selected Etiquetas es: " + selectedEtiquetas)
    setPostEtiquetas(selectedEtiquetas);
    associateEtiquetasWithAnuncio(id);
    
    // Envía las imágenes al servidor


/*     const imagenesData = imagenes.map((ruta) => ({ id_anuncio: id, ruta: ruta }));
    console.log(imagenesData)
    AnuncioServices.associateImagenes(imagenesData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      }); */
    


    console.log(id)
  }).catch(error=>{
    console.log(error)
  })


}
const associateEtiquetasWithAnuncio = (id_anuncio) => {
  const id_etiquetas = postEtiquetas.map(etiqueta => etiqueta.id_etiqueta);
  
  const requestBody = {
    id_anuncio: id_anuncio,
    id_etiquetas: id_etiquetas,
  };

  console.log(requestBody)
  AnuncioServices.associateEtiquetas(requestBody)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};


const handleFileUpload = (e) => {
  const files = e.target.files;
  if (files && files.length > 0) {
    const selectedImages = Array.from(files);
    const imagePaths = selectedImages.map((image) => URL.createObjectURL(image));
    setImagenes(imagePaths);
  }
};

const handleEtiquetaChange = (etiquetaId, isChecked) => {
  // Copia el estado actual de postEtiquetas en una nueva variable
  const updatedPostEtiquetas = [...postEtiquetas];
  
  if (isChecked) {
    // Si el checkbox se marca, agrega la etiqueta completa al array
    const etiqueta = etiquetas.find(etiqueta => etiqueta.id_etiqueta === etiquetaId);
    if (etiqueta) {
      updatedPostEtiquetas.push(etiqueta);
    }
  } else {
    // Si el checkbox se desmarca, elimina la etiqueta del array
    const index = updatedPostEtiquetas.findIndex(etiqueta => etiqueta.id_etiqueta === etiquetaId);
    if (index !== -1) {
      updatedPostEtiquetas.splice(index, 1);
    }
  }

  // Actualiza el estado postEtiquetas con la nueva variable
  setPostEtiquetas(updatedPostEtiquetas);
};

const FormStyle={
  width:'80%',
  position:'relative',
  margin: 'auto',
  left:'10%'
}


    return(
        <>
          <FormControl sx={FormStyle}>
            <Box >
            <Card variant="outlined" >
              <CardContent>
                {/* <Typography variant="body2" color="text.secondary"> */}
                  <Box my={2}>
                    <TextField 
                      id="standard-basic"
                      label="Titulo"
                      variant="standard"
                      type="text"
                      name="titulo"
                      value={titulo}
                      fullWidth
                      onChange={(e)=>setTitulo(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormImg 
                    onChange={handleFileUpload}
                    
                    />
                  </Box>
                  <TextField
                    id="outlined-basic"
                    label="Descripcion"
                    variant="outlined"
                    name="descripcion"
                    value={descripcion}
                    multiline  // Permite múltiples líneas
                    rows={4}    // Ajusta la altura según tus necesidades
                    fullWidth
                    onChange={(e)=>setDescripcion(e.target.value)}
                  />
             {/*    </Typography> */}
              </CardContent>
            </Card>


            </Box>
            <Box>
              <p>Tipo de espacio</p>       
                       
       
              <RadioGroup
                  aria-label="custom-radio-group"
                  name="TipoEspacio"    
                >
                <div>
                  <input type="radio" id="habitacion" name="TipoEspacio" value="Habitación"
                    onChange={(e)=> setTipoEspacio(e.target.value)}  />
                  <label htmlFor="habitacion">Habitación</label>
                </div>

                <div>
                  <input type="radio" id="departamento" name="TipoEspacio" value="Departamento" 
                    onChange={(e)=> setTipoEspacio(e.target.value)}/>
                  <label htmlFor="departamento">Departamento</label>
                </div>

                <div>
                  <input type="radio" id="casa" name="TipoEspacio" value="Casa" 
                    onChange={(e)=> setTipoEspacio(e.target.value)}/>
                  <label htmlFor="casa">Casa</label>
                </div>
              </RadioGroup>
            </Box>
            <Box>
              <RangePublishForm/>
            </Box>
            <Box>
              <p>Precio Min</p>
              <NumberInputBasic name="PrecioMin"
               onChange={(e)=> setPrecioMin(e.target.value)}/>
              <p>Precio Max</p>
              <NumberInputBasic name="PrecioMax" onChange={(e)=> setPrecioMax(e.target.value)}/>
            </Box>
            <Box>
              <p>Dimensiones en m2</p>
              <NumberInputBasic name="Dimension" onChange={(e)=> setDimensiones(e.target.value)}/>
            </Box>
            <Box>
              <p>Numero de habitaciones</p>
              <MinimumNumberInput name="NumHabitacion" onChange={(e)=> setNumHabitaciones(e.target.value)}/>
            </Box>
            <Box>
              <p>Numero de camas</p>
              <MinimumNumberInput name="NumCamas" onChange={(e)=> setNumCamas(e.target.value)} />
            </Box>

            <Box>
          {etiquetas.map((etiqueta) => (
            
            
              <div key={etiqueta.id_etiqueta}>
                <FormGroup>
                <FormControlLabel control={<Checkbox
                value={etiqueta.id_etiqueta}
                onChange={(e) =>
                  handleEtiquetaChange(
                    etiqueta.id_etiqueta,
                    e.target.checked // Verifica si el checkbox se marca o desmarca
                  )
                }
                />} label={etiqueta.nombre} />
              </FormGroup>
                
                <br />
              </div>
            ))}  
            </Box>          
            <Box>
            
               <LoadingButton 
                onClick={(e) => saveAnuncio(e)}
                size='small'
                variant='outlined'>
                Publicar anuncio
              </LoadingButton>
              </Box>
        
          </FormControl>
        </>
    )
}

export default PublishForm