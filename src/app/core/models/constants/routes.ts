export const ROUTES = {
  admin: {
    router: {
      usersDashboard: '/admin',
      productsDashboard: 'products',
    },
    link: {
      usersDashboard: '/admin',
      productsDashboard: '/admin/products',
    },
  },
  client: {
    router: {
      products: '/',
      login: '/login',
      recover: 'recover-password',
    },
    link: {
      products: '/',
      login: '/login',
      recover: '/login/recover-password',
    },
  },
};
