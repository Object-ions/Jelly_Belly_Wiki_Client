# Jelly Belly Wiki Client

**By Moses Atia Poston**

## Project Description

The Jelly Belly Wiki project uniquely combines front-end and back-end technologies, inspired by a passion for Jelly Belly confections. This project integrates a React-based user interface with a robust C# .NET EF Core backend, all centered around a bespoke API.

This API is instrumental in the project, transforming comprehensive data into accessible and user-friendly endpoints. The data, derived from the official Jelly Belly website, was methodically collected using Python scripts and ChromeDriver, optimizing the data collection process.

Challenges in building and seeding the API, particularly in handling data consistency, were meticulously addressed, resulting in a fully functional and well-documented API. This README delves into the React application that effectively demonstrates the API's application, providing a tangible example of the project's capabilities.

To read more about the data scraping and API back-end and database check out the next section 'Project Overview'

## Project Overview

This repository, **Jelly_Belly_Wiki_Client**, is part of a larger project that is divided into three main segments:

1. **Capstone Supporting Files**: [Capstone Supporting Files Repository](https://github.com/Object-ions/capstone-supporting-files): A repository dedicated to scripts and supporting files for data collection, primarily using Python for web scraping from the official Jelly Belly website.

2. **Jelly-Belly-Wiki-API**: [Jelly-Belly-Wiki-API Repository](https://github.com/Object-ions/Jelly-Belly-Wiki-API): This repository contains the API implementation and the seeded data from the scraping process. The API is built using C# and EF Core .Net with MySql migrations.

3. **Jelly-Belly-Wiki-Client (This Repository)**: The client-side component focusing on user interface and interaction. It includes all frontend development, offering a visually appealing and demonstrates the API's application and functional user experience.

## Explore the project:

By dividing my project into these three distinct parts, I aim to create a comprehensive and efficient solution that encompasses data collection, user interaction, and data retrieval through an API. Feel free to explore each repository for more details and contributions.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Webpack
- TDD with Jest
- Fetch API
- Jelly Belly Wiki API

## Setup and Installation

To set up and run the Jelly Belly Wiki Client locally:

1. **Clone the Jelly Belly Wiki API repository**:

   ```
   git clone https://github.com/Object-ions/Jelly-Belly-Wiki-API.git
   ```

2. **Install and Run the API**:
   Follow the documentation [here](https://github.com/Object-ions/Jelly-Belly-Wiki-API) to install and run the API on your local machine.
   **Important Note:** Ensure the API and database are set up and running before launching the UI. This is essential to avoid data fetching errors, as the UI relies on the backend for data. The project includes error handling for such scenarios.

3. **Clone This Repository**:

   ```
   git clone https://github.com/Object-ions/Jelly_Belly_Wiki_Client.git
   ```

4. **Install Dependencies**:
   Navigate to the directory and run:

   ```
   npm install
   ```

5. **Start the Application**:

   ```
   npm run start
   ```

6. **Access the Application**:
   If it doesn't automatically open, visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Test-Driven Development (TDD) with Jest

The Jelly Belly Wiki Client adopts a TDD approach using Jest to ensure the reliability and robustness of the application. This section briefly outlines the testing structure and methodology used.

### State Management and Actions Testing

The application uses React's `useReducer` hook for state management, complemented by a series of actions to handle state changes. The reducers and actions are thoroughly tested to ensure they function correctly and update the application's state as expected.

#### Reducers

Reducers are tested to ensure they correctly handle actions and update the state as expected. The `beansReducer`, for instance, is responsible for managing the state related to beans data. It handles various actions like `GET_BEANS_SUCCESS` and `GET_BEANS_FAILURE`, updating the state accordingly.

#### Actions

Action creators are tested to ensure they return the correct action objects. For example, actions related to fetching beans data (`getBeansSuccess` and `getBeansFailure`) are tested to verify they create the right action type with the provided payload.

### Running the Tests

To run the tests, use the following command in your terminal at the root directory of the project:

```
npm run test
```

This command initiates the test suite and provides output on test results, including any failures and their causes.

### Example Tests

1. **Reducers Test (`beans-reducer.test.js`)**:

   - Tests whether the `beansReducer` correctly throws an error for non-matching action types.
   - Verifies state updates for successful and failed beans data fetching.

2. **Actions Test (`index.test.js` in actions folder)**:
   - Ensures action creators like `getBeansSuccess` and `getBeansFailure` return the correct action objects.

These tests contribute to the stability and maintainability of the application, validating the behavior of core Redux functionalities.

## Known Issue

As of December 21, 2023, there is a known issue in the 'Contact Me' section of the application. This section is intended to use a PHP method for sending emails directly to me from the website. However, this functionality is not yet fully implemented. Users are advised that the 'Contact Me' feature may not operate as expected until this issue is resolved.

## Ongoing Development

Please note that this project is not in its final form. Future updates will include enhanced descriptions, text improvements, and refined styling to improve user experience and interface aesthetics. Additionally, significant portions of the codebase are slated for refactoring to optimize performance and maintainability.

This project is very much a work in progress, and regular updates are planned to address these aspects. Your patience and understanding are greatly appreciated as these improvements are made.

## Copyright and Data Accuracy Disclaimer

### Content Origin

Please be aware that all data and information presented in this application, including the UI and the database, are derived from the official Jelly Belly website. This project does not claim originality of the content and acknowledges that all information is borrowed from publicly available sources.

### Disclaimer

While every effort has been made to ensure the accuracy of the information, there may be instances of errors, typos, or inaccuracies. Therefore, this resource should not be solely relied upon, especially for health-related decisions. I do not assume responsibility for the content's accuracy.

### Consumer Advice

Before consuming any Jelly Belly products, it is strongly advised to consult the official Jelly Belly website or product packaging to verify ingredients, calorie content, and other nutritional information. This step is crucial for those with dietary restrictions or allergies.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Moshe Atia Poston.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

- If you detect any bug in the program, please reach out to me at [moshikoatia@gmail.com](mailto:moshikoatia@gmail.com).
