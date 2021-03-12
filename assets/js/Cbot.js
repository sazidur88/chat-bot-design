class Interactivecbot {
    constructor(a, b, c) {
        this.args = {
            button: a,
            cbot: b
        }
        this.icons = c;
        this.state = false; 
    }

    display() {
        const {button, cbot} = this.args;
        
        button.addEventListener('click', () => this.toggleState(cbot))
    }

    toggleState(cbot) {
        this.state = !this.state;
        this.showOrHidecbot(cbot, this.args.button);
    }

    showOrHidecbot(cbot, button) {
        if(this.state) {
            cbot.classList.add('cbot--active')
            this.toggleIcon(true, button);
        } else if (!this.state) {
            cbot.classList.remove('cbot--active')
            this.toggleIcon(false, button);
        }
    }

    toggleIcon(state, button) {
        const { isClicked, isNotClicked } = this.icons;
        let b = button.children[0].innerHTML;

        if(state) {
            button.children[0].innerHTML = isClicked; 
        } else if(!state) {
            button.children[0].innerHTML = isNotClicked;
        }
    }
}