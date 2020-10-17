This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h5>Added the dark mode theme</h5>

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
