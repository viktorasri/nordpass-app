This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For previous projects I've only used NextJS, so this time I thought it would be nice to try out Create React App.

One thing I've noticed is that CRA does not support path aliases straight out of the box and since I didn't want to use eject and manualy config I left them out.

I've used SUIT CSS methodology before for my personal project but since the task suggested using BEM I thought to try it out this time. In addition to SASS I've also decided to use CSS modules since they come with CRA and one of the benefits I enjoy most is the file structure where each component and scss file sits neatly together.

After using BEM methodology on the task for some time I felt that occasionally it was hard to come up with meaningful semantic class names, especially if all I had to do was give some spacing or alignment. So I decided to make utility classes for spacing, alignment and some typography and refactored the code.

From all the different spacings in Figma template it was hard to come up with a spacing system that would fit all different values so I've decided to leave odd spacings like 5px, 7px, 9px, 15px out.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
