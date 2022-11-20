const { Component } = require("react");

class JeuDe extends Component{
    constructor(props){
        super(props);
        this.state ={face:null,compteur:0,end:false}
    }
    jouer=()=>{

    }
    render(){
        return(
            <div>
                <img src="images/init.png" alt="" />
                <h1>Jeu de De</h1>
                <p>face :{this.state.face}</p>
                <p>Nombre d`essais :{this.state.compteur}</p>
                <button onClick={this.jouer}>Jouer</button>
            </div>
        )
    }

}
export default JeuDe;