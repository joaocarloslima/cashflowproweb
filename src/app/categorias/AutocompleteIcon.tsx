import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { icons } from "../utils/icons";

export default function AutocompleteIcon() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      
      <Autocomplete
        label="selecione um ícone"
        placeholder="buscar..."
        className="max-w-xs"
        variant="bordered"
        labelPlacement="outside"
        defaultItems={icons}
        name="icone"
      >
        {(item) => <AutocompleteItem key={item.name} startContent={item.icon}>
            {item.name}
        </AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}
