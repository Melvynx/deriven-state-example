import "./App.css";
import { SelectedBook } from "./SelectedBook";
import { SelectedBookFixed } from "./SelectedBookFixed";

export default function App() {
  return (
    <div>
      <h1>With bad deriven state</h1>
      <SelectedBook />
      <h1>Fixed</h1>
      <SelectedBookFixed />
    </div>
  );
}
