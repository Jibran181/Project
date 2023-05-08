# Angular Common Sense Coding Guide

### Things Always Remember When Developing Angular Application:

- Layout should be code ones in the whole website. If it has user dashboard than there will be two layouts.

  - Layout Should be Like this
  - Full Container
    - -> Header
    - -> Body (Router Outlet)
      - Body Should have fixed containers based on the design.
    - -> Footer (Where header and footer are fixed.
    - In no situation we will change it. If we have some something to change we will do it in sub sections).

- The architecture of the application should be modular. It means that every feature of the website should be module. Try to make as much as small modules for the application. e.g.

  - If we need to write a community module and it has sub sections like news, updates and events. We should have a parent community module.
  - Child modules will be news, updates and events.
  - Every module and child module should maintain its own routing.

- In routing always use lazy loading module it means the module is only required when it is needed.

- The components we need to resue should be in shared module. It should have exports section and all exported components should be defined.

- Most of the services should be created within the module. If there are shared services than it should be in the shared module.

- One of the most important aspect of the coding in angular is naming. Use common sense as much as possible and keep it precise and simple.

  - Make sure that you always have module and sub module names same as the name of the feature to keep things simple and tidy. e.g if there is community section the name should be community.

  - Make routes name simple and easy. i.e. route name should be community for community module. e.g localhost:4200/community.

  - If there is a sub module than the name should be next to the parent module like this.

  - If we have a community module with module news than the route should be `localhost:4200/community/news`. and if there is detail component after the sub-module than the name should be `localhost:4200/community/news/1`. You can use id or name as well similar to `localhost:4200/community/news/post-title`.

  - Make sure that you don't have capital letters or camelcase text in the route url. always use kebab case with small leltters.

  - For every features of the CRUD e.g. EVENTs naming should be as follows.

    - File names in angulgar always uses kebab case. it e.g. `community` or `admin-dashboard`. This rule apply for all types of files e.g. modules, models, components, directives etc.

    - Name for Modules. Upper camel case. E.g `Community` or `AdminDashboard`. Similar for Model/Interface UpperCamelCase. Event, Update.

    - As in Angular, Services, Modules, Models and Components act as Classes. As you should know Classes Names always uses UpperCamel Case. While variable and methods/function uses lower camel cases e.g. `products` or `getPrdoucts`.

    - CRUD operations modules should be simple and to the point.

      - e.g Module Folder Name for products should be products.

      - For single product it should be `product`. isntead of `show product`, `single product`, `product detail` etc.

      - Similar for Service for products. functions name should be `getProducts` or `getProduct` instead of `getAllProducts`, `loadAllProduct`, `loadSingleProduct`, `loadProductsDetails` etc.

      - Similar for Call these functions in component should be `loadProudcts` or `loadProduct`. Instead of other more detailed names.

      - In angular every component is singleton. it means that each component should have one responsiblity or function instead of putting all functions in one file. Make sure that you make the components as small as possible.

      - Every funciton should have a simple name instead of putting complex names.

      - Communication between components should be used with @Input, @Output decorators or if the components doesn't have any relation between them than use Subject or Behavior subject as much as possible.

1. Every funciton should have a simple name instead of putting complex names.

1. Communication between components should be used with @Input, @Output decorators or if the components doesn't have any relation between them than use Subject or Behavior subject as much as possible.
