import * as RdxDialog from "@radix-ui/react-dialog";
import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { cn } from '../../app/utils/cn';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
  onClose?(): void;
}

export function Modal({
  open,
  children,
  title,
  rightAction,
  onClose,
}: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm z-50",
            "data-[state=open]:animate-overlay-show"
          )}
        />
        <div className="mx-2">
          <RdxDialog.Content
            className={cn(
              "fixed w-full max-w-[90%] sm:max-w-md md:max-w-lg outline-none",
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10",
              "bg-card rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
              "text-primary"
            )}
          >
            <header className="h-12 flex items-center justify-between text-secondary ">
              <button
                className="h-12 w-12 flex items-center justify-center outline-none cursor-pointer"
                onClick={onClose}
              >
                <Cross2Icon className="w-6 h-6 text-primary" />
              </button>
              <span className="text-lg tracking-[-1px] font-bold text-primary">
                {title}
              </span>

              <div className="h-12 w-12 flex items-center justify-center">
                {rightAction}
              </div>
            </header>
            <div>{children}</div>
          </RdxDialog.Content>
        </div>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
