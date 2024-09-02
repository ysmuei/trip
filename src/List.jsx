import "./assets/list.css";

export default function List({ places, setPlaces }) {
  const removePlace = (placeToRemove) => {
    const updatedPlaces = places.filter((place) => place !== placeToRemove);
    setPlaces(updatedPlaces);
    localStorage.setItem("travel", JSON.stringify(updatedPlaces));
  };

  return (
    <div className="listCon">
      {places.length === 0 ? (
        <div className="noList">
          <p className="noListFont">등록된 여행지가 없습니다.</p>
        </div>
      ) : (
        <ul className="lists">
          {places.map((place, index) => (
            <li key={index} className="list">
              <p>{place}</p>
              <i
                className="fa-solid fa-trash"
                onClick={() => removePlace(place)}
              ></i>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
