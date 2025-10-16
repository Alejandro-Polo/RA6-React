import ListaArticulos from "./assets/components/ListaArticulos";

/**
 * Componente principal de la aplicación React.
 * @component
 * @returns {JSX.Element} Estructura visual del componente.
 */
export default function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center text-primary mb-4">Comentarios Sobre las IAs</h1>
      <ListaArticulos />
    </div>
  );
}
