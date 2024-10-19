/* we can access tag attribute using css 
[alt] {
  border: 4px solid red;
}
*/

/* in javascript we access element by attribute 
document.querySelector('[alt]')
document.querySelector('[alt="javascript roadmap"]')
*/

/* access attribute
document.body.children[0].attributes.class

 */

// ********** but javascript inbuilt method , for access html attribute
// document.querySelector('h1').getAttribute('class')
// document.querySelector('h1').setAttribute('class','myclass')

// ******************* we can only those attribute access which present direct in object , mean not present in any nested
// document.body.children[0].id

// ******************** we can access some attribute direct
// document.body.children[0].className

// **************** we can set some attribute direct
// document.body.children[0].className = 'myclass'
