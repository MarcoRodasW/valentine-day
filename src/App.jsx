import { useState } from 'react'

import './App.css'

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Estás segura?",
      "Segura segura?",
      "Piensalo otra vez 🙄!",
      "Ultima oportunidad!",
      "De verdad estas diciendo que no😑?",
      "Bueno, te lo pierdes 😠!",
      "Vamos, vuelvelo a pensar😒!",
      "De verdad estas segura?",
      "Ten alguito de corazón pls",
      "Es que ya no me amas? 😓",
      "No lo vas a reconsiderar? 🥲",
      "Esa es tú ultima respuesta?",
      "Me estás rompiendo el corazón ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-lg xl:text-4xl text-center my-4 font-bold">Mi amorcito, me harías el honor de ser mi San Valentin un año más?</h1>
          <div className='flex flex-grow-0 flex-wrap items-center justify-center h-auto'>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

