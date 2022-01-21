/* eslint-disable import/no-duplicates */
import SignIn from '../../src/pages/signin';
import { handleCurrentUser } from '../../src/pages/signin';

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from '../../src/utils/firebaseconfig.js';

jest.mock('../../src/utils/firebaseconfig.js');

describe('SignIn', () => {
  it('Click Sing In call function Sign In', () => {
    const signInElem = SignIn();
    signInElem.querySelector('#email').value = 'mariana.guanda@mail.com';
    signInElem.querySelector('#password').value = '123456';
    const btn = signInElem.querySelector('#btn-signin-signin');
    const evt = new Event('click');
    btn.dispatchEvent(evt);
    console.log(signInWithEmailAndPassword.mock);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('correao@mail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('pwd');
  });
});
