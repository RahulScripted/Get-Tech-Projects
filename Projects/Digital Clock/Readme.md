# Mini Project: Digital Clock

1. **HTML (index.html):**

The HTML structure is simple, and it's good to have the clock container div (<div class="clock"></div>).

2. **CSS (style.css):**

The CSS code is minimal, styling the clock with a green color and a font size of 60 pixels. It's fine for basic styling, but you can enhance it based on your design preferences.

3. **JavaScript (script.js):**

    - **Load Event Listener:** The event listener should be corrected. Instead of 'load', use 'DOMContentLoaded' since it's related to the DOM content being loaded.

    - **Initial Tick Call:** The tick function should be called once initially, and there's no need for a separate load event listener.

    - **setInterval:** The setInterval function should be used to repeatedly call the tick function every second.
4. **Visual Components:**
    - The eye icon visually represents the action of showing or hiding the password.
    - The eye icon changes dynamically based on the state of the password input (password or text).
5. **Styling:**
    - The styling provides a responsive and user-friendly interface.
    - The design uses a pleasant color gradient for the background.
    - The input box has rounded corners, a box shadow, and a simple layout.
6. **Accessibility:**
The implementation ensures a good user experience with clear visual cues for password visibility.
7. **File Organization:**
The code is organized with separate files for HTML, CSS, and JavaScript, promoting clean and maintainable code.
8. **Responsive Design:**
The layout is designed to be responsive, adapting well to different screen sizes.

## Link

<a href = "https://incredible-chimera-f502fb.netlify.app/" target = "_blank">Preview