const header=()=>{
    return ` <!-- HEADER -->
    <header class="container-md">
        <p class="text-white text-right mb-0">
            <i class="fas fa-phone-alt"></i>
            <span class="mx-3 border-right pr-2">096.105.1014</span>
            <i class="fa fa-search"></i>
        </p>
        <nav class="header__navbar navbar navbar-expand-md">
            <a class="navbar-brand" href="#">
                <img src="./img/logo.svg" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="fa fa-bars"></i>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="movieNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="line nav-item active">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">WHAT'S ON</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">SHORTCODES</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">NEWS</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>

            </div>
        </nav>

    </header>
    <header id="headerFixed">
        <nav class="header__navbar container navbar navbar-expand-md">
            <a class="navbar-brand" href="#">
                <img src="./img/logo.svg" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#movieNavbar"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class="fa fa-bars"></i>
                </span>
            </button>

            <div class="collapse navbar-collapse" id="movieNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="line nav-item active">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">WHAT'S ON</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">SHORTCODES</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">NEWS</a>
                    </li>
                    <li class="line nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>

            </div>
        </nav>
    </header>`
}
export default header;