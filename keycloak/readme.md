Frontend - Next.js
Backend - Nest.js

### Open ID Connect - auth server

Es basado en oauth2 y es una capa de identidad sobre outh2 permitiendo verificar la identidad.

Spotify - Facebook

Outh2 - Autorizacion

resource owner: Juan Carlos (usuario)
client: spotify (aplicación que quiere autorización de facebook)
resource server: facebook
authorization server - facebook

Open ID Connect = OAuth2 + login

funciona con aplicaciones command line, web, mobile

Conectar - Azure, Google Cloud, LDAP

### SAML2 - authorization server, xml

es una capa de identidad mas vieja para web

Conectar - Azure, Google Cloud, LDAP

Estoy autorizando a que la aplicación use facebook.

Con oauth2 solo tengo un contrato de acceso con un access_token pero no consigue la identidad

solo el access_token que posteriormente voy a usarlo para el login
