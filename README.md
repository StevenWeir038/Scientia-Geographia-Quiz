# **islandAQUAdesign**

Welcome to **islandAQUAdesign**. A website developed to introduce amateur aquarists to the popular sub-genre of aquascaping.

![Mockup](docs/readme/website_mockup.png "Website preview at different resolutions") 


# UX Design

As a topic aquascaping is too expansive to contain within one small site given project time constraints and the developers recognition of their current skill level.

A conscious decision was taken to generalise content and not be too technical as this could dissuade the aspiring hobbyist.

Using UX principles, *user stories* narrowed the *scope* of the site directing it to provide:
- A broad overview of the aquascaping hobby.
- The core materials used.
- An overview of popular style arrangements.  
- Suitable flora and fauna for a beginner.
- Embedded links that provide launching points to explore other sites to the hobby in more detail.

## Wireframing

To follow best practice, wireframes were developed for mobile / tablet and desktop based on the webinar of the project lead Matt Boden at the [Code Institute](https://www.codeinstitute.net/). Using his advice the mobile site was developed before the desktop.

Basic [wireframes](docs/wireframes) were created using [Balsamiq Cloud](https://balsamiq.cloud/sqiyfsu/pr12ogh/r2278#). I went a little further almost to mockup level to help visualise the development needed.  Having the *skeleton* in place focused subsequent coding. (Note I consider it fair to admit I abandoned a previous iteration of the project as it lacked direction and was proving to be frustrating. This was a good early learning experience which deserves mentioning). UX defines proper development practices!

![Desktop Landing](docs/wireframes/wireframe_desktop_landing.png "Basic wireframe of the main pages desktop landing")

![Mobile Site](docs/wireframes/wireframe_mobile.png "Basic wireframe of the mobile site")

![Mobile Site Footer](docs/wireframes/wireframe_mobile_footer.png "Basic wireframe of the mobile site footer")

![Formdump](docs/wireframes/wireframe_formdump.png "Basic wireframe of the formdump page")

## Color Scheme and Accessibility

The [*color scheme*](docs/readme/color_scheme.png "Color Scheme") was devised by taking an image of a home aquarium.

![color_scheme](docs/readme/color_scheme.png "Color Scheme")

The image was passed to [Adobe Color](https://color.adobe.com/create/image-gradient).

To meet WCAG 2.0 criteria, the generated color scheme was then passed to [eightshapes.com](http://www.eightshapes.com) to generate an [*accesibility table*](docs/readme/color_accessibility.png "Color Accessibilty").

![accesibility_table](docs/readme/color_accessibility.png "Color Accessibilty")

## Code Reusability
CSS variables were used to improve code reusability.  RGB values were saved into the `:root` level of the external CSS file.  These values were then available when declaring rgbA values.  This is a superior solution as it saved time. Changing the code in one place affected multiple elements simultaneously.  In this site this primarily was used for borders and backgrounds.

```css
:root {
    --theme-one: 96, 115, 26;
}

h2 {
    background-color: rgba(var(--theme-one),1);
}
```

## CSS Grid used to layout desktop site
I learned *CSS Grid* in order to develop the [desktop site](docs/readme/desktop_grid_view.png "Image of Grid view enabled using Google Chrome developer Tools section").

![desktop site](docs/readme/desktop_grid_view.png "Image of Grid view enabled using Google Chrome developer Tools section")
Research credited in the content section demonstrates it has  superior responsiveness and is more adaptable for placing future sections than utitising relative/absolute displays and archaic floats.  They do still have a place in modern development though are now more limited in scope even from my novice perspective.

I opted to *explicity* place sections as opposed to declaring grid areas in this instance as the site is small.
Also noted is the importance of *html structure*. Sections that are nested have an affect on the grid behaviour.
Generally *grid* offers more flexibility for moving / adding sections to the site in future and ultimately requires less code. It is more readable therefore is easier to maintain.

# Existing Features

## One Page Site / Future Implementations
Developing a single page site with multiple sections was merely a personal preference. It's considered a *top level* to convey general information.  Future developments could include more technical aspects of being an aquarist maintained on separate pages.  For example, the nitrogen cycle, Co2 injection systems, lighting setups, filtration etc.

Another idea was to fix the header to the top of the desktop page. When hovering/focusing on a particular section the relevant link in the menu would appear active. This would provide the user a further indication of were they are in the web document.

## Header logo & Navigation
On mobile and tablet the header is *fixed* to keep navigation accessible via the hamburger icon.  
This serves as a link to the home of the website in line with practices intuitive user experience on smaller resolutions.

- The site has two Navigation bar styles.  A Hamburger style for [smaller screens](docs/readme/mobile_tablet_nav.png "Preview of header/nav with logo at lower resolutions")

![smaller screens](docs/readme/mobile_tablet_nav.png "Preview of header/nav with logo at lower resolutions")

 with limited width and a standard navbar as viewed on [desktop](docs/readme/desktop_nav.png "Preview of header/nav for higher resolution screens") sized screens.

![desktop](docs/readme/desktop_nav.png "Preview of header/nav for higher resolution screens")

- Hover effects and vertical components added to desktop to aid user with selection and intuitively understand how the site is arranged.

## Landing page

The [*landing page*](docs/readme/landing_page.png "Website landing page at desktop resolution") has a hero background to pique the users interest.
A well designed/maintained aquascape is aesthetically pleasing therefore conveys an *implicit* message to the visitor.

![*landing page*](docs/readme/landing_page.png "Website landing page and preview of header/nav at desktop resolution")

On loading the desktop site, note the subtle use of greyscale fading into the standard contrast to emphasise the beauty of nature.

## External Links

[*External links*](docs/readme/external_links.png "Links are provided to external sites by clicking the image or its caption") on the `<picture>` elements provide a launching point for the user to explore the hobby in more detail. These are popular sources and reputable retailers from the UK.

![*External links*](docs/readme/external_links.png "Links are provided to external sites by clicking the image or its caption")

Each link opens in a new tab so the user can easily refer back to main site.

## Footer
The [*footer*](docs/readme/footer.png "Footer section") offers the user three options:
- A means to provide an email address to sign-up to a newsletter. Note an extensive form page isn't needed for the website's purposes.
- Links that open to new social media tabs for yet to be developed supporting content. Social media icons scale up on mouse hover to improve user experience.
- In the desktop site, a link to the top of the page is available by clicking the favicon.  To save space the favicon is hidden in the mobile site.  Additionally it is not required as the fixed header is always available for links.

![*footer*](docs/readme/footer.png "Footer section")

## Formdump page
The [*formdump*](docs/readme/formdump.png "formdump page") page is designed as a placeholder for communication with a backend.  The POST method is ordinarily used instead the current simulated GET method.

![*formdump*](docs/readme/formdump.png "formdump page")

As the page is supposed to be a temporary addition, CSS code was embedded into the head of the formdump.html file rather than add to the external css file which is better practice.  In the event a backend is established it is easier to remove one file than to go revisit the external css file again.

[*Flexbox*](https://flexboxfroggy.com/ "Flexbox Froggy is a fun introduction to the use of flexbox") was used as it is simple to use and convenient when placing content within an element. 
        
```css
#formdump-main {
    grid-template-columns: 1 / 2;
    grid-template-rows: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}
```
# Testing

## Validator Testing
HTML directly copied and pasted into offical [W3C Markup Validator](https://validator.w3.org/). 
- 1 *warning* for the [index](docs/readme/html_validator_index_page.png "Image of validated HTML for index.html") page.  This has been intentially left as the section is to hold the hero image only.

    ```html
    <section id="hero-bg" class="hero-bg">
        <!-- no heading required as suggested by validator check.  Section to hold a background image only -->
    </section>
    ```
![index](docs/readme/html_validator_index_page.png "Image of validated HTML for index.html")

- *6 warnings* for the [formdump](docs/readme/html_validator_formdump_page.png "Image of validated HTML for formdump.html") page. There are no issues with the internal css used to define grid-template in the `head`. Numbers are the only units required.  

    ```css
        grid-template-columns: 1 / 2;
        grid-template-rows: 3 / 4;
    ```

![formdump](docs/readme/html_validator_formdump_page.png "Image of validated HTML for formdump.html")

CSS directly copied and pasted into the offical [W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/).
- No errors found in the [external CSS](docs/readme/css_validator_style_page.png "Image of validated external CSS file") file.

![external CSS](docs/readme/css_validator_style_page.png "Image of validated external CSS file")

## Lighthouse
96% performance for [desktop](docs/readme/lighthouse_desktop.png "Chrome Developer Tools desktop score") site.

![desktop](docs/readme/lighthouse_desktop.png "Chrome Developer Tools desktop score")

54% performance for [mobile](docs/readme/lighthouse_mobile.png "Chrome Developer Tools mobile score") site.

![mobile](docs/readme/lighthouse_mobile.png "Chrome Developer Tools mobile score")

## Browsers
The site was developed and tested using Chrome.  It's also ran with no discernable issues on Firefox Developer Edition and Opera. 

## Fixed Bugs
Mobile *fixed header* obscured section links leading to a negative user experience.
Utilised a [css only solution](https://codepen.io/cferdinandi/pen/GRJvozN) `scroll-margin-top` to scroll 121px above the section links. Incidentially this is the height of the mobile fixed header + 10px of white background space.

```css
section[id] {
scroll-margin-top: 121px;    
}
```    

Email field validation can be bypassed by directly clicking the submit button or pressing enter. To fix this I added `required` to the end of input tag as below.

```html
<input id="email-field" type="email" name="user-email" placeholder="Email address"
            aria-label="Type your email address here" required>
```

For formatting purposes I wanted the video to fill 90% of the screen width at all times. Hard coding a value of 800px for the desktop rendered the iframe too large on a mobile screen.
At higher resolutions the `.video` class dimensions became [distorted](docs/readme/distorted_video.png) from standard 16:9 aspect ratio in plants section due to being within an `iframe`.

![distorted](docs/readme/distorted_video.png)

The dimension issue was by solved placing the iframe inside a `div`. The iframe was styled to fit the full height and width of the div which in turn had a `padding-top` value of 56.25%.  This was calcuated using the aspect ratio (9/16 = 0.5625).
Further testing showed the video container was exceeding the screen height due to the 90% container width. Ten percentage points were taken off using `padding-top: 46.25%;`. This gives an aspect ratio of 7.4/16.
Note there is an experimental CSS property called `aspect-ratio`. I could have replaced the [existing solution](docs/readme/responsive_iframe_solution.png "Code to create a responsive iframe") with `aspect-ratio: 7.4 / 16;`.  I opted not to as MDN indicates it is still experimental and I want to optomise browser support.

![existing solution](docs/readme/responsive_iframe_solution.png "Code to create a responsive iframe")

After entering a validated email address the user is directed to a formdump page indicating their success. They are automatically taken back to main site after a predefined amount of time using the following code snippet in the `head`.

```html
<meta http-equiv="refresh" content="5; url=index.html">
```

## Unfixed Bugs
[Mobile nav menu](docs/readme/mobile_nav.png) does not collapse after selecting link then focusing on other parts of page. The menu icon must be clicked again to uncheck the hidden checkbox.
A review of [Stack Overflow](https://stackoverflow.com/) suggests no known fix using CSS only and that JavaScript is required.

![Mobile nav menu](docs/readme/mobile_nav.png)

In the [formdump](docs/readme/formdump_redirect_counter.png "Image of formdump counter showing user no action is necessary") page, the timer to indicate the site is redirecting back to home requires Javascript to change it's value in `#counter` element.  This shows the user the site is active and that they don't need to take any action to go back to homepage.

![formdump](docs/readme/formdump_redirect_counter.png "Image of formdump counter showing user no action is necessary")

# Deployment

The site was deployed to *GitHub* pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the *Settings* tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://stevenweir038.github.io/islandAQUAdesign/index.html

## Local Deployment

In order to make a local copy of this repository, you can clone the project by typing the follow into your IDE terminal:
- `git clone https://github.com/StevenWeir038/islandAQUAdesign.git`

Alternatively if using gitpod you can click [here](https://gitpod.io/#https://github.com/StevenWeir038/islandAQUAdesign)

# Credits

## Content
Learning on the following topics supported by:
- CSS Grid / Responsive Web Design - [Wes Bos](https://www.youtube.com/watch?v=DCZdCKjnBCs) and [Kevin Powell](https://www.youtube.com/watch?v=duH4DLq5yoo).
- CSS variables - [Web Dev Simplified channel on YouTube](https://www.youtube.com/watch?v=oZPR_78wCnY).
- CSS animations - [css-tricks.com](https://css-tricks.com/almanac/properties/a/animation/).
- CSS scrolling in fixed header environments - [Chris Ferdinandi](https://codepen.io/cferdinandi/pen/GRJvozN).
- Responsive Iframes - [w3schools.com](https://w3schools.com/howto/howto_css_responsive_iframes.asp). A more elegant solution was later found on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio).
- Vertical lines between site menu items from [Site Origin](https://siteorigin.com/thread/vertical-line-between-menu-items/) excluding final item.
- Social media icons given a [wiggle effect](https://www.w3schools.com/howto/howto_css_shake_image.asp).

Special mention is reserved for my mentor [Tim Nelson](https://github.com/TravelTimN) for his professionalism.
His guidance to use CSS grid transformed my approach to the desktop development. Also I'd like to thank him for his advice on writing markdown, project deployment, html semantics and improved user experience including [scrolling behaviours](https://css-tricks.com/snippets/jquery/smooth-scrolling/) on one page sites.

## Media
**Images**
- Landing page background from [Wallpaper Safari](https://wallpapersafari.com/w/YB8OlH).
- Cardinal Tetra image from [Aquarium Co-Op](https://www.aquariumcoop.com/blogs/aquarium/neon-tetras-and-cardinal-tetras?_pos=1&_sid=d1bb27efc&_ss=r).
- Dwarf Gourami image from [Aquarium Co-Op](https://www.aquariumcoop.com/blogs/aquarium/top-5-gouramis?_pos=1&_sid=49d4057ec&_ss=r).
- Amano Shrimp image from [Aquarium Co-Op](https://www.aquariumcoop.com/blogs/aquarium/a-solution-to-algae-amano-shrimp?_pos=1&_sid=aeba7cc00&_ss=r).
- Wood image from [Fishpond.co.uk](https://www.fishpond.co.uk/Pets/Pisces-30cm-Small-Spiderwood-Varies/9337280001146?utm_source=googleps&utm_medium=ps&utm_campaign=GB).
- Rock image from [Shopee](https://shopee.ph/Dragon-stone-(ohko-stone)-1kg-i.262018843.5337807506).
- Substrate image from [Aquascaping Love](https://aquascapinglove.com/learn-aquascaping/elements-of-aquascaping-rocks-driftwood-substrates/).
- Browser tab icon courtesy of [Martin Berube](https://icon-icons.com/icon/fish-animal/36981).
- Formdump background courtesy of [Anne Tynne](https://thriveglobal.com/stories/the-world-of-aquascaping-it-s-positive-impact./)

I'd like to thank Adam Edmond, whose articles on aquascaping styles have inspired me for many years.

- Dutch style image from an [The Aquarium Guide](https://theaquariumguide.com/articles/understanding-dutch-aquascaping-style).
- Iwagumi style image from an [The Aquarium Guide](https://theaquariumguide.com/articles/understanding-iwagumi-aquascaping-style).
- Nature style image from an [The Aquarium Guide](https://theaquariumguide.com/articles/understanding-nature-aquascaping-style).

**Video**
- Top 5 favorite plants from [George Farmer and Jurijs Jutjajevs](https://www.youtube.com/watch?v=jYjlle5rjSk) on youtube.