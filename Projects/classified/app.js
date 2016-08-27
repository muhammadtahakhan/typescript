// here some error about type so you can find solution
//  http://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
function submitad() {
    // let title = (<HTMLInputElement>document.getElementById('title')).value;
    // console.log(title);
    var title = document.getElementById('title');
    var sdata;
    sdata = JSON.parse(localStorage.getItem('title'));
    if (sdata == null) {
        sdata = [];
    }
    sdata.push(title.value);
    localStorage.setItem('title', JSON.stringify(sdata));
    console.log(sdata);
    // localStorage.setItem('title', JSON.stringify(title.value));
    // let mydata = ['one', 'two', 'three']
    // function myreducer(old, newone){
    //    return old+newone;
    // }
    // console.log(mydata);
    // console.log(mydata.reduce(myreducer));
}
//# sourceMappingURL=app.js.map