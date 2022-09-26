class CuentaBanco {
    constructor(numeroCuenta, titular, saldo) {
      this._numeroCuenta = numeroCuenta
      this._titular = titular
      this._saldo = saldo
    }
  
    set numeroCuenta(numeroCuenta) {
      this._numeroCuenta = numeroCuenta;
    }
    set titular(titular) {
      this._titular = titular;
    }
    set saldo(saldo) {
        this._saldo = saldo;

    }
  
    get numeroCuenta() {
      return this._numeroCuenta;
    }
    get titular() {
      return this._titular;
    }
  
   get saldo() {
    return this._saldo;

   }
  

  }
  
  //CuentaAhorros
  const fig = new CuentaBanco();
  console.log(typeof fig);
  
  class CuentaAhorros extends CuentaBanco {
    constructor(numeroCuenta, titular, saldo, interes) {
      super(numeroCuenta, titular, saldo);
      this._interes = interes;
    }
    set interes(interes) {
      this._interes = interes;
    }
  
    get interes() {
      return this._interes;
    }
  }
  
  const tri = new CuentaAhorros(111222333, "Pedro pica piedra", 10000000, "10%");
  console.log(`numeroCuenta ${tri.numeroCuenta}`);
  console.log(`titular ${tri.titular}`);
  console.log(`saldo ${tri.saldo}`);
  console.log(`interes ${tri.interes}`);
  
  //CuentaCorriente
  
  const fig2 = new CuentaBanco();
  console.log(typeof fig2);
  
  class CuentaCorriente extends CuentaBanco {
    constructor(numeroCuenta, titular, saldo, prestamo, saldoTotal) {
      super(numeroCuenta, titular, saldo);
      this._prestamo = prestamo;
      this._saldoTotal = saldoTotal;
    }
    set prestamo(prestamo) {
      this._pretamo = prestamo;
    }
    set saldoTotal(saldoTotal) {
        this._saldoTotal = saldoTotal;

    }
  
    get prestamo() {
      return this._prestamo;
    }
    get saldoTotal() {
        return this._saldoTotal;
    }
    saldoTotalA(b, a) {
        b = this.saldo;
        a = this.prestamo;
        var prest = (b +a);
        return prest;
      }
  }
  
  const cua = new CuentaCorriente(123456789, "Julian", 1345666, 12);
  console.log(`numeroCuenta ${cua.numeroCuenta}`);
  console.log(`titular ${cua.titular}`);
  console.log(`saldo ${cua.saldo}`);
  console.log(`prestamo ${cua.prestamo}`);
  console.log(`Saldo total ${cua.saldoTotalA()}`);
  
  