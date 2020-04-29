# Paul Johnston's Starter Kit for [Building Applications with React and Redux]

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |

## Steps for creating your own application:

### Configure the mock database and setup the api server

1. Open up the tools\mockData.js in your editor.  Start with what you want the shape of your data model to look like.  You don't have to create all the models that you will need but maybe create the core one that you will be using in your application to start with.  For example say your appliaction is going to track gym members you will want to change the items collection in the mockData.js file to members and then add a few test members to the collection with the data model shape you want.  Maybe something like this:

```json
const members = [
  {
    id: 1,
    nmFirst: "Paul",
    nmLast: "Buckland",
    alias: "",
    minor: "false",
    signedWaiver: "true",
    lastVisitDt: "01/01/2020",
    createDt: "01/01/2018",
    createdBy: 1,
  },
  {
    id: 2,
    nmFirst: "Kate",
    nmLast: "Jones",
    alias: "Dirty Kate",
    minor: "false",
    signedWaiver: "true",
    lastVisitDt: "02/01/2020",
    createDt: "01/15/2018",
    createdBy: 2,
  },
  {
    id: 1,
    nmFirst: "Ryan",
    nmLast: "Smith",
    alias: "Ry Guy",
    minor: "true",
    signedWaiver: "true",
    lastVisitDt: "01/01/2020",
    createDt: "01/01/2018",
    createdBy: 1,
  }
];
```

Also make sure the newItem object is changed to set the defaults and if you have any associations with another collection from your core collection make sure to include that in the mockData.js file.  For instance in the above example there is a createdBy field with an id.  Make sure there is a collection of users or whatever you want that will link up to the id in that field.  And finally make sure you export your objects in module.exports.

2. Update the tools\createMockDb.js file to reference your newly created collections from the mockData.js file.

3. Update the tools\apiServer.js file to make sure your new core collection is being called in the server.post call.  Also update the validatItem method so it validates your new core object correctly and the createSlug method if you are using a slug.

4. Now if all went well you should now be able to create the mock database and run the api server which will return the values in that mock database.  From the command prompt type npm run start:api.  This command can be found in the package.json file and will first call the createMockDb.js file which will create the db.json file which is now your mock database that you can use to create, add, update and delete items in your application.  The command will next start the api server which will be listening for input on port 3001.  You can now open a browser and goto http://localhost:3001/{collection-name} and you should see all the items in your collection written out to the browser.  So if you had a collection of members the api call would be http://localhost:3001/members.

### Configure your core collection api file

1. Next open up the src\api\itemApi.js file and get familiar with it.  Create a new file based on that file but configure it to use your collection instead of the default items collection that comes with the template.  For instance if your core collection was members then you would need to create a memberApi.js file and then copy the contents of the itemApi.js file and then configure it appropriately to use your core collection.  For a core collection of members you would have to change line 2 to look like this:

```javascript
const baseUrl = process.env.API_URL + "/members/";
```

You might also want to change the method name from item to member for instance if you core collection was members then change getItems to getMembers and so on for the save and delete.

### Configure Redux Actions to use your new core collection

1. Open up the src\reduc\actions\actionTypes.js file.  This file holds all the action type constants.  You will need to copy and paste the following action types in the file and then rename them to match your core collection.

```javascript 
export const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const CREATE_ITEM_SUCCESS = "CREATE_ITEM_SUCCESS";
export const DELETE_ITEM_OPTIMISTIC = "DELETE_ITEM_OPTIMISTIC";
```

So if your core collection was members then it would be LOAD_MEMBERS_SUCCESS and so on.

2. Open up the src\redux\actions\itemActions.js file and get familiar with it.  Notice that on line 3 this file imports the itemsApi.js file so it can access the api calls.  

```javascript
import * as itemApi from "../../api/itemApi";
```

You will need to create your own actions file to call the core collection api you just created.  Add the new file to the actions directory and configure it to use you new core collection.  You will also now reference the new action types you created in the previous step.

### Configure Redux Reducers to use your new core collection

1. You are now ready to configure your reducers.  Open the src\redux\reducers\initialState.js file and add an initial state collections for your new core collection.

2. Open up the src\redux\reducers\itemReducer.js file and get familiar with it.  Reducers specify how the application's state changes in response to actions sent to the store.  Copy the contents of the file and create a new reducer file to correspond with your new core collection.  If it's members then create memberReducer.js file and configure it to use the members collection.

3. Open up the src\redux\reducers\index.js file and add the newly created reducer to the root reducer.

### Create your components!  Now for the fun stuff!!

1. Create a new folder under src\components to hold your components.  For a managing members you would create a members folder.
