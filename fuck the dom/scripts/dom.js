// //EXAMINE THE DOCUMENT OBJECT//
// console.dir(document) //log all the nodes of document
// console.log(document.domain); //gives the domain
// console.log(document.URL); //gives the url of the document model
// document.title = "Fuck the DOM";
// console.log(document.title); //list the tiitle of the document
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

/*QUERY THE DOM */


/*GETELEMENTBYID */
var headerTitle = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h1>Hello my name is wilson</h1>'
headerTitle.style.borderBottom = 'solid 3px #99FC12';


/*GETELEMESNTBYCLASSNAME*/
// var bgc = document.getElementsByClassName('list-group-item');
// console.log(bgc);
// bgc[2].textContent = "hello wilson";
// bgc[2].style.fontWeight = 'bold';
// bgc[2].style.backgroundColor = 'yellow';
// //Give background color to all list elemments?
// //bgc.style.backgroundColor = '#f4f4f4'; /*gives an error */
// for (var index = 0; index < bgc.length; index++) {
//     if (index % 2 === 0) {
//         bgc[index].style.backgroundColor = '#f4f4f4';
//     } else {
//         bgc[index].style.backgroundColor = 'yellow';

//     }
// }

/*GETELEMENTSBYTAGNAME */
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[2].textContent = "hello wilson";
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'yellow';
// //Give background color to all list elemments?
// //bgc.style.backgroundColor = '#f4f4f4'; /*gives an error */
// for (var index = 0; index < li.length; index++) {
//     if (index % 2 === 0) {
//         li[index].style.backgroundColor = '#f4f4f4';
//     } else {
//         li[index].style.backgroundColor = 'yellow';

//     }
// }

/*
QUERYSELECTOR
*/

var head = document.querySelector('.bg-success');
head.style.backgroundColor = '#27A547';
head.style.color = 'white';
var header = document.querySelector('.card');
header.style.border = 'solid 1px #B8B8B8';
header.style.padding = '15px';
header.style.margin = '10px';
header.style.borderRadius = '5px';
var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.style.backgroundColor = '#353946';
submit.style.color = '#FFFEFF';


var firstchild = document.querySelector('.list-group-item');
firstchild.style.backgroundColor = 'green';

var secchild = document.querySelector('.list-group-item:nth-child(2)');
secchild.style.backgroundColor = '#99FC12';

var thrdchild = document.querySelector('.list-group-item:nth-child(3)');
thrdchild.style.backgroundColor = '#FC9912';

var lastchild = document.querySelector('.list-group-item:last-child');
lastchild.style.backgroundColor = '#785BA0';

//QUERYSELECTALL//

var titles = document.querySelectorAll('.title');
//console.log(titles);
titles[0].textContent = "I'M title 1";
titles[1].textContent = "I'M Title 2";
titles[0].style.color = 'red';
titles[1].style.color = 'pink';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'red';
    even[i].style.backgroundColor = 'blue';

}

/**
 * Traversing the dom
 */

var itemlist = document.querySelector('#items');
//PARENTNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#DDFEB0';

//PARENTElement
/**
 * same as parent node....can be used interchenably for the better part
 */
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#DDFEB0';
//console.log(itemlist.childNodes);//shows all children plus white spaces and line breaks
// console.log(itemlist.children[1]);//igonres white s[aces and line breaks]

// itemlist.children[1].style.backgroundColor = 'yellow';
// /**
//  * firstChild
//  */
// // console.log(itemlist.firstChild) //quite of no much use
// //as well includes white spaces/ line breaks
// /**
//  * firstElEMentChild
//  */
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "i'm the first element child";


document.querySelector('#button').style.backgroundColor = '#353946';

//console.log(itemlist.lastChild) //quite of no much use
//as well includes white spaces/ line breaks
/**
 * LastElEMentChild
 */
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = "i'm the last element child";

/**
 * siblings 
 */
//NextSibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';


/**
 * creating dom elements
 */
// createElement
// create div
var newDiv = document.createElement('div');
//add a class
newDiv.className = 'hello';
//add an id
newDiv.id = 'hello1';
//set Attribute
newDiv.setAttribute('title', 'Am the New Div');

//add content
//create new varialble
var newDivText = document.createTextNode('hey there fuckers am the new just created node')
newDiv.appendChild(newDivText);
var cont = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
cont.insertBefore(newDiv, h1);
var sec = document.createElement('div');
sec.className = 'class1';
sec.id = 'id1';
sec.setAttribute = "i'm second";

var textForSec = document.createTextNode('Add new list through this form');
sec.appendChild(textForSec);
console.log(sec);
var after = document.querySelector('form');
var insertIn = document.querySelector('#main');
insertIn.insertBefore(sec, after);

sec.style.fontSize = '30px';
sec.className = 'alert alert-danger';

// var button = document.querySelector('#button');

//button.addEventListener('mousemove', buttonclick);

var box = document.querySelector('#box');
box.style.border = '2px solid blue';
box.style.padding = ' 90px';
box.addEventListener('mousemove', buttonclick);

function buttonclick(e) {
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";

}

var iteminput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
iteminput.addEventListener('keydown', myfunction);

function myfunction(e) {
    document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';


}