
module.exports = class Game21{
    makeAMove(sInput, fCallback){
        if(!this.nHighest){ //This statement is a true or false expression. 0 means false.
            this.nHighest = 1;

            this.randNumber = Math.floor((Math.random()*6)+1);

            fCallback(["New Game","Odd of Even", 
                    "I guess your odd, ill start generating random numbers between 1 to 6"]);
            return;
        }

        let sReturn = [];

        //assigning a random number with limit 6
        
        //= Math.floor((Math.random()*6)+1)
        //so here i loop till true
        //while(true){
            try
            {
                //nInput = Number(sInput)
                
                if(sInput == this.randNumber)
                {
                    sReturn.push('you won');
                    //break
                }
                else
                    sReturn.push('git gud');
            }
            catch(e)
            {
                sReturn.push('Please enter number');
            }
            //randomNumber = Math.floor((Math.random()*6)+1)
            //sReturn = randomNumber

            //fCallback(["WHATS UP"]);
        //}

        sReturn.push("" + sInput);
        sReturn.push("" + this.randNumber);
        // if(this.nHighest == 20){
        //     sReturn = '21 .... '
        // }else{
        //     let aInput = sInput.split(',') //splitting into an array
        //     this.nHighest = Number(aInput[aInput.length - 1]) //getting the last element of the array as a number
        //     let sReturn = '' // if i type 1,2,3 it returns 4,5,6
        //     let nPicks = Math.ceil(Math.random() * 3)//random numbers from 1 to 3
        //     for(let nComputer=this.nHighest+1; nComputer<this.nHighest+nPicks+1; nComputer++){
        //         if(sReturn != ''){
        //             sReturn += ','
        //         }
        //         sReturn += nComputer;
        //         if(nComputer == 20){
        //             sReturn += '... I win Haaaaaaa'
        //             this.nHighest = false
        //             break
        //         }
        //     }
        // }
        setTimeout(() => { 
            fCallback(sReturn); 
        }, 100);
        
    }
}