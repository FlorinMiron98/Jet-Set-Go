# Jet-Set-Go - Testing Details

[Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

## Table of Contents
1. [Validator Testing](#validator-testing)
2. [Performance, Accessibility and Best Practices Testing](#performance-accessibility-and-best-practices-testing)
3. [Manual Testing](#manual-testing)
4. [Testing Client Stories From UX](#testing-client-stories-from-ux)
5. Functional Testing
6. Bugs

### Validator Testing
1. [W3C Markup Validator](https://validator.w3.org/)
   - Pages validated:
     - index.html
     - flights-results.html
     - booking-confirmation.html
   - Results
     - The result for `flights-results.html` and `booking-confirmation.html` files is "_Document checking completed. No errors or warnings to show._".
       
       ![search-results-page-html-validator](https://github.com/user-attachments/assets/86cf4d8b-679b-40bb-aaf1-de6bc4792bb3)
     - The result for `index.html` file throws a single error: "_Element `a` is missing required attribute `href`_".
       ![homepage-html-validator-error](https://github.com/user-attachments/assets/f8b00356-dbb7-4998-ac7e-c3eaeeae2215)
     - **Notes**: The error thrown by W3C Markup Validator for `index.html` file is related to the 'Search' button of the flights search form. The `href` attribute will be dynamically added using **JavaScript** and its value is an URL containing all the input values introduced by the user and passed as query parameters.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
   - The CSS file was validated and is used across all HTML pages. **Results:**
     - The result for CSS file checking is "_Congratulations! No Error Found._"
       ![CSS validation](https://github.com/user-attachments/assets/c1c8506d-bb73-44fd-b3d9-d07062896788)

### Performance, Accessibility and Best Practices Testing
Performance, accessibility, and best practices tests were conducted using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview). The results help ensure the application is optimized for speed, user accessibility, and adherence to modern development standards.
Results for each page:
- Homepage(index.html):
  - **Performance:** Score 93/100
  - **Accessibility:** Score 95/100
  - **Best Practices:** Score 96/100
 
   ![homepage-scores](https://github.com/user-attachments/assets/38a942a7-0225-4978-b86b-a7ae34677ef5)

- Search Results Page(flights-results.html):
  - **Performance:** Score 99/100
  - **Accessibility:** Score 95/100
  - **Best Practices:** Score 100/100

    ![search-results-page-scores](https://github.com/user-attachments/assets/bb64692e-a708-412b-8a73-f2cb0eeb3981)

- Booking Confirmation Page(booking-confirmation.html):
  - **Performance:** Score 100/100
  - **Accessibility:** Score 100/100
  - **Best Practices:** Score 100/100
 
    ![booking-confirmation-page-scores](https://github.com/user-attachments/assets/5085e3ba-073c-48ab-aa84-a64438296d99)

### Manual Testing
Manual testing was conducted to ensure the application functions as expected across various use cases and user interactions.
- **Desktop Testing:** Verified compatibility using Chrome, Firefox, Microsoft Edge, Opera as well as Safari through [Playwright](https://playwright.dev/) on a Windows computer.
- **Mobile Testing(Android):** Checking responsiveness and functionality with Chrome, Firefox and Opera browsers on an Android device.
- **Link Verification:** All manually tested links, both internal and external(footer links to social media), have been verified and successfully confirmed to function correctly, ensuring seamless navigation.
- **Form Validation:** The booking form has undergone thorough validation testing to ensure that users receive appropriate feedback for any input errors. The form accurately checks for required fields and correct formatting.
#### !!!Important notes
While the website is designed to work seamlessly across modern browsers such as Chrome, Firefox, Opera, and Edge, some features may not function as expected in Safari. This section outlines known issues related to modern layout techniques (such as CSS Grid and Flexbox) and the handling of asynchronous code, including unhandled promise rejections. These discrepancies are mainly due to differences in how Safari interprets and implements web standards. Below, you'll find a detailed explanation of these issues and potential workarounds to ensure optimal functionality.
1. **Layout Issues in Safari**
   - **CSS Grid:** Safari has had inconsistent behavior when using `grid-template-areas`. Sometimes, it doesn't respect the grid areas as expected or has visual inconsistencies when compared to other browsers like Chrome or Firefox. This can result in misalignment or incorrect placement of grid items.
   - **CSS Flexbox:** There are certain Flexbox issues with Safari, especially with items stretching or aligning incorrectly. For example, setting align-items: stretch may not always stretch items to their full container size in Safari.
2. **Asynchronous Code**
   - While the code for handling asynchronous operations is wrapped in a `try...catch` block to catch errors, Safari may still throw an **"Unhandled Promise Rejection"** error in certain cases. This occurs because Safari's behavior around promise rejections can sometimes be more strict or behave differently than other browsers (such as Chrome, Firefox, Opera, and Edge). Even with proper error handling using `try...catch`, Safari may still interpret certain rejection cases as unhandled or trigger the error unexpectedly.
 
![unhandled-promise-rejection-safari](https://github.com/user-attachments/assets/b3eb83cd-e79a-4230-977b-85d40a2433ea)

### Testing Client Stories From UX
1. As a customer, I want to search for available flights by entering my departure and arrival cities, travel dates, and number of passengers so that I can find flights that meet my needs.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that the search flight tickets form is displayed | Flight tickets search form should be visible on the page | Passed |
   | Test search with valid departure and arrival cities, valid travel dates and number of passengers | A new page is displayed in a new tab displaying the flight offers results | Passed |
   | Test search with invalid departure and arrival cities | A dropdown box containing an error message should be displayed | Passed |
   | Test search with valid departure and arrival cities, invalid travel dates (e.g. past dates) | A message that no flight offer has been found should be displayed | Passed |
   | Test search with valid departure and arrival cities, travel dates and unselected children's ages(if that's the case) | A `tippy.js` tooltip should be displayed requiring each child's age to be introduced | Passed |
   | Test search with valid input values | A message that no flight offer has been found should be displayed | Passed |
   | Test search with blank fields | A `tippy.js` tooltip should be displaying requiring the user to enter the relevant data | Passed |

2. As a customer, I want to be able to sort flight search results by best, cheapest, and fastest, so that I can easily find the option that best fits my travel needs based on price, duration, or overall quality.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that the flight search results are sorted by the "best" option (combining factors like price and duration) by default once the results are displayed. | Flights offers should automatically be sorted by the "best" option when first displayed. | Passed |
   | Verify that flight search results can be sorted by the cheapest option (lowest price). | Flights should be listed from the lowest to the highest price. | Passed |
   | Verify that flight search results can be sorted by the fastest option (shortest duration). | Flights should be listed from the shortest to the longest duration. | Passed |
   | Verify that each sorting button is styled differently when active | The active button must have a different styling than the unactive ones | Passed |
   | Verify that the sorting functionality works consistently across different screen sizes. | Sorting by cheapest, fastest, and best should work seamlessly on mobile and tablet views. | Passed |

3. As a customer, I want to select a flight from the search results, view flight details, and proceed to booking so that I can finalize my flight purchase.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that a customer can select a flight from the search results. | Each flight offer should contain a 'View Details' button which will open a modal containing the flight details | Passed |
   | Verify that the flight details page displays accurate information (e.g. departure/arrival times, duration, price). | All flight details should be displayed correctly on the details page. | Passed |
   | Verify that the user can click the "Book Now" or equivalent button to proceed to the booking page after viewing the flight details. | Clicking "Book Now" or the equivalent button should open a modal with the relevant form requiring user's details | Passed |
   | Verify that the information displayed on the flight details modal matches what was shown in the search results. | Flight details on the details modal should match the information presented in the search results. | Passed |
   | Verify that the flight selection, details modal and booking process works correctly on mobile devices. | Flight selection, details modal and booking should be fully functional on mobile devices with no layout issues. | Passed
   | Verify that the user can cancel the flight selection and return to the search results. | The user should be able to cancel the selection and go back to the search results without losing their previous search parameters. | Passed |
