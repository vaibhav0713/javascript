// set initial value
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

// console.log(btn);

btn.forEach(function(btn){
    // console.log(items);
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;

        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'black';
        }
    });
});