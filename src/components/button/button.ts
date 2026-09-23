import './button.scss';

export type ButtonVariant = 'primary' | 'outlined';
export type ButtonSize = 'small' | 'medium';

interface ButtonOptions {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const createButton = ({
  text,
  variant = 'primary',
  size = 'medium',
  className = '',
}: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement('button');

  button.type = 'button';
  button.textContent = text;
  button.className = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return button;
};