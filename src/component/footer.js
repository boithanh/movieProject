const footer= ()=>{
return `    <!-- FOOTER -->
    <footer>
        <div class="footer__content container">
            <div class="row section">
                <div class="col-12 col-md-3 mt-3 mt-md-0">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Give us feedback</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3 mt-3 mt-md-0">
                    <h3>ABOUT MOVIE STAR</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Find us</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3 mt-3 mt-md-0">
                    <h3>LEGAL STUFF</h3>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Cookie policy</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3 mt-3 mt-md-0">
                    <h3>CONNECT WITH US</h3>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i>Facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i>Twitter</a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i>Google +</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__copyright">
                <p>Bối Thạnh's movie project @${new Date().getFullYear()}</p>
            </div>
        </div>
    </footer>`
}
export default footer