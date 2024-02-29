import s from "./style.module.css";
import { generatedPwd } from "../../lib/password";

export function PasswordGeneratorBody(props) {
  const submit = (e) => {
    //To prevent the reload after submit the form
    e.preventDefault();

    //Step 1 : Get the values from form
    let formData = {};
    const form = new FormData(e.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });

    // Step 2: Genereate Random Password
    // Step 3: Update the generated password  in parent components password state
    props.onSubmit(generatedPwd(formData));
  };

  return (
    <form onSubmit={submit}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select name="size" defaultValue={10}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Number
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name="specials" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button type="submit" className={s.btn_generate}>
          GENERATE
        </button>
      </div>
    </form>
  );
}
