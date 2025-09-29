import './footer.css'

function Footer() {

    return(
        <footer id='footer'>
            <input type="text" placeholder='Full Name' name='full-name' id='full-name'/>
            <input type="email" placeholder='Email' name='email' id='email'/>
            <textarea name="message" id="message" placeholder='Your message'></textarea>
            <button id="send">Send</button>
        </footer>
    );
}

export default Footer