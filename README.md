# About the project
This is a website project for the student event Integraatiofest 2023 held in Lappeenranta. It serves as a front-end web application designed to provide information about the event to its participants. The application is made using React.js and the Material-UI framework.

### To-Do List
- NONE :) ENJOY INTEGRAATIOFEST 2023!
 
### How to add a new page to the site
1. Start by creating a  new JavaScript file in the `src/components/` folder.
2. To ensure that the content fits the screen properly:
   1. Copy the contents from `PageTemplate.js` and paste them into the new file.
   2. Create a new CSS file in `src/assets/styles/<component>.css` and import it to the new file.
   3. Replace `<modify this>` with the class name used in the page's CSS file.
   4. **IMPORTANT!** Avoid making unnecessary changes to `App.css`.
3. To include the new page in the navigation bar, edit the `src/components/NavBar.js` file by adding a new item to the `menuItems` array. 
4. In `App.js`, create a route for the new page:
   1. Adjust the path and component names as follow: `<Route path="/<route path>" element={<> <Header /> <Navbar /> < <component name here> /> <Footer /> </>} />`.
   2. Import the new component to `App.js`.
5. Profit! :sunglasses: