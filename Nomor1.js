// perhitungan total muatan draft
let dfKosong = 0.3
let daKosong = 0.4
let draftKosong = (daKosong + dfKosong) / 2
let disKosong = 10 + ((draftKosong-0.34)/(0.36-0.34))*(12-10)
let dfIsi = 1.3
let daIsi = 1.4
let draftIsi = (daIsi + dfIsi) / 2
let disIsi = 26 + ((draftIsi-1.34)/(1.36-1.34))*(26-24)
let totalMuatan = disIsi - disKosong
totalMuatan = totalMuatan.toFixed(2)
totalMuatan = parseInt(totalMuatan)
draft = totalMuatan

var emptyShip = new ship(draft, 12)

function ship (draft, crew){
    this.draft = draft
    this.crew = crew

    if(draft> 20){
        console.log(`Banyak ni muatan kapalnya      (draft = ${this.draft})`)
    }
    if(draft < 20 ){
        this.crew = crew*1.5
        console.log(`Lebih Banyak Muatan orangnya..     (crew = ${this.crew})`)
    }
}
console.log(emptyShip)