# **SCIENTIA geographia**

Welcome to **SCIENTIA geographia**. A website developed to Test your Geography knowledge.

![Mockup](docs/readme/responsive.png "Website preview at different resolutions") 

# Table of Contents
- [UX Design](#ux-design)
  - [Audience](#audience)
  - [Site Design and User Stories](#site-design-and-user-stories)
  - [Wireframing](#wireframing)
  - [Color Scheme and Accessibility](#color-scheme-and-accessibility)
  - [Code Reusability and Site Layout](#code-reusability-and-site-layout)
- [Existing Features](#existing-features)
 - [One Page Site and Future Implementations](#one-page-site-and-future-implementations)
 - [Header and Background](#header-and-background)
 - [Footer](#footer)
 - [Landing Section](#landing-section)
 - [Name Section](#name-section)
 - [Quiz Section](#quiz-section)
    - [Quiz Info Bar](#quiz-info-bar)
    - [Upgrade](#upgrade)
    - [Questions & Answers](#questions-and-answers)
    - [Score Tracker](#score-tracker)
  - [Results Section](#results-section)
- [Testing](#testing)
- [Deployment](#deployment)
  - [Local Deployment](#local-deployment)
- [Credits](#credits)
  - [Media and Content](#media-and-content)

# UX Design
The site is a fun but challenging quiz.
## Audience
It is target audience is assumed to have a good level of general knowledge or have studied geography as part of their academics.

## Site Design and User Stories
The site's design is informed by the *users stories* and aims to provide:
- An elegant yet simple and intuitive inteface
- A place to input a name to tailor their unique results
- Be able to discern what question they are on
- Give a visual cue to how much time is left to answer the current question
- Use a simple mouse click to select the answer to each question
- Provide the option to change their mind before moving to the next question
- Get feedback *during* the quiz on how they answered the previous questions
- At the end of the quiz to get a bespoke message on how they performed
- Have the option to play again
- Have a means of viewing the developer's other work and contacting them via LinkedIn

## Wireframing
[Wireframes](docs/wireframes) were created using Balsamiq desktop.
![Desktop Landing](docs/wireframes/desktop-landing-section.png "Landing section on desktop")
![Tablet Landing](docs/wireframes/tablet-landing-section.png "Landing section on tablet")
![Mobile Landing](docs/wireframes/mobile-landing-section.png "Landing section on mobile")
![Desktop Quiz](docs/wireframes/desktop-quiz-section.png "Quiz section on desktop")
![Tablet Quiz](docs/wireframes/tablet-quiz-section.png "Quiz section on tablet")
![Mobile Quiz](docs/wireframes/mobile-quiz-section.png "Quiz section on mobile")
![Results](docs/wireframes/results-section.png "Results section")

As the project developed other features were added to realise functionality. These included: 
- A call to action button to begin the quiz
- A name input section before the first question
- A replay button in the results section to easily navigate to the beginning of the page

## Color Scheme and Accessibility

The *color scheme* was derived from a piece of family tartan passed through [Adobe Color](https://color.adobe.com/create/image-gradient)
![color_scheme](docs/readme/adobe-color-image.png "Color Scheme")

To meet WCAG 2.0 criteria, the generated color scheme was then passed to [eightshapes.com](http://www.eightshapes.com) to generate an [*accessibility table*](docs/readme/color-contrast-grid.png "Color Accessibilty Table").

![color_scheme](docs/readme/color-contrast-grid.png "Accessibility Table")


## Code Reusability and Site Layout
Extensive use was made of flexbox to position elements and were possible classes within the html were used to inject most of the CSS styles into the page.
This reduced the size and complexity of the CSS used.

```html
<section id="quiz" class="flex-column flex-center rounded-border max-width">
</section>
```

```css
.rounded-border {
border-radius: 10px;
}
```

# Existing Features

## One Page Site and Future Implementations
For ease, the site is limited to one page as this is my first time using Javascript (JS) within the DOM.  Given current limitations, I was still able to activate the page by showing/hiding different sections by adding event listeners to specific elements.
This gives the appearance of the site being more complex than it actually is.

```js
function startNewGame() {
  landingSection.style.display = "none";
  newGameSection.style.display = "inline-flex";
  playerName.focus();
}

playQuizButton.addEventListener("click", startNewGame);
```

Further development implementations could be: 
- A leaderboard (initially using JSON)
- An option for the user to change the site color scheme. JS can easily do this by adding/removing classes on targeted elements. Color classes are present in the  css for this eventuality.
- A facility to print a certificate
- Quiz length could be modified.  This would require a redraw of the `#score-tracker` element using template literals. The number of child elements would reflect the ``quizLength`` variable in the JS file.

## Header and Background
![desktop](docs/readme/header.png "Header")

The site follows a simple one page design therefore an anchor tag isn't required on the [header](docs/readme/header.png "Header section").

No menus are needed as all navigation is handled by JS.

An alpha value of 0.85 is used to help blend the heading into the [background](docs/readme/background.png "Background Image") image set as a body property.  An old fashioned globe implicitly tells the user the site is geography based.

Note the use of Latin and two contrasting font styles, one modern and the other cursive.  This is to convey that Geography is a modern science grounded in classical knowledge.

## Footer
![footer](docs/readme/footer.png "Footer section")

The [footer's](docs/readme/footer.png "Footer section") provides access to the developer's Github repos and LinkedIn profile via the favicon links.  These open in new tabs as per best practice.

Their goal is to allow others use the code in their own projects and have a means of contact. 

## Landing Section
This section is a launch point for the user and is minimalist by design.  The call to action button acts as a signpost to begin the quiz.

![Call To Action Button](docs/readme/landing-page-call-to-action.png "Call to Action Button")

## Name Section
The name section has a few useful features:
- Autofocus on the name input element to save the user having to manually select it.  This is useful on mobile devices. The blinking cursor shows the application
is ready for input.
- Two buttons to either start or leave quiz and return to landing section. This gives the user added control before beginning the game.
- An error handler that applies a red border to the input box in the event where no player name is provided.
- An additional event listener has been added to the input element. Pressing *Enter* or *Go* on a mobile device keypad has the same result as clicking the Start button.

![Name Section](docs/readme/input-name-section.png "Name Section")

## Quiz Section

### Quiz Info Bar
![Quiz Info Bar](docs/readme/quiz-info.png "Quiz Info Bar")

Features include:
- An indicator stating the current question number out of a total of the total quiz length.. 
- A countdown timer with intuitive favicon showing a person and clockface
- A countdown bar for the more visual user

### Questions and Answers
![Question Answer Next](docs/readme/question-answer-next.png "Question Answer Next")

Features include:
- One question and four multiple choice answers
- The selected answer has a different format
- The user can change their mind and select a different answer before clicking next button to move to next question (many similar quizes lack this feature)
- Shuffle functionality using the [*Fisher/Yates*](https://bost.ocks.org/mike/shuffle/) method.  This enables the application to ask the same number of questions which are consistently varied each time it is played.  This was noted by regular players during testing.

### Score Tracker
![Score Tracker](docs/readme/quiz-answer-feedback.png "Score Tracker")

Ten elements are hard coded into the html to provide the user constant on their progress / current performance.

Elements are color coded and mean the following:
- *Yellow* shows the question the user is currently on.  This supplements the question number display in the quiz info bar above the question
- *Gray* shows the user didn't confirm an answer on the previous question before the 30 second countdown reached zero.
- *Red* shows a wrong answer
- *Green* shows a correct answer

## Results Section
![Results Section](docs/readme/results.png "Results Section")

The results modal provides the user with:
- Their total score out of 10
- A bespoke message comprised of the name they provided with text feedback based on their score.
- Links are provided to notable geographers through the ages to give the user an extra learning boost.  
- A REPLAY button

# Browser Testing
See [TESTING.md](TESTING.md) for bugs and fixes across popular browsers (2021).

# Deployment
The site was deployed to *GitHub* pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the *Settings* tab.
- From the source section drop-down menu, select the Master Branch.
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://stevenweir038.github.io/Scientia-Geographia-Quiz/

## Local Deployment
In order to make a local copy of this repository, you can clone the project by typing the follow into your IDE terminal:
- `git clone https://github.com/StevenWeir038/Scientia-Geographia-Quiz.git`

Alternatively if using gitpod you can click [here](https://gitpod.io/#https://github.com/StevenWeir038/Scientia-Geographia-Quiz)

# Credits
My appreciation to my mentor [Tim Nelson](https://github.com/TravelTimN) for his approachability, knowhow and assistance in refactoring.
Being methodical and trying new things often leads to better solutions.

Also I'd like to thank my fellow students and alumni at [Code Institute](https://codeinstitute.net/) for sharing their insights and approaches via Slack.

Credit goes to [Britannica](https://www.britannica.com/quiz/50-capital-cities-at-random-quiz).  This inspired me to replicate an in-quiz score tracking system into my own project.

Questions are based of my own general knowledge from years pouring over [Google Maps](https://www.google.com/maps/place/Code+Institute/@53.2996313,-6.1656661,11.75z/data=!4m5!3m4!1s0x48670e99733f3617:0x7ff7202fe3dea603!8m2!3d53.2981987!4d-6.178654) and watching too many videos on [Youtube](https://www.youtube.com) and [Curiosity Stream](https://www.curiositystream.com)!

## Media and Content
**External Links**
Links from the results section are credited to:
- [National Geographic](https://www.nationalgeographic.org)
- [GIS Wiki](https://wiki.gis.com/wiki/index.php/Main_Page)
- [World History Encyclopedia](https://www.worldhistory.org/)

**Images**
Body background courtesy of [Teahub](https://www.teahub.io/viewwp/iRibmT_wallpaper-globe-antiques-map-globus/).

Favicons from [Font Awesome](https://fontawesome.com/).