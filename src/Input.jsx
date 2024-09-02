import "./assets/Input.css";
import { useState } from "react";

export default function Input({ places, setPlaces }) {
  const [inputValue, setInputValue] = useState("");

  const addPlace = (inputValue) => {
    if (inputValue.trim() == "") return;
    const newPlace = [...places, inputValue];
    setPlaces(newPlace);
    localStorage.setItem("travel", JSON.stringify(newPlace));
  };

  const handleAddClick = () => {
    if (inputValue.trim() == "") {
      alert("여행지를 입력하세요");
      document.querySelector(".inputText").focus();
      return;
    }
    addPlace(inputValue);
    setInputValue(""); // 입력 필드를 비웁니다.
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      addPlace(inputValue);
      setInputValue("");
    }
  };
  return (
    <div className="inputCon">
      <input
        className="inputText"
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button className="inputBtn" onClick={handleAddClick}>
        ADD
      </button>
    </div>
  );
}
