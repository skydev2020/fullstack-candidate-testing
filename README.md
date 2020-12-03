## Available Scripts

Clone this branch:

### `git clone https://github.com/ClipboardHealth/fullstack-candidate-testing/tree/rodrigo-vizcarra-2020-12-02`

later run:

### `npm install`

and finally

### `npm start`

this runs the app in the development mode and start de Rest Api at the same time.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Note:

The deployment was done on an AWS EC2 server that I had previously configured for other projects and this was executed using PM2 (process manager).

# Rodrigo's comments:

A public deployment of this project is in http://18.236.184.62:5001

As there was no specific definition of what screen actions or buttons should work, I focused on two stages:

- Basic stage:
  At this stage I focused on:

  - Develop the graphical interface according to what was shown in the screenshots.

  - Generate a Rest API that will be fed from the data present in the .json files.

  - Show the information and filter it according to the filters defined in the filters.json file, as well as by the search engine (input text) present in the interface and sort the information according to the criteria of Location, Role, Department, Education, Experience.

- Stage "closing actions":
  This stage was based on:

  - Messages were added to the buttons that did not have an action defined by means of a graphic, so that they have an action that can later be implemented.

  - By pressing "Save Job", this increases the counter present in the header (user profile button), the operation is totally basic, since it only increases the counter.

  - New button to remove the applied filter. This button appears when applying a filter and when pressed it removes the filter and it disappears.
