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
3. Technologies Used
4. Testing
    - Validator Testing
    - Performance, Accessibility and Best Practices
    - Manual Testing
    - Testing Client Stories From UX
    - Functional Testing
    - Bugs
5. Deployment
    - Run This Project Locally
6. Credits
    - Content
    - Media
    - Code
    - Inspirations
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
### Deployment
This project was created using [Visual Studio Code], committed to [Git] and pushed to [GitHub] using Git's built-in function `git push`.
As this project was created using the development environment provided by [Parcel.js](https://parceljs.org/), I decided to deploy it on [Netlify](https://www.netlify.com/) as the deployment process was much easier. The next steps were followed:
1. Build the Project
- After the development process, I made sure the project is built for production by running the following command in the terminal: `npm run build`
- This whill generate the production-ready files inside the `dist/` folder (or the configured output folder).
2. Create a Netlify Account
- If you dont't have a Netflify account, sign-up at [Netlify](https://www.netlify.com/).
3. Log In to Netlify
- Once your account is created, log in to the **Netlify Dashboard**.
4. Deploy the Project Manually
- In the Netlify Dashboard, look for the "Deploy manually" option on the next screen.
- Drag and drop your entire `dist/` folder (the output folder from Parcel) into the provided area on the Netlify interface.
- Netlify will automatically upload and deploy your site.
5. Access the Live Website
- After deployment is complete, Netlify will provide with a unique URL for the website.
6. Optional: Set Up a Custom Domain
- I created a custom domain by going to Domain Settings in the Netlify site dashboard.
