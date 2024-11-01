import "./App.css";
import "./reset.css";
import Matrix from "./components/Matrix";
import { useState } from "react";
import { useRemoveItem } from "./hooks/useRemoveItem";
import { useAddItem } from "./hooks/useAddItem";

const defaultItems = [
  { title: "group 1", items: ["1", "2", "3"] },
  { title: "group 2", items: ["4", "5"] },
  { title: "group 3", items: ["6"] },
  { title: "group 4", items: ["7", "8"] },
];

function App() {
  const [items, setItems] = useState(defaultItems);
  const [positionActiveItem, setPositionActiveItem] = useState<null | number>(
    null
  );
  const [groupActiveItem, setGroupActiveItem] = useState<null | string>(null);
  const removeItem = useRemoveItem(setItems);
  const addItem = useAddItem(setItems);

  const getItemByGroupAndIndex = (groupName: string, itemIndex: number) => {
    const group = items.find(({ title }) => title === groupName);
    return group?.items[itemIndex] ?? "";
  };

  const onDrop = (nameGroupToMove: string, positionItemToMove: number) => {
    if (groupActiveItem === null || positionActiveItem === null) return;
    const itemToMove = getItemByGroupAndIndex(
      groupActiveItem,
      positionActiveItem
    );

    removeItem(groupActiveItem, positionActiveItem);
    addItem(nameGroupToMove, positionItemToMove, itemToMove);
  };

  return (
    <div className="App">
      <Matrix
        items={items}
        setPositionActiveItem={setPositionActiveItem}
        setGroupActiveItem={setGroupActiveItem}
        onDrop={onDrop}
      />
    </div>
  );
}

export default App;
