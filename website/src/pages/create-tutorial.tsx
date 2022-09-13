import { useEffect, useState } from "react";
import api from "../utils/api";

interface props{
    url:string
}

const TutorialInformationBox = ({url}:props) =>{

    const handleEdit = () =>{
        alert('Coming soon')
    }
    
    const handleDelete = async () =>{
        const deleteUrl = url.substring(8, url.length-1)
        console.log(deleteUrl)
        const response = await api.delete(`/tutorial/delete/${deleteUrl}`);

        console.log(response)
        alert(`Success`)
    }

    return(
        <div className="tutorial-information-box-container">
            <div>
                <h3>URL: {url}</h3>
            </div>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}


const CreateTutorial = () =>{
    const [tutorials, setTutorials] = useState([]);

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [tutorialSteps, setTutorialSteps] = useState('{ html_steps: [] }');
    const [reward, setReward] = useState(0);
    const [currency, setCurrency] = useState('SOL');


    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const tutorialSteps_json = await JSON.parse(tutorialSteps)

        const response = await api.post('/tutorial/create', {
            url,
            name,
            category,
            image,
            description,
            tutorial_steps: tutorialSteps_json,
            reward,
            currency
        })

        console.log(name, image, description, tutorialSteps, reward, currency)
        console.log(response)

        setUrl('')
        setName('')
        setCategory('')
        setImage('')
        setDescription('')
        setTutorialSteps('')
        setReward(0)
        setCurrency('SOL')

    }

    const getTutorials = async() =>{
        const response = await api.get('/tutorial/get-list')

        setTutorials(response.data.result.rows);
        console.log(response.data.result.rows)
    }

    useEffect(() =>{
        getTutorials()
    }, [])

    return (
        <div className="create-tutorial-container">
            <h2>Tutorial Creator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Url</p>
                    <input required type='text' value={url} onChange={e => setUrl(e.target.value)} />
                </div>
                <div>
                    <p>Project Name</p>
                    <input required type='text' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Category</p>
                    <input required type='text' value={category} onChange={e => setCategory(e.target.value)} />
                </div>
                <div>
                    <p>Image</p>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    <p>Description</p>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <p>Tutorial_steps (JSON)</p>
                    <textarea required value={tutorialSteps} onChange={e => setTutorialSteps(e.target.value)} />
                </div>
                <div>
                    <p>Reward</p>
                    <input type='number' value={reward} onChange={e => setReward(parseFloat(e.target.value))} />
                </div>
                <div>
                    <p>Currency</p>
                    <select name="cryptocurrency" value={currency} onChange={e => setCurrency(e.currentTarget.value)}>
                        <option selected value="SOL">SOL</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <div>
                {tutorials?.map((item:any, index:number) =>{
                    return <TutorialInformationBox url={item.url} key={index}/>
                })}
            </div>
        </div>
    )
}

export default CreateTutorial;