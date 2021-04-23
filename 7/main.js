class DomElement {
    constructor(selector, height, width, bg, fontSize) { 
        this.selector = selector; 
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    createElement () {
        if (this.selector.startsWith('.')) {
            const elem = document.createElement('div')
            elem.classList.add(this.selector)
            elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            document.body.append(elem)
        }
        
        if (this.selector.startsWith('#')) {
            const elem = document.createElement('p')
            elem.classList.add(this.selector)
            elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
            document.body.append(elem)
        }      
    }
}

let create = new DomElement('.class', '100px', '100px', 'red', '23px');
create.createElement();