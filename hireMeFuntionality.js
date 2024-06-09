

document.addEventListener('DOMContentLoaded', ()=>
{
    document.querySelector('form').onsubmit = ()=>{
        //get input values
        const name = document.querySelector('#sender-name');
        const mail = document.querySelector('#sender-contact');
        const title = document.querySelector('#job-title');
        const desc = document.querySelector('#job-desc');

        console.log(`Name: ${name.value} Mail: ${mail.value} Title: ${title.value} Desc: ${desc.value}`);

        //ensure all fields have valid input
        if( name.value.length === 0 )
        {
            
        }

        return false;
    };
});

