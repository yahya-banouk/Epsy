import React, {Component} from 'react'
import "./suivi.css"
import SuiviService from '../services/SuiviService';
import Topbar from '../components/topbar/Topbar';
import SidbarPatient from '../components/sidbar/SidbarPatient';

class Suivi extends Component{
   
    constructor(props){
        super(props);
        this.state={
            answers:{
                fatigue:'',
                stress:'',
                sommeil:'',
               tristesse:''
                
            },
            isSubmitted:false

        };
        this.surveySubmit = this.surveySubmit.bind(this);
    }
    surveySubmit(e){
        e.preventDefault();

        console.log(this.state.answers);
        SuiviService.addSuiviPatient(this.state.answers);

    };
    answerSelected(e){
        var answers = this.state.answers;
        if(e.target.name=='fatigue'){
            answers.fatigue= e.target.value;
        }
        else if(e.target.name=='stress'){
            answers.stress = e.target.value;
        }
        else if(e.target.name=='sommeil'){
            answers.sommeil = e.target.value;
        }
        else if(e.target.name=='tristesse'){
            answers.tristesse = e.target.value;
        }
       
        this.setState({answers: answers}, function(){
            console.log("ansews"+this.state.answers)
        })
        
        

    };
    render(){
        
        var questions='';
        if(this.state.isSubmitted == false){
            questions= <div>
                <h2>Here are some Questions</h2>
                <form onSubmit={this.surveySubmit} className="surveyFrom">
                    <div className=" card cardSurvey">
                        <label>Quel est votre niveau de fatigue?</label>
                     <label> Pas du tout  <input type="radio" name="fatigue" value="Pas du tout" onChange={this.answerSelected.bind(this)}/></label> 
                    <label>Un Peu  <input type="radio" name="fatigue" value="Un Peu" onChange={this.answerSelected.bind(this)}/>  </label> 
                    <label>Moyennement <input type="radio" name="fatigue" value="Moyennement" onChange={this.answerSelected.bind(this)}/></label>  
                    <label> Beaucoup <input type="radio" name="fatigue" value="Beaucoup " onChange={this.answerSelected.bind(this)}/></label>  
                    <label> Extremement <input type="radio" name="fatigue" value="Extremement" onChange={this.answerSelected.bind(this)}/></label> 
           
                    </div>
                    <div className=" card cardSurvey">
                        <label>Quel est votre niveau de Stress?</label>
                        <label> Pas du tout  <input type="radio" name="stress" value="Pas du tout" onChange={this.answerSelected.bind(this)}/></label>
                        <label>Un Peu<input type="radio" name="stress" value="Un Peu" onChange={this.answerSelected.bind(this)}/> </label>
                        <label>Moyennement  <input type="radio" name="stress" value="Moyennement" onChange={this.answerSelected.bind(this)}/> </label> 
                        <label> Beaucoup  <input type="radio" name="stress" value="Beaucoup " onChange={this.answerSelected.bind(this)}/> </label>
                      <label> Extremement  <input type="radio" name="stress" value="Extremement" onChange={this.answerSelected.bind(this)}/>  </label>
           
                    </div>
                    <div className=" card cardSurvey">
                        <label>Quel est votre niveau de sommeil?</label>
                        <label> Pas du tout    <input type="radio" name="sommeil" value="Pas du tout" onChange={this.answerSelected.bind(this)}/></label>
                        <label>Un Peu  <input type="radio" name="sommeil" value="Un Peu" onChange={this.answerSelected.bind(this)}/>  </label> 
                        <label>Moyennement   <input type="radio" name="sommeil" value="Moyennement" onChange={this.answerSelected.bind(this)}/></label> 
                        <label> Beaucoup   <input type="radio" name="sommeil" value="Beaucoup " onChange={this.answerSelected.bind(this)}/>  </label> 
                    <label> Extremement  <input type="radio" name="sommeil" value="Extremement" onChange={this.answerSelected.bind(this)}/> </label> 
           
                    </div>
                    <div className=" card cardSurvey">
                        <label>Quel est votre niveau de tristesse?</label>
                        <label> Pas du tout   <input type="radio" name="tristesse" value="Pas du tout" onChange={this.answerSelected.bind(this)}/></label>
                        <label>Un Peu <input type="radio" name="tristesse" value="Un Peu" onChange={this.answerSelected.bind(this)}/> </label>
                        <label>Moyennement  <input type="radio" name="tristesse" value="Moyennement" onChange={this.answerSelected.bind(this)}/></label>
                        <label> Beaucoup   <input type="radio" name="tristesse" value="Beaucoup " onChange={this.answerSelected.bind(this)}/> </label>
                      <label> Extremement  <input type="radio" name="tristesse" value="Extremement" onChange={this.answerSelected.bind(this)}/></label> 
           
                    </div>
                    <input className="feedback-button" type="submit" value="submit" />
                </form>
            </div>
        }
        return(
            <div>
                <div>
            <Topbar/>
            </div>
            <div style={{display: "flex", flex:"4"}}>
                <div><SidbarPatient/></div>
                
                <div>{questions}</div>
             
            </div>
            </div>
        
               
        );


    }
}
export default Suivi