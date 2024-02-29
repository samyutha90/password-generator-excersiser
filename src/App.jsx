import { PasswordGenerator } from "./components/PasswordGenerator/PasswordGenerator";
import s from "./style.module.css";

export function App() {
  return (
    <div className={s.root}>
      <PasswordGenerator />
    </div>
  );
}
