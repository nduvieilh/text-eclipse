import uuidv4 from 'uuid/v4';

class StyleService {
    static createStyle() {
        return  {
            id: uuidv4(),
            name: '',
            css: '',
            selectors: {
                class: '',
                before: '',
                after: '',
                hover: '',
            }
        };
    }

    static addStyles(document, styles) {
        StyleService.removePreviousStyles(document);
        const styleTag = document.createElement('style');
        styleTag.setAttribute('ref', 'text-eclipse');
        let innerHTML = '';
      
        styles.forEach(style => {
          if(style && style.selectors) {
            for(let [selectorKey, selectorValue] of Object.entries(style.selectors)) {
              let selector = `.style-${style.id}`;
              switch(selectorKey) {
                case 'before':
                  selector += ':before';
                  break;
                case 'after': 
                  selector += ':after';
                  break;
                case 'hover': 
                  selector += ':hover';
                  break;
              }
              innerHTML += `${selector} { ${selectorValue} } \n`;
            };
          }
        });
      
        styleTag.innerHTML = innerHTML;
      
        document.querySelector('head').appendChild(styleTag);
      }
      
      static removePreviousStyles(document) {
        const styleTag = document.querySelector('style[ref="text-eclipse"]');
        
        if(styleTag) {
          styleTag.remove();
        }
      }
}

export default StyleService;