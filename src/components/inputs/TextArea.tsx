import { forwardRef } from "react";

type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  variant?: "filled" | "outlined";
  color?: "primary" | "secondary";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  hasFloatingLabel?: boolean;
  isLabelHidden?: boolean;
  helperText?: React.ReactNode | string | null;
  className?: string;
  [x: string]: any;
};

const cvs = {
  base: "form-textarea block min-h-[216px] w-full resize-y py-2.5 px-3 outline-none transition duration-150 ease-out",
  isDisabled: "cursor-not-allowed opacity-60",
  isInvalid: "!border-error-active",
  variant: {
    filled: "bg-gray-200 border border-gray-200 focus:bg-white",
    outlined: "bg-white border border-gray-200 focus:bg-white",
  },
  color: {
    primary: "focus:border-primary focus:ring focus:ring-primary",
    secondary: "focus:border-secondary focus:ring focus:ring-secondary",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
  floatingLabel: {
    container: "relative",
    input: "peer",
    label:
      "text-copy z-1 pointer-events-none absolute top-1 left-0 mb-2 block h-full origin-top-left translate-x-0 -translate-y-7 scale-[0.75] transform-gpu text-base font-medium opacity-90 transition duration-200 ease-out peer-placeholder-shown:translate-x-3 peer-placeholder-shown:translate-y-[7px] peer-placeholder-shown:scale-100 peer-placeholder-shown:opacity-60 peer-focus:translate-x-0 peer-focus:-translate-y-7 peer-focus:scale-[0.75] peer-focus:opacity-90",
  },
};

const TextArea = forwardRef<Ref, TextAreaProps>(
  (
    {
      // Component props
      id = "textarea_id",
      name = "textarea_name",
      rows = 8,
      cols = 30,
      label = "Label text",
      placeholder = "Placeholder text",
      isRequired = false,
      isDisabled = false,
      isInvalid = false,
      variant = "filled",
      color = "primary",
      radius = "lg",
      hasFloatingLabel = true,
      isLabelHidden = false,
      helperText = null,
      className = "",
      ...rest
    },
    ref
  ) => {
    // Component logic
    return (
      // Component Markup
      <div
        className={`
        ${hasFloatingLabel ? cvs.floatingLabel.container : ""} 
        ${className}
        `}
      >
        {/* Normal label */}
        {!hasFloatingLabel && (
          <label
            htmlFor={id}
            className={`text-copy mb-2 block max-w-max text-sm font-medium ${
              isLabelHidden ? "sr-only" : ""
            }`}
          >
            <span>{label}</span>
            {isRequired && <span className="text-red-500">*</span>}
          </label>
        )}

        {/* Input */}
        <textarea
          ref={ref}
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          required={isRequired}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isDisabled}
          {...rest}
          className={`
            ${cvs.base}
            ${cvs.variant[variant]} 
            ${cvs.color[color]}
            ${cvs.radius[radius]}
            ${hasFloatingLabel ? cvs.floatingLabel.input : ""} 
            ${
              hasFloatingLabel
                ? "placeholder-transparent"
                : "placeholder:text-copy-muted"
            }
            ${isDisabled ? cvs.isDisabled : ""}
            ${isInvalid ? cvs.isInvalid : ""}
          `}
        />

        {/* Floating label */}
        {hasFloatingLabel && (
          <label htmlFor={id} className={`${cvs.floatingLabel.label}`}>
            <span>{label}</span>
            {isRequired && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        {/* Helper text */}
        {helperText !== null && (
          <div
            className={`mt-2 text-sm ${
              isInvalid ? "text-red-500" : "text-copy"
            }`}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

export type Ref = HTMLTextAreaElement;

TextArea.displayName = "TextArea";

export default TextArea;
