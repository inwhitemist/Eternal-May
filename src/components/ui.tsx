import React from "react";
import {
  Button as HeroButton,
  Chip as HeroChip,
  Input as HeroInput,
  Textarea as HeroTextarea,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { Sparkles } from "lucide-react";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonVariant = "primary" | "ghost" | "outline" | "soft";

type ButtonProps = React.PropsWithChildren<{
  className?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>;

const BUTTON_VARIANTS: Record<ButtonVariant, { variant?:
  | "solid"
  | "flat"
  | "ghost"
  | "light"
  | "faded"
  | "bordered"
  | undefined; color?:
  | "primary"
  | "default"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | undefined; className?: string }> = {
  primary: { variant: "solid", color: "primary" },
  ghost: { variant: "light" },
  outline: { variant: "bordered" },
  soft: { variant: "flat" },
};

export function Button({
  className,
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
}: ButtonProps) {
  const variantProps = BUTTON_VARIANTS[variant];
  return (
    <HeroButton
      type={type}
      onPress={onClick}
      isDisabled={disabled}
      className={cn("font-medium", className, variantProps.className)}
      {...variantProps}
    >
      {children}
    </HeroButton>
  );
}

export function Chip({
  selected,
  label,
  onClick,
}: {
  selected?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <HeroChip
      onClick={onClick}
      variant={selected ? "solid" : "flat"}
      color={selected ? "primary" : "default"}
      className="cursor-pointer"
    >
      {label}
    </HeroChip>
  );
}

export function Input(props: React.ComponentProps<typeof HeroInput>) {
  const { className, ...rest } = props;
  return (
    <HeroInput
      variant="bordered"
      radius="lg"
      className={className}
      {...rest}
    />
  );
}

export function Textarea(props: React.ComponentProps<typeof HeroTextarea>) {
  const { className, ...rest } = props;
  return (
    <HeroTextarea
      variant="bordered"
      radius="lg"
      className={className}
      {...rest}
    />
  );
}

export function Dialog({
  open,
  onClose,
  children,
}: React.PropsWithChildren<{ open: boolean; onClose: () => void }>) {
  return (
    <Modal
      isOpen={open}
      onOpenChange={onClose}
      onClose={onClose}
      backdrop="blur"
      size="xl"
      placement="center"
      classNames={{ wrapper: "z-[60]" }}
      scrollBehavior="inside"
    >
      <ModalContent className="max-h-[90vh]">
        {() => <div className="flex max-h-[85vh] flex-col">{children}</div>}
      </ModalContent>
    </Modal>
  );
}

export function ConfirmDialog({
  open,
  title = "Вы уверены?",
  description,
  confirmText = "Да",
  cancelText = "Отмена",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Modal
      isOpen={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onCancel();
      }}
      onClose={onCancel}
      backdrop="blur"
      placement="center"
    >
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            {description && (
              <ModalBody>
                <p className="whitespace-pre-line text-sm opacity-80">
                  {description}
                </p>
              </ModalBody>
            )}
            <ModalFooter>
              <Button
                variant="outline"
                onClick={() => {
                  close();
                  onCancel();
                }}
              >
                {cancelText}
              </Button>
              <Button
                onClick={() => {
                  onConfirm();
                  close();
                }}
              >
                <Sparkles size={16} /> {confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default {
  cn,
  Button,
  Chip,
  Input,
  Textarea,
  Dialog,
  ConfirmDialog,
};
