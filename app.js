document.getElementById('translator').addEventListener('click', function(){
    console.log('clicked');
    ip = document.getElementById('input').value
    op = document.getElementById('output')
    var encodedURI = encodeURI(ip);
    console.log(ip);
    fetch('https://api.funtranslations.com/translate/minion.json?text='+encodedURI)
        .then(res => res.json())
        .then(ob => {
            op.innerText = ob.contents.translated
        })
        .catch(errors => alert('something wrong with the server, please try after some time'))
});