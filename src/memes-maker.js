import React,{Component} from "react"

class Mememaker extends Component{
    constructor(){
        super()
        this.state={
            topLine:"",
            bottomLine:"",
            randomImg: "https://i.imgflip.com/1bh3.jpg",
            memesList:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        console.log("componenet mounted!!")
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data 
            this.setState({memesList: memes})
        })
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({[name]:value})

    }
    handleSubmit(event){
        event.preventDefault()
        console.log("generated!")
        const randomNum = Math.floor(Math.random() * this.state.memesList.length)
        console.log("randomNum = ",randomNum)
        const randomeMemeImage = this.state.memesList[randomNum].url 
        console.log("meme image = ",randomeMemeImage)
        this.setState({randomImg : randomeMemeImage})
    }

    render(){
        return(
             <div className="px-5 mar-top items-center text-center">
                <form onSubmit={this.handleSubmit}>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4"
                        type="text"
                        name="topLine"
                        placeholder="Top caption"
                        value={this.state.topLine}
                        onChange={this.handleChange}
                    />
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-teal-500 text-base px-4 py-2 mb-4"
                        type="text"
                        name="bottomLine"
                        placeholder="Bottom Caption"
                        value={this.state.bottomLine}
                        onChange={this.handleChange}
                    /> 
                    <button className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg mar-btn">Generate Template</button>
                </form>
                    <section class="text-gray-700 body-font">
                    <div className="container mx-auto flex  items-center justify-center flex-col meme">
                    <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-12 object-cover object-center rounded" alt="hero" src={this.state.randomImg}/>
                    <h2 className="top">{this.state.topLine}</h2>
                    <h2 className="bottom">{this.state.bottomLine}</h2>
    </div>
    </section>
                  
            </div>
        )
    }

}
export default Mememaker