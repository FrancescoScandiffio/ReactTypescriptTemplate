# Frontend Template with React and Typescript
 
This is a ready-to-dev template of a frontend webapp in React with Typescript.
Projects created with this template are suitable to become clientside full-stack apps, static websites or user interfaces powered by web technologies that communicate with a separate backend service.

The template is preconfigured with the following libraries, which are also all MIT licensed:
* [Vite build tool](https://vite.dev/).
* [react-router-dom](https://reactrouter.com/en/main) for routing support (multipage-oriented capability)
* [primereact](https://primereact.org/installation/): complete list of ready-to-use react components with advanced features, with javascript and typescript code examples.
* [primeflex](https://primeflex.org/): library with css classes similar to bootstrap, with premade light and dark color styles.
* [primeicons](https://primereact.org/icons/): set of common icons, with built-in spinning capability
* [apexcharts](https://apexcharts.com/): library with multiple types of charts with advanced features and an extensive list of demo codes
* [framer-motion](https://www.framer.com/motion/): animation library
  


## Setup project
1. Install [Node.js](https://nodejs.org/en)
2. Clone this project. In the following steps, we will refer to the clone folder as `$ProjectFolder`
3. Inside command line, move into folder `$ProjectFolder\webapp`
4. Install all the requirements with command  <br>`npm install`
5. Start the frontend development server with command  <br>`npm run dev`.
6. In browser, open the link provided by the frontend server.
7. If the clone has version control, add folder `node_modules` to ignore list
    * If you use git, this is already configured in the provided .gitignore
8. (Optional) Change name of the webapp.


## Generate a twin of this template from scratch
To generate a twin of this template from scratch, perform the following steps:
1. Install [Node.js](https://nodejs.org/en)
2. Use Vite to setup a scheleton project with React and Typescript with command: `npm create vite@latest TemplateProject -- --template react-ts`
3. Inside command line, move into folder `TemplateProject`
4. Install the requirements of the vite template with command: `npm install`
5. Install the additional libraries (and automatically add them to the project requirements) with command: `npm install react-router-dom primereact primeflex primeicons apexcharts framer-motion`
6. If the clone uses subversion control, add folder `node_modules` to ignore list.
    * If you use git, this is already configured in the provided .gitignore

## Change name of the webapp
Instead of the generic `webapp` name, you should customize the name of your project. Achieving this step is very simple, but modifying just the name of the folder is not sufficient.
For example, to rename the project as `my-frontend` (or any other text) you just need to:
1. Move inside directory `webapp`.
2. In file `package.json` update the value of the key `name` from `webapp` to `my-frontend`.
3. In file `package-lock-json` locate the two occurrences of key `name` that are at the beginning of the file, then change their values from `webapp` to `my-frontend`.
    * If you do not see them, search use built-in search/replace to find the word `webapp`: there are only two occurrences in the file and you need to replace both of them.