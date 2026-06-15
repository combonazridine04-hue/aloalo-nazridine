<template>
  <div
    class="modal fade login-modal"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content login-modal-content">
        <button
          type="button"
          class="btn-close login-close"
          data-bs-dismiss="modal"
          aria-label="Fermer"
        ></button>

        <div class="login-modal-header">
          <p class="section-kicker">Espace personnel</p>
          <h2 id="loginModalLabel">Connexion</h2>
          <p>Accedez a votre espace apprenant ou formateur.</p>
        </div>

        <form class="login-form">
          <div class="login-field">
            <label for="login-email">Adresse email</label>
            <input id="login-email" type="email" placeholder="votre@email.com">
          </div>

          <div class="login-field">
            <label for="login-password">Mot de passe</label>
            <input id="login-password" type="password" placeholder="Votre mot de passe">
          </div>

          <div class="login-options">
            <label class="login-remember">
              <input type="checkbox">
              <span>Se souvenir de moi</span>
            </label>
            <a href="#">Mot de passe oublie ?</a>
          </div>

          <button type="submit" class="login-submit">Se connecter</button>
        </form>

        <p class="login-help">
          Pas encore de compte ?
          <RouterLink to="/contact" data-bs-dismiss="modal">Contactez-nous</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
