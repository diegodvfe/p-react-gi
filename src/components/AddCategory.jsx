import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
   const [inputValue, setInputvalue] = useState("");

   const onInputChanged = (event) => {
      // console.log(event.target.value)
      setInputvalue(event.target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
        //  console.log(inputValue);

      if (inputValue.trim().length <= 3) return;

    //   serCategories((categories) => [ inputValue,...categories]);
      onNewCategory(inputValue.trim());
      setInputvalue("");
   };

   return (
      <form onSubmit={(event) => onSubmit(event)}>
         <input
            type="text"
            placeholder="Buscar gifts"
            value={inputValue}
            onChange={onInputChanged}
         />
      </form>
   );
};
