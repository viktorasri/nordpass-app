### Tech stack

HTML
SCSS
BEM
CSS Modules
TypeScript
ReactJS
React Router
Create React App

### Browser support

All broswers with at least 0.2% global market share
Exclude browsers without official support in last 24 moths
Eclude Opera Mini
Include IE11

### Description

For previous projects I've only used NextJS, so this time I thought it would be nice to try out Create React App.

One thing I've noticed is that CRA does not support path aliases straight out of the box and since I didn't want to use eject and manualy config I left them out.

I've used SUIT CSS methodology before for my personal project but since the task suggested using BEM I thought to try it out this time. In addition to SASS I've also decided to use CSS modules since they come with CRA and one of the benefits I enjoy most is the file structure where each component and scss file sits neatly together.

After using BEM methodology on the task for some time I felt that occasionally it was hard to come up with meaningful semantic class names, especially if all I had to do was give some spacing or alignment. So I decided to make utility classes for spacing, alignment, some typography and refactored the code.

From all the different spacings in Figma template it was hard to come up with a spacing system that would fit all different values so I've decided to leave odd spacings like 5px, 7px, 9px, 15px out.

Since task description had no requirement for using JavaScript I've decided to use TypeScript since it helps avoiding most runtime errors regaridng types.

### Structure and UI

The chosen file structure is focused for easier maintainability and scalability, where I've nested every component with its style and seperated page, generic and ui components. In addition to every component having its .scss nearby all generic .scss is kept in styles folder where variables, utilities and global styles are seperated.

### Scripts

To run the app in development mode you can run `yarn start` and to build app for production `yarn build`.
