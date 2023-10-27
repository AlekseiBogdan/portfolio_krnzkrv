'use strict'

let navScroll = (line) => {
    document.addEventListener('scroll', () => styleChange(line));

    function styleChange(line) {
        if (window.scrollY > 120) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    }
}

let changeMode = (check, navLine) => {
    check.addEventListener('change', () => changeStyle())
    const video_light = document.getElementsByClassName('white_mode');
    const video_dark = document.getElementsByClassName('dark_mode');
    const navBars = document.getElementsByTagName('nav');
    const mainMode = document.getElementsByClassName('mainMode');
    const otherMode = document.getElementsByClassName('otherMode');
    const projectsHeader = document.getElementsByClassName('projectsHeader');
    const projects = document.getElementsByClassName('projects');
    const randomThings = document.getElementsByClassName('randomThings');
    const projectsAndSwitcher = document.getElementsByClassName('projectsAndSwitcher');
    const feedback = document.getElementsByClassName('feedback');
    const welcome_vid = document.getElementsByClassName('welcome_video');
    const contactsDark = document.getElementsByClassName('darkmodeContacts');
    const contactsWhite = document.getElementsByClassName('contactsWrapper')
    const animatedMentalPosters = document.getElementsByClassName('animatedPosters');
    const animatedCartoonPosters = document.getElementsByClassName('cartoonAnimatedPosters');

    function changeStyle() {
        if (check.checked === true) {
            document.body.style.background = 'var(--darkmode-bg-color)';
            video_light[0].style.display = 'none';
            video_dark[0].style.display = 'block';
            navBars[0].style.display = 'none';
            navBars[1].style.display = 'block';
            navLine.style.border = '1px solid #303030';
            mainMode[0].style.display = 'none';
            mainMode[1].style.display = 'block';
            otherMode[0].style.display = 'none';
            otherMode[1].style.display = 'block';
            projectsHeader[0].style.display = 'none';
            projectsHeader[1].style.display = 'block';
            projects[0].style.display = 'none';
            randomThings[0].style.cssText = 'display: flex; flex-wrap: wrap; gap: 20px;';
            projectsAndSwitcher[0].style.marginBottom = '60px';
            feedback[0].style.display = 'none';
            welcome_vid[0].style.display = 'none';
            contactsWhite[0].style.display = 'none';
            contactsDark[0].style.display = 'flex';

            let i = 0;
            let timerId = setInterval(() => {
                if (i > 0) {
                    animatedMentalPosters[i-1].style.zIndex = '-1';
                    animatedCartoonPosters[i-1].style.zIndex = '-1';
                }
                animatedMentalPosters[i].style.zIndex = '1';
                animatedCartoonPosters[i].style.zIndex = '1';
                console.log(i);
                if (i === 4) {
                    i -= 5;
                    animatedMentalPosters[4].style.zIndex = '-1';
                    animatedCartoonPosters[4].style.zIndex = '-1';
                }
                ++i;
            }, 750)

        } else {
            document.body.style.background = 'var(--main-bg-color)';
            video_light[0].style.display = 'block';
            video_dark[0].style.display = 'none';
            navBars[0].style.display = 'block';
            navBars[1].style.display = 'none';
            navLine.style.border = '1px solid #DADADA';
            mainMode[0].style.display = 'block';
            mainMode[1].style.display = 'none';
            otherMode[0].style.display = 'block';
            otherMode[1].style.display = 'none';
            projectsHeader[0].style.display = 'block';
            projectsHeader[1].style.display = 'none';
            projects[0].style.display = 'block';
            randomThings[0].style.display = 'none';
            projectsAndSwitcher[0].style.marginBottom = 0;
            feedback[0].style.display = 'block';
            welcome_vid[0].style.display = 'block';
            contactsWhite[0].style.display = 'flex';
            contactsDark[0].style.display = 'none';
        }
    }


}

window.onload = function() {
    const navLine = document.getElementById('navScrollLine');
    navScroll(
        navLine,
    );
    changeMode(
        document.getElementById('switch'),
        navLine,
    )
}