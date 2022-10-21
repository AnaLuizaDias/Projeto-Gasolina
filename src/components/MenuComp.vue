<template>
  <div class="black">
    
    <br />
    <nav class="navbar navbar-expand-lg navbar-dark teste">
      <div class="nome text-center navbar-dark">
      <img src="@/assets/images/gasolina.jpeg" alt="">
    </div>
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link class="nav-link" to="/home"
                >Home</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ver mais
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <router-link class="dropdown-item" to="/experimento"
                    >Experimento</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/tabela"
                    >Tabela</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/integrantes"
                    >Integrantes</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
.black {
  background-color: #0E0E0E;
}
h1{
  color: rgb(255, 228, 77);
  font-family: 'Fredoka One', cursive;
}
img{
  width: 200px;
  height: 120px;
  padding: 10px;
}

</style>
