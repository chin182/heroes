import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
        `
})

export class KeyUpComponent {
  values = '';

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

@Component({
  selector: 'key-up2',
  template: `
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
        `
})

export class KeyUpComponent_v2 {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'key-up3',
  template: `
        <input #box (keyup.enter)="onEnter(box.value)">
        <p>{{value}}</p>
        `
})

export class KeyUpComponent_v3 {
  value = '';

  onEnter(value: string) {
    this.value = value;
  }
}

@Component({
  selector: 'key-up4',
  template: `
        <input #box (keyup.enter)="update(box.value)"
            (blur)="update(box.value)">
        <p>{{value}}</p>
        `
})

export class KeyUpComponent_v4 {
  value = '';
  update(value: string) {
    this.value = value;
  }
}
