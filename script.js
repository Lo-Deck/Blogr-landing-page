const displayMenu = document.getElementById('display-menu');
const menuMobile = document.getElementById('menu-mobile');
const titleMenu = document.getElementsByClassName('title-menu');
const listMenu = document.getElementsByClassName('list-menu');



if(document.body.clientWidth < 1120)
{    
    menuMobile.classList.add('hidden');
}
else
{
    menuMobile.classList.remove('hidden');
}


window.onresize = function() {

    if(document.body.clientWidth < 1120)
    {    
        menuMobile.classList.add('hidden');
    }
    else
    {        
        menuMobile.classList.remove('hidden');
    }

};



let positionArrow = 0;
let positionArrow2 = 0;
let positionArrow3 = 0;


displayMenu.addEventListener('click', () => {

    menuMobile.classList.toggle('hidden');


    if(menuMobile.classList[1] === 'hidden')
    {
        displayMenu.innerHTML = '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>';
    }
    else
    {

        displayMenu.innerHTML = '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/></svg>';

    }
        


});



for(let i = 0; i < titleMenu.length; i++)
{

    titleMenu[i].addEventListener('click', () => {


        listMenu[i].classList.toggle('display');


        if(i === 0 && positionArrow === 0)
        {

            document.styleSheets[1].cssRules[12].style.transform = 'rotate(180deg)';
            titleMenu[i].style.opacity = '0.6';

            if(document.body.clientWidth > 1119)
            {

                listMenu[1].classList.add('display');
                listMenu[2].classList.add('display');

                titleMenu[1].style.opacity = '1';
                titleMenu[2].style.opacity = '1';

                document.styleSheets[1].cssRules[13].style.transform = 'rotate(0deg)';
                document.styleSheets[1].cssRules[14].style.transform = 'rotate(0deg)';

                positionArrow2 = 0;
                positionArrow3 = 0;

            }

            positionArrow = 1;

        }
        else if(i === 0 && positionArrow === 1)
        {
            console.log('eeeeeeee');
            document.styleSheets[1].cssRules[12].style.transform = 'rotate(0deg)';
            titleMenu[i].style.opacity = '1';
            positionArrow = 0;
        }     



        
        if(i === 1 && positionArrow2 === 0)
        {

            document.styleSheets[1].cssRules[13].style.transform = 'rotate(180deg)';
            titleMenu[i].style.opacity = '0.6';
 
            if(document.body.clientWidth > 1119)
            {

                listMenu[0].classList.add('display');
                listMenu[2].classList.add('display');

                titleMenu[0].style.opacity = '1';
                titleMenu[2].style.opacity = '1';

                document.styleSheets[1].cssRules[12].style.transform = 'rotate(0deg)';
                document.styleSheets[1].cssRules[14].style.transform = 'rotate(0deg)';

                positionArrow = 0;
                positionArrow3 = 0;

            }
 
            positionArrow2 = 1;

        }
        else if(i === 1 && positionArrow2 === 1)
        {
            document.styleSheets[1].cssRules[13].style.transform = 'rotate(0deg)';
            titleMenu[i].style.opacity = '1';
            positionArrow2 = 0;
        }  



        if(i === 2 && positionArrow3 === 0)
        {

            document.styleSheets[1].cssRules[14].style.transform = 'rotate(180deg)';
            titleMenu[i].style.opacity = '0.6';
  
            if(document.body.clientWidth > 1119)
            {

                listMenu[0].classList.add('display');
                listMenu[1].classList.add('display');

                titleMenu[0].style.opacity = '1';
                titleMenu[1].style.opacity = '1';

                document.styleSheets[1].cssRules[12].style.transform = 'rotate(0deg)';
                document.styleSheets[1].cssRules[13].style.transform = 'rotate(0deg)';

                positionArrow = 0;
                positionArrow2 = 0;

            }

            positionArrow3 = 1;

        }

        else if(i === 2 && positionArrow3 === 1)
        {
            document.styleSheets[1].cssRules[14].style.transform = 'rotate(0deg)';
            titleMenu[i].style.opacity = '1';
            positionArrow3 = 0;
        } 

    });

} 

