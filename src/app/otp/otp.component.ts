import { Component, OnInit } from '@angular/core';
const A = 65; // ASCII value for A
const Z = 90; // ASCII value for Z
const CHARSET = 26; // Length of Alphabet

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})

export class OtpComponent implements OnInit {

  inText;
  inKey;
  outRes;
  outMsg;


  constructor() { }

  ngOnInit(): void {
  }
  doCrypt(btn) {
    let msg = this.inText;
    let key = this.inKey;
    let out = '';

    if (btn === 'encrypt') {
      // -- If no key, generate key --
      if (key.length < 1) {
        key = generateKey(msg);
      }

      // -- Check for errors --
      if (!detectErrors(msg, key, btn)) {
        // -- Encrypt msg with key --
        for (let i = 0; i < msg.length; i++) {
          const msgTmp = msg[i].charCodeAt();
          const keyTmp = key[i].charCodeAt();
          let tmp = msgTmp + keyTmp - (A - 1);

          // -- Roll over if value passes Z --
          if (tmp > Z) {
            tmp -= CHARSET;
          }

          out += String.fromCharCode(tmp);
        }

        // -- Display output(s) --
        this.inText = msg;
        this.inKey = key;
        this.outRes = out;
      }
    } else if (btn === 'decrypt') {
      // -- Check for errors --
      if (!detectErrors(msg, key, btn)) {
        // -- Decrypt msg with key --
        for (let i = 0; i < msg.length; i++) {
          const msgTmp = msg[i].charCodeAt();
          const keyTmp = key[i].charCodeAt();
          let tmp = msgTmp - keyTmp + (A - 1);

          // -- Roll over if value passes A --
          if (tmp < A) {
            tmp += CHARSET;
          }

          out += String.fromCharCode(tmp);
        }

        // -- Display output(s) --
        this.inText = msg;
        this.inKey = key;
        this.outRes = out;
      }
    }
  }
}
function cleanseText(txt) {
  txt = txt.toUpperCase();
  return txt.replace(/[^a-z]+/gi, '');
}

function formatText(txt) {
  let tmp = '';

  // -- Separate string into groups of 5 letters --
  for (let i = 0; i < txt.length; i++) {
    tmp += txt[i];

    if (i % 5 === 4) {
      tmp += ' ';
    }
  }

  return tmp;
}

function detectErrors(msg, key, button) {
  // -- If no message, warn user --
  if (msg.length < 1) {
    alert('Input Required');
    return true;
  }

  // -- If no key available --
  if ((key.length < 1) && (button === 'decrypt')) {
    alert('Key Required');
    return true;
  }

  // -- If key is too short, warn user --
  if ((msg.length > key.length)) {
    alert('Invalid Key');
    return true;
  }

  return false;
}

function generateKey(txt) {
  let key = '';

  // -- Generate secret key with same length as message --
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < txt.length; i++) {
    key += String.fromCharCode(Math.floor(Math.random() * CHARSET) + A);
  }
  return key;
}