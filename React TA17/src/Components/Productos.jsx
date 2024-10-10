import React from "react"
import {useParams} from "react-router-dom"

const Productos = () => {

    const {id} = useParams();

    const productos = {
        1: {nombre: "Manzana", precio: 200, descripcion: "52 calorias cada 100 gramos, aporta valores considerables de magnesio y vitamina C para una dieta saludable."},
        2: {nombre: "Banana", precio: 300, descripcion: "Una banana aporta 110 calorias aproximadamente y es una gran fuente de potasio, fibra y carbohidratos."},
        3: {nombre: "Naranja", precio: 150, descripcion: "47 calorias cada 100 gramos, una buena fuente de vitamina C, vitamina B6, potasio y fibra."}
    }

    return(
        <>
            <div>
                <h1>{productos[id].nombre}</h1>
                <h2>Precio: ${productos[id].precio}</h2>
                <p>
                    <strong>Información nutricional: </strong><br />{productos[id].descripcion}
                </p>
            </div>
        </>
    )
}

export default Productos;