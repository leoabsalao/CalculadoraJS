class CalcController{
    
    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();
    }

    initialize(){              

         this.setDisplayDateTime();

       let interval = setInterval(() => {
         this.setDisplayDateTime();       
       }, 1000);

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