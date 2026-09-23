import { createHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';

export const createHomePage = (): HTMLElement => {
  const page = document.createElement('div');
  page.className = 'home-page';

  const header = createHeader();

  const main = document.createElement('main');
  main.className = 'home-page__main';

  main.append(createHero());

  page.append(header, main);

  return page;
};