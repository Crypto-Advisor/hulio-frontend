import { useEffect, useState } from 'react';
import api from '../../utils/api';
import './home.css'

interface props{
    url:string,
    name:string,
    image?:string
}

const TutorialItem = ({url, name, image}:props) =>{
    return (
        <a href={url}>
            <div className="item" style={{ backgroundImage:`url(${image})` }}>
                <div>
                    <i className="fa fa-glass"></i>
                </div>
                <h1>{name}</h1>
            </div>
        </a>
    )
}

export default function Home() {
    const [tutorials, setTutorials] = useState([]);


    const getData = async () =>{
        const response = await api.get('/tutorial/get-list');

        setTutorials(response.data.result.rows);
        console.log(response.data.result.rows);
    }

    useEffect(() =>{
        getData();
    }, []);

    return (
        <div className="home-container">
            <div className="content">
                <h1 id="title">Explore the Ecosystem</h1>
                <p id="infoParagraph">Browse new projects in the Solana ecosystem that are authenticated by the hulio team. Each one of these projects has undergone a screening process and was confirmed secure and safe for use.</p>
                <br />
                <div id="siteStats">
                    <div className="container">
                        <p>Decentralized Exchanges</p>
                        <div className="carousel">
                            {
                                tutorials?.map((item:any, index) =>{
                                    if(item.category === 'Decentralized Exchanges'){
                                        return <TutorialItem url={item.url} name={item.name} image={item.image} key={index} />
                                    }
                                })
                            }
                        </div>
                        <div className="container">
                            <p>NFT Marketplaces</p>
                            <div className="carousel">
                            {
                                tutorials?.map((item:any, index) =>{
                                    if(item.category === 'NFT Marketplaces'){
                                        return <TutorialItem url={item.url} name={item.name} image={item.image} key={index} />
                                    }
                                })
                            }
                            
                            </div>
                        </div>
                    </div>
                    <p>More Coming Soon...</p>
                </div>
            </div>
        </div>
    )
}