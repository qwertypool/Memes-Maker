This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ScreenShot:

![ipl](https://user-images.githubusercontent.com/36128196/94192393-85375180-fecc-11ea-9a46-f61cc35fb1b1.png)


</br></br><h2>STEP-WISE INSTALLING TAILWIND CSS IN REACT JS:</h2>
<ol>
    <li>npm install tailwindcss</li></br>
    <li>npx tailwindcss init(It will create tailwind.config.js)</li></br>
    <li>Make a file postcss.config.js and add,
	
<p>module.exports = {
  plugins: [ </br>
    // ...</br>
    require('tailwindcss'),</br>
    require('autoprefixer'),</br>
    // ...</br>
  ]</br>
}</p></li></br>
    <li>npm add postcss-cli (check the package.json for updates in dependencies)</li></br>
    <li>npm install autoprefixer@9.8.6  (compatible with "tailwindcss": "1.8.10")</li></br>
    <li>In the src/index.css file add:</br>
	@tailwind base;</br>
	@tailwind components;</br>
	@tailwind utilities;</br>
    </li></br>
    <li>In the package.json file, add the scripts as:
"scripts": {</br>
    "build:css": "postcss src/index.css -o src/tailwind.css",</br>
    "watch:css": "postcss src/index.css -o src/tailwind.css -w",</br>
    "start": "react-scripts start",</br>
    "build": "react-scripts build",</br>
    "test": "react-scripts test",</br>
    "eject": "react-scripts eject"</br>
  }</li></br>
    <li>In src/App.js add </br>
	import './tailwind.css';</li>
    <li>In the src/index.js also add:</br>
	import './index.css';</br>
	import App from './App';</br>
(Although they are already included still, confirm it so as to reflect the tailwind css effects of our components.)
</li></br>
    <li>npm run build:css (It will create the tailwind.css file in src)</li></br>
    <li>npm start</li></br></br>
</ol>


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
