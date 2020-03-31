import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceasers',
  templateUrl: './ceasers.component.html',
  styleUrls: ['./ceasers.component.css']
})
export class CeasersComponent implements OnInit {

  inText;
  inKey;
  outRes;
  msg;
  constructor() { }

  ngOnInit(): void {
  }

  doCrypt(isDecrypt) {
    const shiftText = this.inKey;
    if (!/^-?\d+$/.test(shiftText)) {
      alert('Shift is not an integer');
      return;
    }
    let shift = this.inKey;
    if (shift < 0 || shift >= 26) {
      alert('Shift is out of range');
      return;
    }
    if (isDecrypt) {
      shift = (26 - shift) % 26;
      this.msg = 'Decryption';
    } else {
      this.msg = 'Encryption';
    }

    this.outRes = this.caesarShift(this.inText, shift);
  }

  caesarShift(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (65 <= c && c <= 90) {
        result += String.fromCharCode((c - 65 + shift) % 26 + 65);
      } else if (97 <= c && c <= 122) {
        result += String.fromCharCode((c - 97 + shift) % 26 + 97);
      } else { result += text.charAt(i); }  // Copy
    }
    return result;
  }
}
