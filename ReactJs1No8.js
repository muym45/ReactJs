// Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
  }
  
  const Muim = new Person("Muim", 30);
  console.log(Muim.perkenalan()); // Output: Halo, nama saya Muim dan saya berumur 30 tahun.
  
  // Inheritance
  class Guru extends Person {
    constructor(nama, umur, mataPelajaran) {
      super(nama, umur);
      this.mataPelajaran = mataPelajaran;
    }
  
    mengajar() {
      return `Saya mengajar ${this.mataPelajaran}.`;
    }
  }
  
  const bapakMuim = new Guru("Muim", 30, "React JS");
  console.log(bapakMuim.perkenalan()); // Output: Halo, nama saya Muim dan saya berumur 30 tahun.
  console.log(bapakMuim.mengajar());   // Output: Saya mengajar React JS.