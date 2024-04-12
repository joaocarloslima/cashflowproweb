'use client'

import { Button, cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from 'react'

interface DropDownActionsProps{
  onDelete: MouseEventHandler
}

export default function DropDownActions({ onDelete }: DropDownActionsProps) {
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
          onClick={onDelete}
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
