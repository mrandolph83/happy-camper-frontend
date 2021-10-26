# HAPPY CAMPER
## OVERVIEW 

The Happy Camper web application is a way for nature enthusiasts to explore the many outdoor opportunities that the USA has to offer, from little-known state parks to its top-tier National Park Service. Using the RIDB API from www.Recreation.gov, the app allows users to search for an outdoor opportunity by name, by whatever activity they wish to pursue, and/or by state. In addition, the application offers an opportunity to be a part of a community of like-minded nature enthusiasts, with a review system that allows users to discover or rate recreation areas by the quality of nature, actitivites, amenities, and family-friendliness.    

## LOGIN or SIGNUP

Upon launching the application, the user can login to their acccount via form on the frontpage, or signup to make a new account. Upon login, the user has a choice to either use the application to DISCOVER a recreation area, or view MY REVIEWS to edit or delete reviews that have been posted already. The DISCOVER section can be browsed whether logged in or not. 

## DISCOVER

The DISCOVER area of this application is where its main functionality lies. A user can search for an opportunity by state and/or activity, or search by name. This forwards to a results page, where a user can see an image, name, and description of outdoor recreational activities that meet criteria. Clicking on the title leads to a show page, where reviews made of that area can be seen. A button allows the user to make a review of the selected area. 

## MY REVIEWS

The My Reviews section of the application allows users to Edit or Delete reviews they have made.

# LAUNCHING THE APP

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# BACKEND DETAILS:
This application runs on a Rails API backend, located at https://github.com/mrandolph83/happy-camper-backend. 

$ bundle install

Launch the system using the below command in your terminal and navigating to your specified local host URL:

$ rails server
