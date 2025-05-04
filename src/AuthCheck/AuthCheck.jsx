import { Navigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

const AuthCheck = ({ children }) => {
  // Simulación de verificación de autenticación (esto debe ser reemplazado por lógica real)
  const [isAuthenticate, setIsAuthenticate] = useState(null); // `null` indica que aún estamos verificando
  const location = useLocation();

  useEffect(() => {
    // Simulación de llamada a un servicio para verificar si el usuario está autenticado
    const checkAuth = async () => {
      try {
        // Aquí puedes hacer una solicitud a tu API o verificar el estado de autenticación
        // Ejemplo: setIsAuthenticate(await authService.isAuthenticated());
        setIsAuthenticate(true); // Simula que está autenticado
      } catch (error) {
        setIsAuthenticate(false); // Si hay un error, consideramos que no está autenticado
      }
    };

    checkAuth();
  }, []);

  // Mientras se verifica la autenticación, podemos mostrar un "cargando" o un spinner si lo prefieres
  if (isAuthenticate === null) {
    return <div>Loading...</div>; // O un componente de carga más estilizado
  }

  if (!isAuthenticate) {
    // Redirige a la página de login si no está autenticado
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children; // Si está autenticado, muestra el contenido
};

export default AuthCheck;
