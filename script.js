// a simple api to make the scroll smoother
function changeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) section.scrollIntoView({ behavior: 'smooth' });
};