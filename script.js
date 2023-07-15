
class Governor{
    static gender='women';
    

}
console.log(Governor);

class Person{
    constructor(weight, sleep, eat){
        this.weight=weight;
        this.sleep=sleep;
        this.eat=eat;
    }

        breakfast(){
            this.eat=eat++;
            this.weight=weight++
        }

        lunch(){
            this.eat=eat++;
            this.weight=weight++;
        }
        rest(){
            this.sleep=sleep++;
            this.weight=weight--
        }
    
}
class PostalWorker extends Person{
     constructor(weight, sleep, eat){
     super(weight, sleep, eat);
     this.work="postal Worker";
     this.walk="8 hours";
}
walkHrs(){console.log(`I walked ${this.walk} a day!`);}
position(){console.log(`I am a ${this.work} and I just delivered your main!`);}

}




class Chef extends Person{
    constructor(weight, sleep, eat){
        super(weight, sleep, eat);
        this.work='chef';
        this.skill='delcious food';
         }

    cookingSkill(){console.log(`Yum....${this.skill}`)
    }

    hours(){console.log(`I work as a ${this.work} from 10pm-12am`);}   

}



const PostalWorker1 = new PostalWorker(110, 10, 4);
const PostalWorker2 = new PostalWorker(150, 7, 5);
const Chef1= new Chef(120, 6, 3);
const Chef2= new Chef(160, 5, 2)



Chef1.hours();
Chef2.cookingSkill();
PostalWorker1.position();
PostalWorker2.walkHrs();
