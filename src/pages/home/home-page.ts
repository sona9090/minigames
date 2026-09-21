import { createHeader } from '../../components/header/header';

export const createHomePage = (): HTMLElement => {
  const page = document.createElement('div');
  page.className = 'home-page';

  const header = createHeader();

  const main = document.createElement('main');
  main.className = 'home-page__main';

  page.append(header, main);

  return page;
};