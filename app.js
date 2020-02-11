
class BowlingGame {
  constructor(record){ 
    this.record = record
  }

  get score (){
    let score = 0;
    let i = 0;
    for(let fram = 0; fram < 10; fram += 1){
      let curScore = 0;

      if(this.record[i] === 10){
        curScore = 10 + this.record[i + 1] + this.record[i + 2];
        i += 1
        //strike
      }else if(this.record[i] + this.record[i + 1] === 10){
        curScore = 10 + this.record[i + 2];
        i += 2
        //spare
      }else{
        curScore = this.record[i] + this.record[i + 1];
        i += 2
        //0-9
      }
      score = score + curScore;
    }

    return score
  }

}

module.exports.BowlingGame = BowlingGame;
