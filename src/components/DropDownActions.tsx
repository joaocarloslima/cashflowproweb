'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export default function DropDownActions() {
const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem 
            key="edit"
            startContent={<Pencil size={18} className={iconClasses} />}
        >
            editar
        </DropdownItem>
        
        <DropdownItem 
            key="delete" 
            className="text-danger" 
            color="danger"
            startContent={<Trash className={cn(iconClasses, "text-danger")} />}
        >
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
