import { routes } from './app.routes';

describe('app routes', () => {
  it('registers about and contact pages for SEO navigation', () => {
    expect(routes.some((route) => route.path === 'about')).toBeTrue();
    expect(routes.some((route) => route.path === 'contact')).toBeTrue();
  });
});
