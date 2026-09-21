import { createButton } from '../button/button';
import './header.scss';

const navigationItems = ['Home', 'Library', 'Tournaments', 'Community'];

const createNavigation = (className: string): HTMLElement => {
  const nav = document.createElement('nav');

  nav.className = className;
  nav.setAttribute('aria-label', 'Main navigation');

  navigationItems.forEach((item, index) => {
    const link = document.createElement('a');

    link.className = 'header__nav-link';

    if (index === 0) {
      link.classList.add('header__nav-link--active');
    }

    link.href = index === 0 ? '/' : `/${item.toLowerCase()}`;
    link.textContent = item;

    nav.append(link);
  });

  return nav;
};

export const createHeader = (): HTMLElement => {
  const header = document.createElement('header');
  header.className = 'header';

  const brand = document.createElement('a');
  brand.className = 'header__brand';
  brand.href = '/';
  brand.setAttribute('aria-label', 'MiniGames home');

  const logo = document.createElement('span');
  logo.className = 'header__logo';
  logo.setAttribute('aria-hidden', 'true');

  const brandName = document.createElement('span');
  brandName.className = 'header__brand-name';
  brandName.textContent = 'MiniGames';

  brand.append(logo, brandName);

  const actions = document.createElement('div');
  actions.className = 'header__actions';

  const desktopNavigation = createNavigation('header__nav');

  const auth = document.createElement('div');
  auth.className = 'header__auth';

  const loginButton = createButton({
    text: 'Log In',
    variant: 'outlined',
    size: 'medium',
    className: 'header__login',
  });

  const signupButton = createButton({
    text: 'Sign Up',
    variant: 'primary',
    size: 'medium',
    className: 'header__signup',
  });

  auth.append(loginButton, signupButton);

  const burger = document.createElement('button');
  burger.className = 'header__burger';
  burger.type = 'button';
  burger.setAttribute('aria-label', 'Open navigation menu');
  burger.setAttribute('aria-expanded', 'false');

  for (let index = 0; index < 3; index += 1) {
		const line = document.createElement('span');
		line.className = 'header__burger-line';
		burger.append(line);
	}

	const closeIcon = document.createElement('span');
	closeIcon.className = 'header__close-icon material-symbols-outlined';
	closeIcon.textContent = 'close';
	closeIcon.setAttribute('aria-hidden', 'true');

	burger.append(closeIcon);

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'header__mobile-menu';
  mobileMenu.id = 'mobile-navigation';

  const mobileNavigation = createNavigation('header__mobile-nav');

  const mobileLoginButton = createButton({
    text: 'Log In',
    variant: 'outlined',
    size: 'medium',
  });

  const mobileSignupButton = createButton({
    text: 'Sign Up',
    variant: 'primary',
    size: 'medium',
  });

  const mobileAuth = document.createElement('div');
  mobileAuth.className = 'header__mobile-auth';
  mobileAuth.append(mobileLoginButton, mobileSignupButton);

  mobileMenu.append(mobileNavigation, mobileAuth);

  burger.setAttribute('aria-controls', mobileMenu.id);

  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--menu-open');

    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu',
    );
  });

  actions.append(desktopNavigation, auth, burger);
  header.append(brand, actions, mobileMenu);

  return header;
};