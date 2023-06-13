import GitHub from '@auth/core/providers/github'
import LinkedIn from '@auth/core/providers/linkedin'

export default {
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
    }),
    LinkedIn({
      clientId: import.meta.env.LINKEDIN_ID,
      clientSecret: import.meta.env.LINKEDIN_SECRET,


    }),
  ]
}