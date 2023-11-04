import bgimg from '../bgimg.avif'
import linkedin from '../linkedin.svg'
import github from '../github.svg'
import mail from '../gmail.png'
import resume from '../DevadattaAnuragh.pdf'
import '../App.css';
import Typed from 'typed.js';
import React from 'react';


export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Java Programmer'],
            typeSpeed: 50,
            loop: true,
            backDelay: 900,
            backSpeed: 30,

        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    })
    return (
        <div>

            <div className="bg">

                <div className="box">
                    <div className="logo">
                        <img src={bgimg} alt="" width="200px" height="200px" />
                        <div className="mediabtns">
                            <ul>
                                <a href="https://www.linkedin.com/in/devadatta-anuragh-gaje-a05518224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Br6Ze42lxToKohYAu8qU4sw%3D%3D"><img src={linkedin} alt="" width="40px" height="40px" /></a>
                                <a href="https://github.com/Devadatta-Anuragh"><img src={github} alt="" width="40px" height="40px" /></a>

                            </ul>
                        </div>
                        <div className='mail'>
                            <img src={mail} alt='' width='20px' height='20px'></img>
                            <div className='id'>devadattaanuragh@gmail.com</div>
                        </div>
                    </div>
                    <div className="summary">

                        <h1>Hai, Iam Deva!!</h1>
                        <span style={{ fontSize: "30px" }} ref={el} />
                        <a download href={resume} width='150px' height='70px'>Download Resume</a>
                    </div>
                </div>

            </div>

        </div>
    )
}