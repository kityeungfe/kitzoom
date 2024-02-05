import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const project_entry = import.meta.env.VITE_PROJECT_ENTRY
const anon_key = import.meta.env.VITE_ANON_KEY

const supabase = createClient(project_entry, anon_key);

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;