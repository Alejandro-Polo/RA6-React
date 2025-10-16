import { useEffect, useState } from "react";
import { getArticulos } from "../services/api";

/**
 * Componente que muestra una lista de comentarios obtenidos desde la API Symfony.
 *
 * @component
 * @example
 * return (
 *   <ListaComentarios />
 * )
 */
export default function ListaComentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticulos()
      .then(setComentarios)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="text-danger text-center">{error}</p>;
/**
 * Se usan diferentes parametros recogidos en json desde la apin de symfony
 * 
 * @param {int} comentario.id
 * @param {string} comentario.titulo
 * @param {string} comentario.descripcion
 * @param {string} comentario.valoracion
 */
  return (
    <div className="row mt-4">
      {comentarios.map((a) => (
        <div key={a.id} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            {/* <img src={a.foto} className="card-img-top" alt={a.nombre} /> */}
            <div className="card-body">
              <h5 className="card-title">{a.titulo}</h5>
              <p className="card-text">{a.descripcion}</p>
              <div className="d-flex justify-content-between align-items-center">
                {/* <span className="fw-bold text-primary">{a.precio} €</span> */}
                <span>{"⭐".repeat(a.valoracion)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
