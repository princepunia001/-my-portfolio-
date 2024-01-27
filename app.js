const contact=document.querySelector('.contact_button')
contact.addEventListener('click',()=>{
    alert('Thanks for Conatcting!!!');
})

setInterval(() => {
    document.querySelector('.main_content').style.color='#4b4646';
    document.querySelector('.main_content').style.fontFamily="'Hedvig Letters Serif', serif";
}, 3000);
setInterval(() => {
    document.querySelector('.main_content').style.color='#656060';
    document.querySelector('.main_content').style.fontFamily="cursive";
    
}, 6000);
setInterval(() => {
    document.querySelector('.main_content').style.color='grey';
}, 9000);
setInterval(() => {
    document.querySelector('.main_content').style.color='black';
    document.querySelector('.main_content').style.fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
}, 12000);
