function add_data()
{
    document.getElementById('error').innerHTML=""; 
    let data=document.getElementById('val').value;
    // console.log(data);
    if(data=='')
    {
        document.getElementById('error').innerHTML="Enter the list";
    }
    else{
        let box=document.getElementById('box');
        let x=document.createElement('li');
        x.textContent=data;

        let a=document.createElement('a');
        a.href="javascript:void(0)";
        a.textContent="Remove";
        a.className="rm";
        x.appendChild(a);
        
        box.appendChild(x);
        //document.getElementById('box').innerHTML=data;
    }
    document.getElementById('val').value="";
}


let y=document.querySelector('ul')

y.addEventListener('click',function(name){
    let box=document.getElementById('box');
    let x=name.target.parentNode;
    box.removeChild(x);
})