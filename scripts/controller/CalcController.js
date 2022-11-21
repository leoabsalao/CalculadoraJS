class CalcController{
    
    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){              

         this.setDisplayDateTime();

       let interval = setInterval(() => {
         this.setDisplayDateTime();       
       }, 1000);

    }

    addEventListenerAll(element, events, fn){       
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {  

            this.addEventListenerAll(btn, "click drag", e => {
                console.log(btn.className.baseVal.replace("btn-",""));
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            })


        })
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayDate(){
       return this._dateEl.innerHTML;
    }

    set displayDate(value){
       this._dateEl.innerHTML = value;
    }

    get displayTime(){
       return this._timeEl.innerHTML;
    }
    
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get disPlayCalcEl(){
        return this._displayCalcEl.innerHTML;
    }

    set disPlayCalcEl(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set dataAtual(value){
        this._currentDate = value;
    }

} 