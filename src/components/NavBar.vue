<script setup>
    import { RouterLink } from 'vue-router'
    import LogoImage from '../assets/img/logo.png'
</script>

<template>
    <header class="site-header">
        <nav class="navbar navbar-expand-lg modern-navbar">
            <div class="container">
                <RouterLink class="navbar-brand d-flex align-items-center gap-3" to="/">
                    <img :src="LogoImage" alt="Logo ALOALO" class="logo">
                </RouterLink>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    aria-expanded="false"
                    aria-label="Ouvrir le menu de navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav mx-auto align-items-lg-center gap-lg-2">
                        <li class="nav-item">
                            <RouterLink class="nav-link" exact-active-class="active" to="/">Accueil</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" exact-active-class="active" to="/about">A propos</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" exact-active-class="active" to="/training">Nos formations</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" exact-active-class="active" to="/contact">Contact</RouterLink>
                        </li>
                    </ul>

                    <div class="navbar-actions d-flex align-items-lg-center gap-2">
                        <!-- <a href="#" class="btn btn-link-login">Se connecter</a> -->
                        <button
                            type="button"
                            class="btn btn-login"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                        >
                            Se connecter
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
