class MyClass {
    // Private field: only code inside the class can use it
    #x = 0;

    incX() {
        this.#x++;
        console.log(this.#x);
    }

    // Private setter and getter (declared but not used in this exercise)
    set #setX(x) {
        this.#x = x;
    }

    get #getX() {
        return this.#x;
    }
}

const m = new MyClass();

m.incX();
