import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./config";

function App() {
  const [word, setWord] = useState("");
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  async function getJoke() {
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/joke/generate`, { word });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-2xl font-semibold mb-4">Welcome to AI Joke Generator</div>
      <label className="mb-2 text-center">Enter a word related to which joke should be generated:</label>
      <input
        type="text"
        placeholder="Enter word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2"
      />
      <button
        onClick={() => getJoke()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Joke
      </button>
      {loading && <div className="mt-4">Loading...</div>}
      {joke && !loading && (
        <div className="mt-4 bg-white border border-gray-300 rounded-md p-4">
          <strong>Generated Joke:</strong> {joke}
        </div>
      )}
    </div>
  );
}

export default App;
