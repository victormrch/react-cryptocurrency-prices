import { useState } from "react";
import { LabelCurrency, SelectUseCurrency } from "./useSelectCurrency.style";

const useSelectCurrency = (title, label, options) => {
  const [state, setState] = useState("");

  const SelectCurrency = () => (
    <>
      <LabelCurrency>{title}</LabelCurrency>
      <SelectUseCurrency
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </SelectUseCurrency>
    </>
  );
  return [state, SelectCurrency];
};

export default useSelectCurrency;
