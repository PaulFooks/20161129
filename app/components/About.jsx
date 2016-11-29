var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <h3>Overview</h3>
      <p>
        Here at Firefly, we like modular, composable code. That's true right across our HTML, CSS and Javascript. This test is designed around a typical problem we encounter, namely creating stand-alone front-end components that can be reused in a number of contexts.
      </p>
      <p>
        We've provided a design and HTML for an example component that we'd like you to use to demonstrate your styling and functionality skills. This design shows a component, shown at different widths and in different states.
      </p>
      <p>
        In addition, we've also provided some test data in `XML` format for you to use in Task 2.
      </p>
      <p>
        To start this test, you'll need to clone or [download the zip](https://github.com/fireflylearning/front-end-coding-test/archive/master.zip) of this repository** Submit your work as a single `.zip` file, via email, to jon@fireflylearning.com
      </p>
      <h3>Time</h3>
      <p>
        We don’t want you to spend more than 2 hours on all three tasks. It’s better to tackle each task enough to give us a sense of  _how_ you’re approaching the problem, than it is to spend all of your time on task 1 and not moving on to task 2. You may wish to stub-out some of your soloutions or simply write pusdo code if you run out of time. We understand that there's more important things in life than completing a coding test, but this should give you a good idea of the kind of thing you'll be working on if you're sucessful in your application.
      </p>
      <h3>Task 1 – CSS.</h3>
      <p>
        Please recreate the component shown in the design. This should be "mobile first" and responsive, as shown in the design. We've provided a primer `index.html` file which contains all the markup you should need. Please write CSS (using Vanilla CSS, less or sass) to style this component as it appears in the `_designs/front-end-coding-test.png` design file.
      </p>
      <p>
        One thing we do recommend is **not** relying on the cascade. We use a variation of the [BEM methodology](https://css-tricks.com/bem-101/), but however you wish to do this is fine.
      </p>
      <h3>Task 2 — Javascript component</h3>
      <p>
        We'd like you to build a Javascript version of the component. It should:
      </p>
      <ul>
        <li>Load the data from the file `data/data.xml` we've provided.</li>
        <li>Demonstrate state handling, i.e. handle switching of tabs.</li>
        <li>Allow the user to click the name of the hero or villain to rename them. This should live update the name in the tab.</li>
      </ul>
      <p>
        We use [React](https://facebook.github.io/react/) for building components in Firefly. You may wish to use another framework, but we’re looking for more than just manipulating the DOM directly with Javascript.
      </p>
    <h3>Task 3 — Build process</h3>
      <p>
        Finally, we'd like you to demonstrate your knowledge of node and typical front-end build process to create a build task that transforms your files into production-ready code.
      </p>
      <p>
        We use tools like [Gulp](http://gulpjs.com/) and [Webpack](https://webpack.github.io/) to accomplish this.
      </p>
      <p>
        Here, we're just looking for you to demonstrate your understanding of the various steps involved in a typical build task, and how this is an essential step for building large-scale web-apps.
      </p>
    </div>
  );
};

module.exports = About;