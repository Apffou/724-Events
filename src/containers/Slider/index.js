import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);


  // PLacement du focus sur l'élément indiqué grâce au trie via la méthode sort
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    // Changement de l'opérateur logique pour trier de la plus récente à la plus ancienne
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
      // setIndex Ajoute 1 Si index est inférieur à la longueur de byDateDesc -1, sinon on rénitialise à zéro, cela créer une boucle.
      // Si byDateDesc existe, alors ça prends sa longueur sinon 0 (enlève l'erreur dans la console)
      () => setIndex(index < (byDateDesc?.length || 0) - 1 ? index + 1 : 0),
      5000
    );
  };

  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (

        <div key={event.title}>
          <div

            className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
              }`}
          >
            {/* Attribut Alt correspond au visuel de la photo */}
            <img src={event.cover} alt={event.description} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {/* Changement de idx par index (useState) pour suivre la bonne image + Changement de la valeur de key pour la rendre unique */}
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={_.date}
                  readOnly
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
