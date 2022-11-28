const items = document.querySelectorAll('.hidden, .hidden1, .hidden2, .hidden3, .hidden4');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('in-view'); 
        }
    });
}

const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }