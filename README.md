# Theme-Test-Page
This is a website I made inspired by [realtimecolors](https://www.realtimecolors.com/) and the aim was to improve on its idea by focusing on exporting CSS variables of the theme that you can directly use in your project instead of focusing on the generation part of the theme

The website's main content is made to preview the theme in different styles and HTML that you might typically use in a project

# Panel
- Clicking on the dice button will change the current theme to a randomized one generated by one of five functions:
    - monochromatic
    - analogous
    - triadic
    - tetradic
    - pastel

- Toggling on the dark lock switch beside it will copy and lock the current colors of the theme to the other theme (either light or dark), while toggling it off will allow light theme colors to be different from dark theme colors

- Selecting one of the options (background, text, primary, secondary, or accent) will open a modal where you can change the respective variable using HSL sliders or from the native color input at the top

- Toggling the switch in any modal from the options will lock the respective variable from changing when randomizing the theme and only allow it to be changed manually

- Current theme is saved in the browser's local storage

# Exporting
The "Export" button opens another modal where you can select or copy:
- The main stylesheet responsible for the light and dark themes

- The variables preset that mixes the root variables depending on the theme that are used on the website
    - Hovering over one of the bold variable names will turn all colors transparent except the contents of the page that use this variable
    - While hovering over a variable scroll of the entire page is allowed instead of the container
- The theme code for the current theme that can be used to export the theme to another device


# Saving
- Clicking on the star at the bottom right will save the current theme to local storage, which can be accessed at any time from the "Saved" tab in the export modal
    - Any palette there can be applied instead of the current theme or deleted.
    - The first click on the star will show an animation to show where to access the saved themes

- Text input at the bottom of the saved tab allows a theme code to be input
    - A green border means a valid code has been entered and can be applied by pressing "Enter"
    - A red border means the code is in an invalid format

# Credits
This project was made by [me](https://github.com/omar-elsherbiny) with some help from my friend [Zied](https://github.com/ZiedDev)

You can contact me on Discord at: [sherbo2007](https://discord.com/users/618443479856447500)