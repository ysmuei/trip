import "./assets/myreset.css";
import "./assets/App.css";

import Header from "./Header";
import Input from "./Input";
import Totalcount from "./Totalcount";
import List from "./List";
import { useState, useEffect } from "react";

function App() {
  const [places, setPlaces] = useState([]);

  // 로컬스토리지에서 데이터를 가져와서 state를 초기화합니다.
  useEffect(() => {
    const storedPlaces = JSON.parse(localStorage.getItem("travel")) || [];
    setPlaces(storedPlaces);
  }, []);

  return (
    <>
      <Header />
      <Input places={places} setPlaces={setPlaces} />
      <Totalcount count={places.length} />
      <List places={places} setPlaces={setPlaces} />
    </>
  );
}

export default App;
