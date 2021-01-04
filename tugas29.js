function regex() {
    let data = "Belajar menimba ilmi programming bersama NIOMIC";
    let kata1 = new RegExp("bersama");
    console.log(kata1.exec(data))
}
regex();