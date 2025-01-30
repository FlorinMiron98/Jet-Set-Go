# Jet-Set-Go

![search-page-mockup](https://github.com/user-attachments/assets/d06d3a2b-1253-4c8b-9b07-6bdd96346746)

![results-page-mockup](https://github.com/user-attachments/assets/24220174-0a1f-4045-ae23-49e2954ca9da)

This is a flights tickets booking website designed to facilitate seamless flight search and booking. The website uses the booking API to provide real-time flight data. Users can search for flights based on their  destination, dates, and preferences, and complete bookings through an easy-to-use submission form.

## [Live Website](https://jet-set-go-florin-miron.netlify.app/)
## Table of Contents
1. UX
    - [Project Goals](#project-goals)
    - [Business Goals](#business-goals)
    - [User Stories](#user-stories)
    - Design Choices
    - [Wireframes](#wireframes)
2. Features
    - Homepage
      - Hero
      - Services
      - Best Destinations
      - The Best Seasonal Destination
      - Footer
    - Results Page
      - Flights Results
      - Flight Details Dialog
      - Submit Dialog
    - Booking Confirmation Page
3. [Technologies Used](#technologies-used)
4. [Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md)
    - [Validator Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#validator-testing)
    - [Performance, Accessibility and Best Practices](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#performance-accessibility-and-best-practices-testing)
    - [Manual Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#manual-testing)
    - Testing Client Stories From UX
    - Functional Testing
    - Bugs
5. [Deployment](#deployment)
    - [Run This Project Locally](#run-the-project-locally)
6. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
    - [Inspirations](#inspirations)
### UX
The user experience (UX) of Jet-Set-Go website has been carefully designed to ensure simplicity, clarity, and ease of navigation.
#### Project Goals
1. UX Design
   
   Ensure the website is responsive across all screen sizes and provide an aesthetically pleasing and modern design that aligns with travel industry standards.
2. Simplified User Flow

   Create for the user a straightforward navigation from landing page to completing a booking.
3. Flights Search and Booking
   
   The website will allow users to enter travel details (e.g. departure date, return date, destinations) and receive available flight options. The flight search feature will provide the user with all the relevant details.
4. Error Prevention and Handling
   
   Prevent errors during the booking process and ensure users are guided appropriately if errors occur.
5. Booking Confirmation
    
   After users complete their bookings they will be redirected to a confirmation page.
6. Sorting Options
    
   Users will be provided with different sort options. Sorting options will allow users to view results by the best, cheapest and fastest.
7. Accessibility Considerations

   Make the website accessible to all users, including those with disabilities.
8. SEO Optimisation and Performance

   Implement the best SEO practices ro tank well for relevant keywords inside the user's browser. Optimize website performance to ensure fast loading times.
#### Business Goals
1. Provide a Seamless User Experience(UX)

   Create a website that is intuitive, easy to navigate and allows users to easily book flights.

2. Enhance Customer Satisfaction

   Offer competitive prices, easy booking processes, and prompt customer service to ensure high customer satisfaction and repeat business.
3. Increase Traffic Website

   Drive traffic to the website using the best SEO practices to increase the ranking in the users' search results.
4. Improve Booking Flexibility

   Allow users to easily cancel their bookings.

5. Optimize for Speed and Performance

   Ensure that your website is fast and responsive to improve user experience
#### User Stories
1. As a customer, I want to search for available flights by entering my departure and arrival cities, travel dates, and number of passengers so that I can find flights that meet my needs.
2. As a customer, I want to be able to sort flight search results by best, cheapest, and fastest, so that I can easily find the option that best fits my travel needs based on price, duration, or overall quality.
3. As a customer, I want to select a flight from the search results, view flight details, and proceed to booking so that I can finalize my flight purchase.
4. As a customer, I want to see recommended flight destinations so that I can discover new places to visit and book flights easily.
5. As a customer, I want to be able to load more flight search results, so that I can view additional options beyond the initial set without having to perform a new search.
#### Wireframes
For this project, I decided to create high-fidelity wireframes to better visualize the final product. High-fidelity wireframes provide a more detailed representation of the design compared to low-fidelity wireframes.
1. [Homepage - Desktop](https://postimg.cc/CnTjwvvz)
2. [Homepage - Tablet](https://postimg.cc/SYfzkm2v)
3. [Homepage - Mobile](https://postimg.cc/bG4nRCf3)
4. [Results Page - Desktop](https://postimg.cc/BX3xyVLz)
5. [Results Page - Tablet](https://postimg.cc/BX3xyVLz)
6. [Results Page - Mobile](https://postimg.cc/7b03Kk67)
### Technologies Used
1. **HTML5** - The foundational markup language for structuring web content.
2. **CSS3** - Used for styling and layout, enhancing the visual appearance of the project.
3. **Bootstrap 5** - Used for creating responsiveness across all screen sizes, pre-designed components and utility classes. More about Bootstrap on the [official Bootstrap website](https://getbootstrap.com/).
4. **JavaScript** - It is used to handle user interactions, manipulate the DOM, and manage application logic.
5. **Tippy.js** - Tippy.js is a lightweight and highly customizable library for creating tooltips and popovers in web applications. More about Tippy.js on the [official website](https://atomiks.github.io/tippyjs/).
6. **Air-datepicker** - Air-datepicker is a simple and flexible date-picker library that makes it easy for users to select dates. More about Air-datepicker on the [official website](https://air-datepicker.com/).
7. **Parcel.js** - Parcel.js is a fast, zero-config web application bundler. It simplifies the development process by automatically handling tasks such as bundling JavaScript, CSS and assets. More about Parcel.js on the [official website](https://parceljs.org/).
8. **Babel** (included in Parcel.js by default) - Babel is a JavaScript compiler that allows developers to use the latest ECMAScript features by converting modern JavaScript (ES6) into a version compatible with older browsers and environments. Babel can only transpile ES6 syntax(e.g. arrow functions, classes, const). The same is not true for new features like new array methods (e.g. find) or promises, but here is where polyfilling comes into play. More about Babel on the [official website](https://babeljs.io/).
9. **Core.js** (integrated with Babel) - Core.js is a powerful JavaScript library that provides polyfills for ECMAScript features, ensuring compatibility across different browsers and environments. More about Core.js on this [GitHub repository](https://github.com/zloirock/core-js).
10. **Regenerator-runtime** - The Regenerator-runtime library provides a runtime for generators and async functions, enabling the use of modern asynchronous JavaScript syntax (like async/await) in environments that do not natively support it. More about the Regenerator-runtime [here](https://www.npmjs.com/package/regenerator-runtime).
11. **Booking API** - The Booking API focuses on flight-related services. It provides real-time data on arrival and departure locations, flight dates and available flight offers. The API allows users to search for flights and view flight options.
### Deployment
This project was created using [Visual Studio Code](https://code.visualstudio.com/), committed to [Git](https://git-scm.com/) and pushed to [GitHub](https://github.com/) using Git's built-in function `git push`.
As this project was created using the development environment provided by [Parcel.js](https://parceljs.org/), I decided to deploy it on [Netlify](https://www.netlify.com/) as the deployment process was much easier. The next steps were followed:
1. **Build the Project**
   - After the development process, I made sure the project is built for production by running the following command in the terminal: `npm run build`
   - This whill generate the production-ready files inside the `dist/` folder (or the configured output folder).
2. **Create a Netlify Account**
   - If you dont't have a Netflify account, sign-up at [Netlify](https://www.netlify.com/).
3. **Log In to Netlify**
   - Once your account is created, log in to the **Netlify Dashboard**.
4. **Deploy the Project Manually**
   - In the Netlify Dashboard, look for the "Deploy manually" option on the next screen.
   - Drag and drop your entire `dist/` folder (the output folder from Parcel) into the provided area on the Netlify interface.
   - Netlify will automatically upload and deploy your site.
5. **Access the Live Website**
   - After deployment is complete, Netlify will provide with a unique URL for the website.
6. **Optional: Set Up a Custom Domain**
   - I created a custom domain by going to Domain Settings in the Netlify site dashboard.
#### Run the Project Locally
To clone this project from GitHub into a local IDE such as Visual Studio Code, follow the next steps:
1. Follow this link to the [GitHub Project Repository](https://github.com/FlorinMiron98/Jet-Set-Go)
2. Under the repository name, click **<> Code**
![code-button](https://github.com/user-attachments/assets/1de54cc8-457d-452d-a95b-747446c40480)
3. Copy the clone URL for the repository.

![clone-URL](https://github.com/user-attachments/assets/3995b2ae-86d3-452d-a46c-0d927313f9bd)

4. Navigate to the Project Directory
   - Once the repository is cloned, navigate to the location where you want the cloned directory to be created using this command: `cd your-repository`.
5. Clone the Repository
   - Clone the project repository to your local machine using `git clone https://github.com/FlorinMiron98/Jet-Set-Go.git`.
6. Install Dependencies
   - Before running the project, you'll need to install all required dependencies. These dependencies are listed in the `package.json` file. In order to install them, run the command `npm install`.
7. Run the Project Locally
   - Now, start the Parcel development server to view the project locally using the followin command: `npm run start`.
   - Alternatively, if the script is not defined in `package.json`, you can run Parcel directly by specifying the entry HTML file (e.g., `index.html`): `parcel index.html`.
   - Parcel will start a development server and provide a local URL, typically `http://localhost:1234`.
8. View the Project In Your Browser
   - Open your web browser and go to the following URL: `http://localhost:1234` (or the one provided in the terminal).
9. Make Changes and See Live Updates
   - While the development server is running, any changes you make to the project’s source files will automatically reload in the browser, providing a live preview of your changes.
10. Stop the Development Server
    - When you’re done, you can stop the Parcel development server by pressing `Ctrl + C` in the terminal.
### Credits
#### Content
- [ChatGPT](https://chatgpt.com/) - Used to create content for:
  - Introduction section
  - Best destinations section
  - Best seasonal destination
  - `<meta>` keywords attribute
  - `<meta>` description attribute
#### Media
- favicon: [Image Source](https://www.flaticon.com/free-icon/globe_744502?term=plane&page=1&position=22&origin=search&related_id=744502)
- The logo images both for desktop and mobile screen were created using [Figma](https://www.figma.com/)
- The airplane image with no background: [Image Source](https://unsplash.com/photos/air-canada-airline-X_MOr6oa4-k) - Photo by [John McArthur](https://unsplash.com/@snowjam)
- The sky background image of the `header` element for **desktop**: [Image Source](https://unsplash.com/photos/above-cloud-photo-of-blue-skies-yQorCngxzwI) - Photo by [Taylor Van Riper](https://unsplash.com/@taylorvanriper925)
- The sky background image of the `header` element for **mobile**: [Image Source](https://www.pexels.com/photo/scenic-view-of-sky-1367180/) - Photo by [eberhard grossgasteiger](https://www.pexels.com/@eberhardgross/)
- flight-booking-prices.jpg: [Image Source](https://www.pexels.com/photo/silver-imac-displaying-line-graph-placed-on-desk-572056/) - Photo by [Serpstat](https://www.pexels.com/@serpstat-177219/)
- multiple-airlines.jpg: [Image Source](https://www.pexels.com/photo/person-using-self-check-in-kiosk-3943949/) - Photo by [Anna Shvets](https://www.pexels.com/@shvetsa/)
- easy-booking.jpg: [Image Source](https://www.pexels.com/photo/person-using-macbook-pro-on-white-table-5077049/) - Photo by [cottonbro studio](https://www.pexels.com/@cottonbro/)
- new-york.jpg: [Image Source](https://www.pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/) - Photo by [Quintin Gellar](https://www.pexels.com/@quintingellar/)
- tokyo.jpg: [Image Source](https://www.pexels.com/photo/people-walking-on-the-streets-surrounded-by-buildings-1510595/) - Photo by [Aleksandar Pasaric](https://www.pexels.com/@apasaric/)
- rio-de-janeiro.jpg: [Image Source](https://pixabay.com/photos/rio-rio-de-janeiro-sugar-loaf-4348017/) - Photo by [pauloduarte](https://pixabay.com/users/pauloduarte-2508074/)
- sydney.jpg: [Image Source](https://www.pexels.com/photo/aerial-view-of-sydney-995764/) - Photo by [Patrick McLachlan](https://www.pexels.com/@patrick/)
- cairo.jpg: [Image Source](https://pixabay.com/photos/cairo-mosque-egypt-islam-1980350/) - Photo by [shadyshaker](https://pixabay.com/users/shadyshaker-4265067/)
- paris.jpg: [Image Source](https://www.pexels.com/photo/picture-of-eiffel-tower-338515/) - Photo by [Thorsten technoman](https://www.pexels.com/@thorsten-technoman-109353/)
- aspen.jpg: [Image Source](https://www.pexels.com/photo/snow-covered-mountain-3628990/) - Photo by [Hui Huang](https://www.pexels.com/@hui-huang-1364440/)
The responsive screen mockups was created using [Yujin Yeoh Mockup Generator](https://yujinyeoh.com/website-mockup-generator).
#### Code
1. Code for all website's icons was created using [Font Awesome](https://fontawesome.com/).
2. Code for importing Google Fonts inside the `assets/styles.css` file was created using [Google Fonts](https://fonts.google.com/).
3. Code for the layout of the introduction section was created using [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/#example).
4. Code for introduction section cards was created using [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about) and slightly modified to fit the project's needs and design.
5. Code for best destinations section cards was created using [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about) and heavily edited to fit the project's needs and design.
6. Code for flight booking form and its layout was created using [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/#overview) and [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/#example).
7. Code for ordered lists inside the details dialog was created using [Bootstrap List Groups](https://getbootstrap.com/docs/5.3/components/list-group/#basic-example);
8. Code for spinner loaders was created using this [W3C Article](https://www.w3schools.com/howto/howto_css_loader.asp) and slightly modified to fit the project's needs.
9. Code for CSS selectors used to style the **Tippy.js** box was created using [Tippy.js Themes](https://atomiks.github.io/tippyjs/v6/themes/).
10. Code for **Tippy.js** options was created using [Tippy.js Customization](https://atomiks.github.io/tippyjs/v6/customization/).
11. Code for setting the options and the initialisation of the **Air-datepicker.js** was created using [Airdatepicker.js Examples](https://air-datepicker.com/examples).
12. Code for adding the correct CSS prefixes to ensure the cross-browser compatibility was created using [Autoprefixer CSS online](https://autoprefixer.github.io/).
13. Code for darkening background images was taken from this [Stack Overflow post](https://stackoverflow.com/questions/26621513/darken-css-background-image).
14. Code for **regular expressions** used in flight booking form inputs was created using [ChatGPT](https://chatgpt.com/).
#### Inspirations
- [Booking.com](https://www.booking.com) - For the overall layout of the results page.
