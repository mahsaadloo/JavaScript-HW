# a little Contacts List

In this project we try to create a list of contacts with id, userName, phoneNumber, saved storage and avatar.
First of all we design a form with tailwind and flowbite and put a drawer to show all contacts together when we push a showDrawer button and close the drawer with close button by .addEventListener() method with  classList() method to remove or add classes.
We put submit button, when we push it, the value in input1 and input2 are get from .addEventListener() method and create a new array that calls contactList[] and push newContact to it.
Do not forget to describe all with .querySelector() and put < HTML Button / Input / UList Element > after that.
At last we want to show contacts in drawer. For this porpuse we describe all tags such as < li >,< h2 >,< p > with .createElement() and get them value of each input we want to show in it. after all with appendChild() method < li > accept child < h2 > and < p > and < ul > append child < li > and give them style by .className() method.
last part of project we modular our codes. we create types.ts , importer.ts , events.ts and lead codes to them with export and import them in main ts page( index.ts ).