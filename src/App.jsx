import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
function App() {

  const [formData, setFormData] = useState({ 
    movieName: "", 
    directorName: "" 
  });

  const [error, setError] = useState(false);
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data) => {
  
    if (data.movieName.length < 3 || data.movieName.startsWith(" ") || data.directorName.length < 6) {
      setError(true);
      setIsSubmitted(false);
    } else {
      setError(false);
      setIsSubmitted(true);
      setFormData(data);
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Películas</h1>
      <Form onSubmit={handleSubmit} />
      {error && <ErrorMessage message="Por favor chequea que la información sea correcta" />}
      {isSubmitted && <Card data={formData} />}
    </div>
  );
}

export default App;
