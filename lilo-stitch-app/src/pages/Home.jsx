import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Ohana App</h1>
          <div className="flex items-center space-x-4">
            <span className="text-white">{user?.email}</span>
            <button
              onClick={() => navigate('/results')}
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ver Experimentos
            </button>
            <button
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold mb-6">Bienvenido a tu Portal de Experimentos</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg mb-4">
            "Ohana significa familia, y la familia nunca te abandona ni te olvida."
          </p>
          <p className="mb-4">
            Explora nuestra colección de experimentos del Dr. Jumba y descubre
            todas las creaciones increíbles que forman parte de nuestra ohana.
          </p>
          <button
            onClick={() => navigate('/results')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Explorar Experimentos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;