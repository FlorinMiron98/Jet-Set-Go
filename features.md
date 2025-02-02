# Jet-Set-Go - Features

## Table of Contents
1. [Navigation](#navigation)
   - [Sidebar Navigation](#sidebar-navigation)
3. [Footer](#footer)
4. [Homepage](#homepage)
   - [Hero](#hero)
     - [Main Features Link Buttons](#main-features-links)
     - [Persons Selection Button](#persons-selection-button)
     - [Flight Class Selection Button](#flight-class-selection-button)
     - Departure/Arrival Location Input
     - Departure/Arrival Location Search Results
     - Departure/Return Date Input
     - Clear Input Button
     - Form Validation Tooltips
     - Search Button
   - Services
   - Best Destinations
   - The Best Seasonal Destination
5. Results Page
   - Sort Buttons
   - Flights Results
   - Flight Details Dialog
   - Flight Book Dialog
6. Booking Confirmation Page

## [Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

## Navigation
![navbar-transparent](https://github.com/user-attachments/assets/e33f50fb-6d22-4dc1-ab1c-d9b40b742e55)
- The navigation bar contains the hamburger button, the website's logo and 2 navigation buttons(booked flights and saved flights) which will have the functionality introduced in the future.
- The background color of the navigation bar is transparent when the `scrollY` property is 0.

![navbar-colored](https://github.com/user-attachments/assets/82b442ad-202b-43d8-a237-0397dbc9eed1)
- The background color of the navigation bar turns into blue when the `scrollY` property is bigger than 0.
### Sidebar Navigation
![sidebar-navigation](https://github.com/user-attachments/assets/483d35b2-b77c-4056-925c-4b50775b62c1)
- The sidebar navigation opens when the user clicks the hamburger button. It contains links to the main features of the website. Besides the Flights page, the rest of them will be implemented in the future.
- The overlay opens together with the sidebar navigation and it helps the sidebar navigation to stand out.
- The sidebar navigation closes once the user clicks the hamburger button again or the overlay.
## Footer
![footer](https://github.com/user-attachments/assets/006a0115-50b8-4967-8588-a5e028ab18b2)
- The footer contains contanct information about the company, quick links to the main features of the website and link to social media websites which will open in a new tab.
## Homepage
### Hero
![hero](https://github.com/user-attachments/assets/f49902df-e370-46cb-b234-000332d18583)
- This is an overview of the hero section.
#### Main Features Link Buttons
![main-features-links](https://github.com/user-attachments/assets/fc97d43a-749a-412b-8e44-db97a4206243)
- Each button will open a page in a new tab. The page will contain one of the main features of the website. This will be implemented in the future.
#### Persons Selection Button
![persons-selection-button](https://github.com/user-attachments/assets/efa35eb4-921c-4d13-b03e-e0fbf0d534f5)

![persons-selection-dropdown](https://github.com/user-attachments/assets/42076bd9-77ba-411e-83c4-1b0c1e7e4d1d)
- This feature provides a dynamic dropdown container with functionality that allows users to adjust the number of adults and children for a given selection.
- The dropdown contains options to increase or decrease the number of adults and children.
- The user can adjust the count of adults and children by selecting the respective increment or decrement buttons.
- When the user increases the number of children, a corresponding select element is created for each additional child.
- Each select element allows the user to choose the age of the child, with available options ranging from 1 to 17 years old.
- The content of the button is updated dynamically to reflect the current number of adults and children based on the user's selections.
- The dropdown container is hidden when the user clicks the 'Done' button or anywhere else outside the container.
#### Flight Class Selection Button
![flight-class-selection-button](https://github.com/user-attachments/assets/fb4c0811-1bcf-497b-833f-542f520f965c)

![flight-class-selection-dropdown](https://github.com/user-attachments/assets/48fe7091-29c6-492b-9fd1-e2b263c18cc1)
- The flight class selection button opens a dropdown menu containing 4 flight class options(Economy, Premium Economy, Business Class, First Class).
- When the user selects a flight class, the content of the flight class selection button is updated to reflect the chosen class.
- The selected flight class button is visually distinguished with a blue border, marking it as the active selection.
- The dropdown menu closes when clicking the 'Done' button or anywhere else outside the container.
