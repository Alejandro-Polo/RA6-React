const API_URL = "http://localhost:8000/api/articulos";

/**
 * Obtiene la lista de artículos desde la API Symfony.
 *
 * @async
 * @function getArticulos
 * @returns {Promise<Object[]>} Lista de artículos.
 * @throws {Error} Si ocurre un problema al obtener los datos.
 *
 * @example
 * const articulos = await getArticulos();
 * console.log(articulos[0].nombre);
 */
export async function getArticulos() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener los artículos");
  return await response.json();
}