import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ApiResults = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExperiments = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api-ejemplo.com/lilo-stitch-characters', {
          headers: {
            Authorization: `Bearer YOUR_API_TOKEN_HERE`
          }
        });
        const data = await response.json();
        setExperiments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchExperiments();
  }, []);
  

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-2xl">Cargando experimentos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-100">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Experimentos</h1>
          <button
            onClick={() => navigate('/home')}
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Volver a Inicio
          </button>
        </div>
      </nav>
      <div className="container mx-auto mt-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <div
              key={experiment._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={experiment.imageUrl || '/experiment-placeholder.png'}
                alt={experiment.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{experiment.name}</h3>
                <p className="text-gray-600">
                  {experiment.films.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiResults;