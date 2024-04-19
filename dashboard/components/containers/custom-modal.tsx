import React, { useState } from "react"

import {
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTrigger,
    DialogTitle,
    Dialog
} from "@/components/ui/dialog"
import { Button } from "../ui/button"

type CustomModalProps = {
    isOpen: boolean
    desc: string
    title: string
    children: React.ReactNode
    onsubmit: () => void
    formState: any
    trigger: React.ReactNode
}

export default function CustomModal(props: CustomModalProps) {
    const [formState, setFormState] = useState(props.formState)

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })

    }
    function handleOnSubmit() {
        props.onsubmit()

    }

    return (
        <Dialog  >
            <DialogTrigger asChild>
                <Button variant="outline">{props.trigger}</Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col gap-2">
                <DialogClose />
                <DialogHeader className="flex flex-col gap-2">
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>{props.desc}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {props.children}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleOnSubmit} variant="default" >Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}