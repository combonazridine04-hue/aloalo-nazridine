<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h2>ALOALO Mayotte Competences</h2>
          <p>
            Centre de formation a Mayotte, engage pour accompagner les parcours,
            les competences et l'insertion professionnelle.
          </p>
        </div>

        <nav class="footer-links" aria-label="Navigation du pied de page">
          <h3>Navigation</h3>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/about">Qui sommes-nous ?</RouterLink>
          <RouterLink to="/training">Nos formations</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>

        <nav class="footer-links" aria-label="Liens formations">
          <h3>Formations</h3>
          <RouterLink to="/training">Bureautique</RouterLink>
          <RouterLink to="/training">Developpeur web et web mobile</RouterLink>
          <RouterLink to="/training">Assistante maternelle</RouterLink>
          <RouterLink to="/training">Technicien superieur systemes et reseaux</RouterLink>
        </nav>

        <div class="footer-social">
          <h3>Nous suivre</h3>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn ALOALO">LinkedIn</a>
            <a href="#" aria-label="Facebook ALOALO">Facebook</a>
          </div>
          <a class="group-link" href="https://www.alomayjob.com" target="_blank" rel="noopener noreferrer">
            Groupe Alomayjob
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 ALOALO Mayotte Competences. Tous droits reserves.</p>
        <p>2 rue de la mosquee, Doujani 1, 97600 Mamoudzou</p>
      </div>
    </div>
  </footer>
</template>
