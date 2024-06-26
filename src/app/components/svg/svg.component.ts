import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  template: `
   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="pointer-events: none;"><path d="M416 32H311.4C300.3 12.9 279.7 0 256 0s-44.3 12.9-55.4 32H96c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32m-160 0c17.7 0 32 14.3 32 32h-64c0-17.7 14.3-32 32-32m160 416H96V64h64v64h192V64h64zm-32-224H128v-32h256zm0 64H128v-32h256zm0 64H128v-32h256zm0 64H128v-32h256z"></path></svg>
  `,
  styles: [
  ]
})
export class SvgComponent {
@Input() class = '';
}
