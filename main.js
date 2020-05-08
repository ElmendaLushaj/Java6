var lajmi = {

    titulli: '',
    permbajtja: ''
};
function shtoLajmin() {

    var divi = document.createElement('div');
    divi.className = 'form-group';

    var image=document.createElement('img');
    image.className='foto-lajmi';
    divi.appendChild(image);


    var createtitulli = document.createElement('h3');
    lajmi.titulli = document.getElementById('titulli-new').value;
    var titulli1 = document.createTextNode(lajmi.titulli);
    createtitulli.appendChild(titulli1);
    divi.appendChild(createtitulli);


    var createtext = document.createElement('p');
    lajmi.permbajtja = document.getElementById('permbajtja-new').value;
    var teksti = document.createTextNode(lajmi.permbajtja);
    createtext.appendChild(teksti);
    divi.appendChild(createtext);


    var element = document.getElementById('right-side');
    element.appendChild(divi);


var nr=element.childElementCount;
if(nr==6)
element.removeChild(element.lastElementChild);
}

