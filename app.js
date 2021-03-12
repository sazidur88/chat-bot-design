const chatButton = document.querySelector('.cbot__button');
const chatContent = document.querySelector('.cbot__support');
const icons = {
    isClicked: '<img src="./images/icons/c.png" />',
    isNotClicked: '<img src="./images/icons/c.png" />'
}
const cbot = new Interactivecbot(chatButton, chatContent, icons);
cbot.display();
cbot.toggleIcon(false, chatButton);