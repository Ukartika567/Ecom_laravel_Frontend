// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// export default createVuetify(
//   // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// )

import { VCard } from 'vuetify/components/VCard'
import { VRating } from 'vuetify/components/VRating'
import { VToolbar } from 'vuetify/components/VToolbar'
import { Ripple } from 'vuetify/directives'
import { VTextField } from 'vuetify/components/VTextField'

const vuetify = createVuetify({
  components: {
    VCard,
    VRating,
    VToolbar,
    VTextField
  },
  directives: {
    Ripple,
  },
})

export default vuetify