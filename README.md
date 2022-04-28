# Tim
## _Service for logging time, made with bugs but with love :)_

## Tech
Tim uses a number of open source projects to work properly:

- [Vue.js](https://vuejs.org) - is a JavaScript framework for building user interfaces.
- [Vuex](https://vuex.vuejs.org) - is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
- [Laravel](https://laravel.com) -  is a free and open-source PHP framework that provides a set of tools and resources to build modern PHP applications.
- [Vuelidate](https://vuelidate.js.org) - is data-model oriented, meaning validation rules are added to a validations object in the component definition, rather than being added directly to input elements in the DOM.
- [Moment.js](https://momentjs.com) - is a JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
- [@meforma/vue-toaster](https://github.com/MeForma/vue-toaster) - notification plugin for vue 3.
- [Vue 3 Datepicker](https://vue3datepicker.com/) - Vue 3 date time picker library.


And of course Tim itself is open source with a [public repository](https://github.com/volodymyrDashuk/tim) on GitHub.

## Project Map
The following figure is the map of this sample project.

```
- tim
  + public                          … Contains resouces of this project.
  - src
    + assets                        … Contains source codes that Webpack doesn't need to build.
    - components                    … Contains components of Vue.
        - AccountDropdown           … Contains the logic, markup and styles of the drop-down account list (e.g. logout).
        - Burger                    … Contains the logic, markup and styles of the burger for mobile screens.
        - Dropdown                  … Contains the logic, markup and styles of the all drop-down list.
        - Loader                    … Contains the logic, markup and styles of the preloader (spinner).
        - Popup                     … Contains the logic, markup and styles of the pop-ups.
        - ProjectItem               … Contains the logic, markup and styles of the project card.
        - ProjectList               … Contains the logic, markup and styles of the project list.
        - Sidebar                   … Contains the logic, markup and styles of the sidebar (navigation).
        - TaskReportItem            … Contains the logic, markup and styles of the task report item.
        - TaskReportList            … Contains the logic, markup and styles of the task report list section.
        - TimeReportItem            … Contains the logic, markup and styles of the time report item.
        - TimeReportList            … Contains the logic, markup and styles of the time report list section.
        - TimesheetTable            … Contains the logic, markup and styles of the timesheet list.
        - TimesheetTableDaysFilter  … Contains the logic, markup and styles of the filtration by day in the timesheet table. 
        - TimesheetTableItem        … Contains the logic, markup and styles for every entry in the timesheet.
        - Toggle                    … Contains the logic, markup and styles toggle/switch button.
    + layouts                       … Define layouts of this project.
    + router                        … Define Vue Router.
    + store                         … Define Vuex.
    - views                         … Define views (all entry points for applications’ routes) of this project.
        - Activity                  … Activity page.
        - Dashboard                 … Dashboard page.
        - ForgotPassword            … Forgot password page. When email is entered, it sends a link to reset the password to the email. 
        - Login                     … Login page.
        - NoRoute                   … NoRoute (404) page.
        - Project                   … Project page.
        - Registration              … Registration page.
        - ResetPassword             … Reset password page.
        - Timesheet                 … Timesheet page.
    - styles                        … Contains global styles.
        - _fonts.scss               … Contains importing fonts and basic styles for them. 
        - _global.scss              … Contains global styles.
        - _reset.scss               … Contains resetting styles for tags that have default styles.
        - _variables.scss           … Contains variables for styles (color, icons, sizes).
        - app.scss                  … The entry point of all styles. Contains imports of all scss files.
    + utils                         … Contains all plugins/utilities.
    - App.vue                       … Root of application.
    - axios.js                      … Settings for axios.
    - helper.js                     … Helper functions.
    - main.js                       … Entry point.
  - babel.config                    … Babel Configuration.
  - package.json                    … Define npm packages.
```

## Prerequisites
You will need [Node.js](https://nodejs.org) installed on your system.

## Installation

Get the code by either cloning this repository using git

    > git clone https://github.com/volodymyrDashuk/tim.git
... or [downloading source code](https://github.com/volodymyrDashuk/tim/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and continue with:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## License

MIT

**Free Software, Hell Yeah!**