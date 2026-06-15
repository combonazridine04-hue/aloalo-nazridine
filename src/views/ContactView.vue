<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="contact-header">
        <p class="section-kicker">Contact</p>
        <h2>Parlons de votre projet de formation</h2>
        <p>
          Une question sur nos formations, une inscription ou un accompagnement ?
          Envoyez-nous un message, nous vous repondrons rapidement.
        </p>
      </div>

      <div class="contact-layout">
        <form class="contact-form">
          <div class="form-row">
            <label for="name">Nom complet</label>
            <input id="name" type="text" name="name" placeholder="Votre nom">
          </div>

          <div class="form-row">
            <label for="email">Adresse email</label>
            <input id="email" type="email" name="email" placeholder="votre@email.com">
          </div>

          <div class="form-row">
            <label for="phone">Telephone</label>
            <input id="phone" type="tel" name="phone" placeholder="06 00 00 00 00">
          </div>

          <div class="form-row">
            <label for="training">Formation souhaitee</label>
            <select id="training" name="training">
              <option value="">Selectionnez une formation</option>
              <option value="bureautique">Bureautique</option>
              <option value="developpeur-web">Developpeur web et web mobile</option>
              <option value="assistante-maternelle">Assistante maternelle</option>
              <option value="systemes-reseaux">Technicien superieur systemes et reseaux</option>
            </select>
          </div>

          <div class="form-row form-row-full">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Votre message"></textarea>
          </div>

          <button type="submit" class="contact-submit">Envoyer le message</button>
        </form>

        <aside class="contact-info">
          <div class="contact-details">
            <div>
              <span>Adresse</span>
              <p>2 rue de la mosquee, Doujani 1<br>97600 Mamoudzou, Mayotte</p>
            </div>

            <div>
              <span>Telephone</span>
              <p><a href="tel:+262639396396">06 39 39 63 96</a></p>
            </div>

            <div>
              <span>Email</span>
              <p><a href="mailto:contact@aloalo.alomayjob.com">contact@aloalo.alomayjob.com</a></p>
            </div>
          </div>

          <div class="contact-map">
            <iframe
              title="Carte Google Maps du centre ALOALO Mayotte Competences"
              src="https://www.google.com/maps?q=2%20rue%20de%20la%20mosqu%C3%A9e%2C%20Doujani%201%2C%2097600%20Mamoudzou%2C%20Mayotte&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
