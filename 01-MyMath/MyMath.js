/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.

        this.value = value * 1;

        if(value === undefined) {
            this.value = 0;
        }
    }

    add(value) {
        this.value+=value;
        return this;
    }

    subtract(value) {
        this.value-=value;
        return this;
    }

    multiply(value) {
        this.value*=value;
        return this;
    }

    divide(value) {
        this.value/=value;
        if(value === 0){
            this.value = value;
        }
        return this;
    }

    pow(value) {
        let result = this.value;
        for(let i = value; i > 1; i--){
            console.log(this.value, value, i);
            result*=this.value;
        }
        this.value = result;
        return this;
    }

    faculty() {
        let return_new = this.value;
        if(this.value % 1 === 0){
            for(let i = 1; i < this.value; i++){
                return_new *= (this.value - i); 
            }
        }
        this.value = return_new;
        return this;
    }
}
