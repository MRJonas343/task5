# Fake Data Generator Web Application 🌐

## Description 📋

This web application generates realistic, random fake user data using Next.js, Next UI, and Faker.js. The app allows users to generate and view data in a table format, supporting infinite scrolling and region-specific formatting for names, addresses, and phone numbers. Additionally, the app allows users to introduce errors in the data to simulate entry mistakes.

The data is generated using a combination of user-defined seed values and page numbers, ensuring consistent results for the same seed across multiple sessions. No database is required for this application.

## Features 🛠️

- **Region Selection**: Choose from multiple regions (e.g., USA, Mexico, Poland) to adjust the formatting of names, addresses, and phone numbers.
- **Error Simulation**: Specify the number of errors per record using a slider (0–10) and a number field (max 1000). Supported errors include deleting, adding, and swapping characters.
- **Seed Value**: Enter or generate a random seed to ensure the same data is produced consistently.
- **Infinite Scrolling**: The table starts with 20 records, and as the user scrolls down, 10 more records are loaded.
- **Data Consistency**: Changing the region or seed regenerates the data, while adjusting the error count modifies only the errors in the data, not the original values.

## Requirements ⚙️

1. **Node.js**: Ensure Node.js is installed.

## Project Setup ✍️

1. **Clone the repository**:

    ```bash
    git clone <REPOSITORY_URL>
    cd <REPOSITORY_NAME>
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

    or

    ```bash
    bun i
    ```

3. **Run the project**:

    ```bash
    npm run dev
    ```

    or

    ```bash
    bun dev
    ```

## Application Functionality 🖥️

- **Region Selection**: Choose from available regions (USA, Mexico, Poland) to format names, addresses, and phone numbers appropriately.
- **Error Simulation**: Adjust the number of errors per record (0 to 10 via a slider or 0 to 1000 using a number input). Supported errors include:
    - **Delete**: Removes a random character from a field.
    - **Add**: Inserts a random character at a random position.
    - **Swap**: Switches two adjacent characters.
- **Seed Value**: Enter a custom seed or use the random generator button to produce consistent results.
- **Infinite Scrolling**: Start with 20 records, then load an additional 10 records as you scroll.

Enjoy creating and managing your fake data! 🎉
