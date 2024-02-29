import s from "./style.module.css";
import copyIcon from "../../assets/OIP.jpeg";

export function PasswordGeneratorFooter(props) {
  function saveToClipboard() {
    navigator.clipboard.writeText(props.password);
  }

  return (
    <div className={s.root} onClick={saveToClipboard}>
      <div>{props.password}</div>
      <img
        className={s.copyPasteIcon}
        src={copyIcon}
        alt="Copy Paste ICON"
      ></img>
    </div>
  );
}
