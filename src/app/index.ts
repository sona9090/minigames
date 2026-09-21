import { initRouter } from './router';
import { createHomePage } from '../pages/home/home-page';

export const createApp = (): HTMLDivElement => {
  const app = document.createElement('div');

  initRouter();
  app.append(createHomePage());

  return app;
};