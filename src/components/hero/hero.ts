import { createButton } from '../button/button';
import './hero.scss';

export const createHero = (): HTMLElement => {
  const hero = document.createElement('section');
  hero.className = 'hero';

  const content = document.createElement('div');
  content.className = 'hero__content';

  const title = document.createElement('h1');
  title.className = 'hero__title';
  title.textContent = 'Take a Short Break & Have Fun';

  const description = document.createElement('p');
  description.className = 'hero__description';
  description.innerHTML =
    '<span class="hero__description-desktop">Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.</span><span class="hero__description-mobile">Discover hundreds of curated casual mini-games right in your browser.</span>';

  const browseButton = createButton({
    text: 'Browse Library',
    variant: 'primary',
    size: 'medium',
    className: 'hero__button',
  });

  content.append(title, description, browseButton);
  hero.append(content);

  return hero;
};