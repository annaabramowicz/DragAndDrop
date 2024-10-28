import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="App">
      <div className="drag-and-drop">
        <div className="dnd-group">
          <div className="dnd-item">
            <div>
              <p>ITEM 1</p>
            </div>
          </div>
        </div>
        <div className="dnd-group">
          <div className="dnd-item">
            <div>
              <p>ITEM 2</p>
            </div>
          </div>
        </div>
        <div className="dnd-group">
          <div className="dnd-item">
            <div>
              <p>ITEM 3</p>
            </div>
          </div>
        </div>
        <div className="dnd-group">
          <div className="dnd-item">
            <div>
              <p>ITEM 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
