import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.css']
})
export class VigenereComponent implements OnInit {

  inText;
  inKey;
  outRes;
  msg;

  constructor() { }

  ngOnInit(): void {
  }

  doCrypt(isDecrypt) {
    const key = filterKey(this.inKey);
    if (key.length === 0) {
      alert('Key has no letters');
      return;
    }
    if (isDecrypt) {
      this.msg = 'Decryption';
      for (let i = 0; i < key.length; i++) {
        key[i] = (26 - key[i]) % 26;
      }
    } else {
      this.msg = 'Encryption';
    }

    this.outRes = crypt(this.inText, key);
  }

}



/*
 * Returns the result the Vigenère encryption on the given text with the given key.
 */
function crypt(input, key) {
  let output = '';
  for (let i = 0, j = 0; i < input.length; i++) {
    let c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
      j++;
    } else if (isLowercase(c)) {
      output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
}


/*
 * Returns an array of numbers, each in the range [0, 26), representing the given key.
 * The key is case-insensitive, and non-letters are ignored.
 * Examples:
 * - filterKey("AAA") = [0, 0, 0].
 * - filterKey("abc") = [0, 1, 2].
 * - filterKey("the $123# EHT") = [19, 7, 4, 4, 7, 19].
 */
function filterKey(key) {
  const result = [];
  for (let i = 0; i < key.length; i++) {
    let c = key.charCodeAt(i);
    if (isLetter(c)) {
      result.push((c - 65) % 32);
    }
  }
  return result;
}


// Tests whether the specified character code is a letter.
function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

// Tests whether the specified character code is an uppercase letter.
function isUppercase(c) {
  return 65 <= c && c <= 90;  // 65 is character code for 'A'. 90 is 'Z'.
}

// Tests whether the specified character code is a lowercase letter.
function isLowercase(c) {
  return 97 <= c && c <= 122;  // 97 is character code for 'a'. 122 is 'z'.
}
