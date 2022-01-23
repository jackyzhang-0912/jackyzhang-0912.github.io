// a simple api to make the scroll smoother
function changeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) section.scrollIntoView({ behavior: 'smooth' });
};

// send email method
function sendMail() {
    const emailStr = 'mailto:jackyzhang0912@gmail.com?subject=You name it&body=Open to anything~';
    window.location.href = emailStr;
}