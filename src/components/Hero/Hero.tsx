import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
    return (
        <Container id="home">
            <div className="hero-text">
                <ScrollAnimation animateIn="fadeInUp">
                    <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                    <h1>Abhishek Nayak</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                    <h3>Frontend Developer</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                    <p className="small-resume">3 Years of Experience</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
                    <BrowserRouter>
                        {/* <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink> */}
                        <button className="button-33" role="button">Button 33</button>
                    </BrowserRouter>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
                    <div className="social-media">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="wrapper_img">
                                <img src={linkedin} alt="Linkedin" />
                            </div>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="wrapper_img">
                                <img src={githubIcon} alt="GitHub" />
                            </div>

                        </a>
                        <a
                            // href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="wrapper_img">
                                <img src={whatsapp} alt="Whatsapp" />
                            </div>

                        </a>
                        <a
                            // href="https://t.me/CodeVinayak"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="wrapper_img">
                                <img src={telegram} alt="telegram" />
                            </div>

                        </a>
                    </div>
                </ScrollAnimation>
            </div>
            <div className="hero-image">
                {/* <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}> */}
                    <img src={Illustration} alt="Ilustração" />
                {/* </ScrollAnimation> */}
            </div>
        </Container>
    )
}