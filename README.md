# Redux-Feedback-Loop

## Description

_Duration: Weekend Project_

My teacher at prime wanted an app that could populate a database with a feedback from a student. My teacher also wanted the app to be multiple pages, and have a review page to submit, and another page to leave a new feedback. 

I solved this using react routers, I put a 'history.push()' on every next button making it go to the next page, but only after entering into an input. I pulled data from each page using redux, and then at the review stage I took all the global variables from redux and sent a post request to the database. I then would send you to the success page, where you would see confirmation that it went through, and a button to take you back to the first page to leave another feedback.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- Node.js
- Express
- React
- Redux
- Postico 2
- Postgres
- Redux logger

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Enter in a number to represent your feelings for a certain lecture, then press next.
2. Enter in a number to represent your understanding for a certain lecture, then press next.
3. Enter in a number to represent how well you felt supported in the lecture, then press next.
4. Enter in any comments you have for the teacher who gave the lecture, then press next.
5. Review your feedback, and the press submit when ready to send it off the teacher.
6. When that successful works you should see a success page, and a button to give a new feedback if you so choose.


## Built With

- JS
- HTML
- CSS
- VScode

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to my prime teacher Matt Black for teaching me how to use react routers and redux, without it, I would have struggled a lot more.

## Support
If you have suggestions or issues, please email me at [coledahlen@gmail.com](www.google.com)