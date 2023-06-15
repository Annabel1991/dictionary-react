
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
       </header>
       <main>
        <Dictionary/>
       </main>
       <footer className="text-center small mt-4">
  <p>
    This project was coded by Anna Bilokon and is {" "}
    <a href="https://github.com/Annabel1991/dictionary-react">open-sourced on GitHub</a>{" "}
    and hosted on{" "}
    <a href="https://luminous-stroopwafel-c10dfe.netlify.app" target="_blank"   rel="noopener noreferrer">Netlify</a>. 
  </p>
</footer>
      </div>
    </div>
  );
}

