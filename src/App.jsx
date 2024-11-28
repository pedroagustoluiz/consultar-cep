import { useState } from "react";
import { FaSearch } from "react-icons/fa";
function App() {
  const [cep, setCep] = useState("");
  const [showCep, setShowCep] = useState({});

  const consultCep = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const result = await response.json();
    setShowCep({
      bairro: result.bairro,
      cidade: result.localidade,
      uf: result.uf,
      ddd: result.ddd,
    });
    console.log(result);
    return result;
  };

  return (
    <>
      <main>
        <h1 className="title">Buscador de CEP:</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Digite aqui!"
            required
            onChange={(ev) => setCep(ev.target.value)}
          />
          <button className="icon" onClick={consultCep}>
            <FaSearch />
          </button>
        </div>
        {Object.keys(showCep).length > 0 && (
          <div className="result">
            <h2>CEP-{cep}</h2>
            <p>Bairro: {showCep.bairro}</p>
            <p>Cidade: {showCep.cidade}</p>
            <p>UF: {showCep.uf}</p>
            <p>DDD: {showCep.ddd}</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
