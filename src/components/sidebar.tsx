"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { NavItem } from "./navbar";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { NAV_MENU } from "@/data/navbar_props";

export function Sidebar() {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen((cur) => !cur);
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button onClick={handleOpen} variant="outline">
                    {/* {open ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )} */}
                    <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <h1 className="text-5xl font-bold py-4">Menu</h1>
                    </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-4">
                    {NAV_MENU.map((val, index) => (
                        <NavItem key={index} {...val} />
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    );
}
