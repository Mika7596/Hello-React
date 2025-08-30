import "./App.css";
import UpperPart from "./components/UpperPart";
import data from "./assets/data/data";
import Crad from "./components/Crad";

function App() {
  return (
    <div className="app">
      <UpperPart></UpperPart>
      <div className="lower-part">
        {data.map((item, index) => {
          return (
            <Crad
              img={item.img}
              title={item.title}
              content={item.content}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
