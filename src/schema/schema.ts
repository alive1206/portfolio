import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Required',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Required!',
    })
    .email('This is not a valid email.'),
  message: z
    .string()
    .min(1, {
      message: 'Required!',
    })
    .max(250, {
      message: "Message can't exceed 250 characters",
    }),
})
