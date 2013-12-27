/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(init);

function init()
{
    console.log('site loaded.');
    contenierStyle();
    setupList();
    setIntervalFrame();
}

function contenierStyle()
{
    $('#rootMain').addClass('rootDivItem');
}

var listCount = 4;
function setupList()
{
    for(var i = 0 ; i < listCount ; i++)
    {
        var divitem = document.createElement('div');
        divitem.id = 'item'+i;
        divitem.appendChild(getItem());
        $('#rootMain').append(divitem);        
        divitem.className = 'litstitem';        
    }
}

function getItem()
{
    var divitem = document.createElement('div');
    var img = document.createElement('img');
    img.src = 'img/fondo.jpg';
    img.className = 'imgitem';
    divitem.className = 'divitem';
    divitem.appendChild(img);
    
    var gap = document.createElement('div');
    gap.className = 'gapbox';
    divitem.appendChild(gap);    
    
    var textP = document.createElement('div');
    textP.textContent = 'To change this license header, choose License Headers in Project Properties.';    
    textP.className = 'textmargin';
    divitem.appendChild(textP);    
    return divitem;
}
var intervalframe=0;
function setIntervalFrame()
{
    //intervalframe =  setInterval(scrollup,1000);   
    intervalframe =  setInterval(scrollmove,1000);   
    
}

var previousTop = 0;
function scrollup()
{
    var tp = $('#rootMain');    
    var item = $('#rootMain').children() ;
    //item[0].top += "10px";
    previousTop += 1;
    //console.log('previous value->'+previousTop);
    //item[0].style.top = previousTop+"px";
    
    //$('#rootMain').children(':first').css('top',100+'px');
    //$('#rootMain').children(':first').css('top',10+'px');
    
    //console.log('position=>'+item[0].scrollLeft());
    //console.log('0->'+item[1].style.top)
    // loop
    
    var pos = $('#rootMain').children(':first').position();
       //console.log(pos);
       
       $('#rootMain').children().each(function ()
       { 
            var curObj = jQuery(this);
            var objPOsition = jQuery('#'+this.id).position();
            console.log(objPOsition.top);
            //console.log($('#rootMain').height());
            if(objPOsition.top > $('#rootMain').height())
            {
               jQuery('#'+this.id).css('top', 0);
               //previousTop = 0;
               //previousTop = 1;
               //item[i].style.top = previousTop+"px";
            }
            else
            {
                var curTop = (jQuery(this).css('top') == 'auto') ? 0 : parseInt(jQuery(this).css('top'));
                console.log(curTop);
                //objPOsition.top = objPOsition.top+10;
                //jQuery('.litstitem').css('position', '');
                //jQuery('#'+this.id).attr('style', ''(objPOsition.top+10)+'px');
                jQuery('#'+this.id).css('top', (curTop+10)+'px');
                //jQuery('.litstitem').css('position', 'absolute');
                //jQuery(this).css('top', objPOsition.top);
            }
        });
    /*for(var i = listCount-1 ; i >=0 ; i--)
    {
      //  console.log(item[i].style.top)
       var itemTop = parseInt(item[i].style.top);
     //  console.log('i'+i+' - '+parseInt(item[i].style.top));
       //console.log($('#rootMain').height());
       
       
       if(parseInt(item[i].style.top) > $('#rootMain').height())
       {
          // item[i].style.top = 0;
          //previousTop = 0;
          previousTop = 1;
          //item[i].style.top = previousTop+"px";
       }
       else
       {
         // item[i].style.top = previousTop+"px";
       }
       //console.log('itemTop=>'+$('#rootMain').height());      
       //item[i].style.top = previousTop+"px";
    }*/
}

function scrollmove()
{    
    previousTop += 15;                    
    $('#rootMain').children().each(function ()
    { 
         var curObj = jQuery(this);
         var objPOsition = jQuery('#'+this.id).position();                     
         if(objPOsition.top > $('#rootMain').height())
         {
            jQuery('#'+this.id).css('top', '0px');
            previousTop = 0;   
            
         }
         else
         {             
             jQuery('#'+this.id).css('top', (previousTop)+'px');
         }
     });   
}