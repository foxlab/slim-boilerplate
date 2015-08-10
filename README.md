Slim Boilerplate
=====================================
A boilerplate using Silex, Cockpit CMS for the backend side and Grunt, SASS for the frontend side.

### Getting up and running
1. Clone this repo from `git@github.com:foxlab/slim-boilerplate.git`
2. Remove the .git directory
3. Run `npm install` from the root directory
4. Run `composer install` from the root directory
5. Run `grunt` (may require installing Grunt globally `npm install -g grunt-cli`)
6. Run `composer run`
7. browse to http://localhost:8888/index_dev.php for dev
8. browse to http://localhost:8888/cockpit/install for install Cockpit

More information about Cockpit CMS here: https://github.com/aheinze/cockpit

Now that `grunt` is running, the server is up as well and serving files from the `/web` directory. Any changes in the `/source` directory will be automatically processed by Grunt and the changes will be injected to any open browsers pointed at the proxy address.

What's inside?
---------------
Slim Boilerplate is a mix between two boilerplates and a gorgeous plug & play CMS for start simple web project:
* https://github.com/silexphp/Silex-Skeleton (backend)
* https://github.com/sebastianekstrom/boilerplate (frontend)
* https://github.com/aheinze/cockpit (Plug & play CMS)

Enjoy!
