# Jet-Set-Go - Testing Details

[Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

## Table of Contents
1. Validator Testing(#validator-testing)
2. Performance, Accessibility and Best Practices Testing
3. Manual Testing
4. Testing Client Stories From UX
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
     - The results for `index.html` file throws a single error: "_Element `a` is missing required attribute `href`_".
       ![homepage-html-validator-error](https://github.com/user-attachments/assets/f8b00356-dbb7-4998-ac7e-c3eaeeae2215)
     - **Notes**: The error thrown by W3C Markup Validator for `index.html` file is related to the 'Search' button of the flights search form. The attribute will be dynamically added using **JavaScript** and its value is based on user's input after passing the form validation.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
   - The CSS file was validated and is used across all HTML pages. **Results:**
     - The result for CSS file checking is "_Congratulations! No Error Found._"
       ![CSS validation](https://github.com/user-attachments/assets/c1c8506d-bb73-44fd-b3d9-d07062896788)


