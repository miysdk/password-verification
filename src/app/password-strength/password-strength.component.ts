import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})

export class PasswordStrengthComponent {
  password: string = '';
  validators: Strength = {
    hasLetters: false,
    hasNumbers: false,
    hasSymbols: false,
  };
  strength: number = 0;

  constructor() {}
  
  passwordValidation(){
    const includesLetters = /\p{L}+/ui;
    const includesNumbers = /\d+/;
    const includesSymbols = /[^\p{L}0-9\s]+/ui;

    this.validators.hasLetters = includesLetters.test(this.password);
    this.validators.hasNumbers = includesNumbers.test(this.password);
    this.validators.hasSymbols = includesSymbols.test(this.password);

    this.strength = 0;
    for (const [key, value] of Object.entries(this.validators)) {
      if(value === true) this.strength++;
    }
    console.log(this.strength);
  }
}

interface Strength {
  hasLetters: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean
}