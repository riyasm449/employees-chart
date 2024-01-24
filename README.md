# Employee Organization Tree

* The review build is hosted at [Netlify](https://beautiful-jelly-b89dc4.netlify.app/).

* **Tech Stack:**
  - Backend: Firebase
  - Frontend: Ember.js

## Basic Overview

- Employees list is displayed on the left:
  - Options available in the list: Sort, Search by Name, Filter by Team

- Employees Organization tree is displayed on the left:
  - Drag and Drop Employee will update the Manager
  - Changes will be reflected in the UI only, not updated in the backend.

## Prerequisites

ember-cli: 4.12.2
node: 14.21.3

## Installation

* `git clone https://github.com/riyasm449/employees-chart.git` this repository
* `cd employee-organization-chart`
* `npm install`

## Running / Development

* `ember serve` or `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
