export function Field({
  label,
  id,
  required,
  type,
  name,
  disabled,
  placeholder,
  autoComplete,
  autoCorrect = "off",
  autoCapitalize = "off",
  autoFocus,
  value,
  onChange,
  onFocus,
  error,
}) {
  let className = "field__input";

  if (error) {
    className = `${className} field__input--error`;
  }

  if (type === "submit") {
    className = `${className} field__input--submit`;
  }

  return (
    <div className="field">
      {label && (
        <label htmlFor={id} className="field__label">
          {label}
        </label>
      )}
      <input
        id={id}
        required={required}
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        className={className}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
